use base64::encode;
use candid::Principal;
use ic_cdk::api::{call::call, caller, management_canister::main as mgmt};
use ic_cdk_macros::{init, query, update};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    DefaultMemoryImpl,
};
use std::cell::RefCell;
use std::collections::{HashMap, HashSet};

// ------------------------------------------------------------------------------------
// ICRC-7 GUIDANCE (Simplified):
//
// * icrc7_mint: Mint a new NFT and return its token_id.
// * icrc7_transfer: Transfer an NFT from the caller to a new owner.
// * icrc7_owner_of: Return the owner of an NFT.
// * icrc7_metadata: Return metadata for a particular token_id.
// * icrc7_total_supply: Return the total number of minted NFTs.
// * icrc7_balance_of: Return how many NFTs a given principal owns (often 0 or multiple).
// * (Optional) icrc7_burn / icrc7_delete, icrc7_approve, etc.
// ------------------------------------------------------------------------------------

// ------------------------------ Type Definitions -------------------------------------
type TokenId = u64;
type Metadata = Vec<(String, String)>;
type PrincipalId = String;
type Memory = VirtualMemory<DefaultMemoryImpl>;

// ------------------------------ Global State -----------------------------------------
// We use stable memory for the canister's persistent data.
thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static STATE: RefCell<NFTCanister> = RefCell::new(NFTCanister::default());
}

// ------------------------------ Data Structures --------------------------------------
#[derive(Clone, Debug)]
struct NFT {
    owner: PrincipalId,
    metadata: Metadata,
}

#[derive(Default)]
struct NFTCanister {
    /// Map each token_id to its NFT data (owner + metadata).
    nfts: HashMap<TokenId, NFT>,
    /// For quick “balance_of” queries, track how many tokens each principal owns.
    balances: HashMap<PrincipalId, HashSet<TokenId>>,
}

// ------------------------------ Initialization ---------------------------------------
#[init]
fn init() {
    ic_cdk::println!("ICRC-7 NFT Canister initialized.");
}

// ------------------------------ Internal Helpers -------------------------------------
impl NFTCanister {
    /// Helper to update the `balances` map when an NFT is transferred or minted.
    fn internal_add_token_to_owner(&mut self, owner: &PrincipalId, token_id: TokenId) {
        let entry = self.balances.entry(owner.clone()).or_default();
        entry.insert(token_id);
    }

    /// Helper to remove the NFT from its current owner in the balances map.
    fn internal_remove_token_from_owner(&mut self, owner: &PrincipalId, token_id: &TokenId) {
        if let Some(entry) = self.balances.get_mut(owner) {
            entry.remove(token_id);
            // Optional: if empty, remove the entire entry to keep the map smaller
            if entry.is_empty() {
                self.balances.remove(owner);
            }
        }
    }
}

// ------------------------------ ICRC-7 Methods ---------------------------------------

/// Mint a new NFT and return its `token_id`.
#[update(name = "icrc7_mint")]
async fn icrc7_mint(
    to: PrincipalId,
    description: String,
    name: String,
    image: Vec<u8>,
) -> Result<TokenId, String> {
    // 1) Get random bytes from the management canister.
    //    raw_rand returns a tuple containing Vec<u8>, so destructure it.
    let (random_bytes,): (Vec<u8>,) = call(Principal::management_canister(), "raw_rand", ())
        .await
        .map_err(|err| format!("Failed to call raw_rand: {:?}", err))?;

    // 2) Convert the first 8 bytes into a u64. (Check length for safety)
    if random_bytes.len() < 8 {
        return Err("Not enough bytes returned from raw_rand".into());
    }
    let mut buf = [0u8; 8];
    buf.copy_from_slice(&random_bytes[0..8]);
    let random_id = u64::from_le_bytes(buf);

    // 3) Build your metadata and store the NFT.
    STATE.with(|state| {
        let mut state = state.borrow_mut();

        // Convert image to Base64
        let base64_image = encode(&image);

        // Create NFT metadata (example key-value pairs).
        let metadata = vec![
            ("owner".to_string(), to.clone()),
            ("description".to_string(), description),
            ("name".to_string(), name),
            ("image".to_string(), base64_image),
        ];

        // If collisions are a concern, you need logic to check if `random_id` already exists.
        // For demonstration, we’ll assume collisions are rare enough. In production,
        // you may consider a loop until we find an unused ID.
        if state.nfts.contains_key(&random_id) {
            return Err(format!(
                "Random collision: token_id {} already exists. Try again.",
                random_id
            ));
        }

        // 4) Insert NFT in the map.
        state.nfts.insert(
            random_id,
            NFT {
                owner: to.clone(),
                metadata,
            },
        );
        // Update the balances.
        state.internal_add_token_to_owner(&to, random_id);

        ic_cdk::println!("Minted NFT with Token ID: {}", random_id);
        Ok(random_id)
    })
}

/// Transfer an NFT from the caller to `new_owner`.
#[update(name = "icrc7_transfer")]
fn icrc7_transfer(token_id: TokenId, new_owner: PrincipalId) -> Result<String, String> {
    let caller = caller().to_text();
    STATE.with(|state| {
        let mut state = state.borrow_mut();

        // 1) Check that the NFT exists
        let nft = state
            .nfts
            .get_mut(&token_id)
            .ok_or_else(|| format!("Token ID {} does not exist", token_id))?;

        // 2) Verify that the caller is the current owner
        if nft.owner != caller {
            return Err(format!(
                "Caller {} is not the owner of token {}",
                caller, token_id
            ));
        }

        // 3) Update the NFT’s owner
        let old_owner = std::mem::take(&mut nft.owner);
        nft.owner = new_owner.clone();

        // 4) Update `balances` map
        state.internal_remove_token_from_owner(&old_owner, &token_id);
        state.internal_add_token_to_owner(&new_owner, token_id);

        Ok(format!(
            "Successfully transferred token {} from {} to {}",
            token_id, old_owner, new_owner
        ))
    })
}

/// Return the owner of a given `token_id`.
#[query(name = "icrc7_owner_of")]
fn icrc7_owner_of(token_id: TokenId) -> Option<PrincipalId> {
    STATE.with(|state| {
        let state = state.borrow();
        state.nfts.get(&token_id).map(|nft| nft.owner.clone())
    })
}

/// Return metadata for the specified `token_id`.
#[query(name = "icrc7_metadata")]
fn icrc7_metadata(token_id: TokenId) -> Option<Metadata> {
    STATE.with(|state| {
        let state = state.borrow();
        state.nfts.get(&token_id).map(|nft| nft.metadata.clone())
    })
}

/// Return the total supply of minted NFTs (in this simple example, count of minted).
#[query(name = "icrc7_total_supply")]
fn icrc7_total_supply() -> u64 {
    STATE.with(|state| {
        let state = state.borrow();
        state.nfts.len() as u64
    })
}

/// Return how many NFTs `owner` holds.
#[query(name = "icrc7_balance_of")]
fn icrc7_balance_of(owner: PrincipalId) -> u64 {
    STATE.with(|state| {
        let state = state.borrow();
        state
            .balances
            .get(&owner)
            .map(|set| set.len() as u64)
            .unwrap_or_default()
    })
}

// ------------------------------ Optional / Extra Methods -----------------------------
/// Burn or “delete” an NFT by `token_id`.
#[update(name = "icrc7_burn")]
fn icrc7_burn(token_id: TokenId) -> Result<String, String> {
    let caller = caller().to_text();
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if let Some(nft) = state.nfts.remove(&token_id) {
            // Only allow the owner to burn
            if nft.owner != caller {
                // put it back if the caller isn't the owner
                state.nfts.insert(token_id, nft);
                return Err(format!(
                    "Caller {} is not the owner of token {}",
                    caller, token_id
                ));
            }
            // remove from balances
            state.internal_remove_token_from_owner(&caller, &token_id);
            Ok(format!("NFT with Token ID {} has been burned.", token_id))
        } else {
            Err(format!("NFT with Token ID {} does not exist.", token_id))
        }
    })
}

/// (Non-standard) For debugging or viewing all NFTs.
#[query]
fn list_all_nfts() -> Vec<(TokenId, Metadata)> {
    STATE.with(|state| {
        let state = state.borrow();
        state
            .nfts
            .iter()
            .map(|(token_id, nft)| (*token_id, nft.metadata.clone()))
            .collect()
    })
}

/// Retrieve the raw image data by `token_id` (decode from the stored Base64).
#[query(name = "icrc7_get_image")]
fn icrc7_get_image(token_id: TokenId) -> Vec<u8> {
    STATE.with(|state| {
        let state = state.borrow();
        state
            .nfts
            .get(&token_id)
            .and_then(|nft| {
                nft.metadata
                    .iter()
                    .find(|(key, _)| key == "image")
                    .map(|(_, value)| value)
            })
            .and_then(|base64_image| base64::decode(base64_image).ok())
            .unwrap_or_default()
    })
}

// ------------------------------ Identity ------------------------------------------------
// Return the caller's principal ID.
#[query]
fn whoami() -> String {
    caller().to_string()
}

// ------------------------------ Export Candid ----------------------------------------
ic_cdk::export_candid!();
