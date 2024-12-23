use base64::encode;
use ic_cdk_macros::{init, query, update};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    DefaultMemoryImpl,
};
use std::cell::RefCell;
use std::collections::HashMap; // For Base64 encoding

// Type definitions
type TokenId = u64;
type Metadata = Vec<(String, String)>; // Metadata for NFTs
type PrincipalId = String;
type Memory = VirtualMemory<DefaultMemoryImpl>;

thread_local! {
    // Manage stable memory for state
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    // Canister state for storing NFTs
    static STATE: RefCell<NFTCanister> = RefCell::new(NFTCanister::default());
}

// NFT structure definition
#[derive(Clone, Debug)]
struct NFT {
    owner: PrincipalId,
    metadata: Metadata,
}

// Canister state definition
#[derive(Default)]
struct NFTCanister {
    nfts: HashMap<TokenId, NFT>,
    next_token_id: TokenId,
}

#[init]
fn init() {
    ic_cdk::println!("NFT Canister initialized.");
}

// Mint a new NFT with metadata
#[update]
fn mint(owner: PrincipalId, description: String, name: String, image: Vec<u8>) -> TokenId {
    STATE.with(|state| {
        let mut state = state.borrow_mut();

        // Convert the image bytes to Base64
        let base64_image = encode(&image);

        // Create NFT metadata with a correct order
        let metadata = vec![
            ("owner".to_string(), owner.clone()),
            ("description".to_string(), description),
            ("name".to_string(), name),
            ("image".to_string(), base64_image),
        ];

        // Generate a unique token ID
        let token_id = state.next_token_id;

        // Store the NFT
        state.nfts.insert(token_id, NFT { owner, metadata });

        // Increment the token ID counter
        state.next_token_id += 1;

        ic_cdk::println!("Minted NFT with Token ID: {}", token_id);
        token_id
    })
}

// Query metadata of an NFT by Token ID
#[query]
fn metadata(token_id: TokenId) -> Option<Metadata> {
    STATE.with(|state| {
        let state = state.borrow();
        state.nfts.get(&token_id).map(|nft| nft.metadata.clone())
    })
}

// Query owner of an NFT by Token ID
#[query]
fn owner_of(token_id: TokenId) -> Option<PrincipalId> {
    STATE.with(|state| {
        let state = state.borrow();
        state.nfts.get(&token_id).map(|nft| nft.owner.clone())
    })
}

// Delete an NFT by Token ID
#[update]
fn delete_nft(token_id: TokenId) -> Result<String, String> {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if state.nfts.remove(&token_id).is_some() {
            Ok(format!("NFT with Token ID {} has been deleted.", token_id))
        } else {
            Err(format!("NFT with Token ID {} does not exist.", token_id))
        }
    })
}

// List all NFTs (for debugging or viewing all NFTs)
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

// Export the interface
ic_cdk::export_candid!();
