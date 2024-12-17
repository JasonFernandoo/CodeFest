use ic_cdk::api;
use ic_cdk_macros::{init, query, update};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    DefaultMemoryImpl,
};
use std::cell::RefCell;
use std::collections::HashMap;

type TokenId = u64;
type Metadata = Vec<(String, String)>;
type PrincipalId = String;
type Memory = VirtualMemory<DefaultMemoryImpl>;

// To store global state in a Rust canister, we use the `thread_local!` macro.
thread_local! {
    // The memory manager is used for simulating multiple memories. Given a `MemoryId` it can
    // return a memory that can be used by stable structures.
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    // We store the greeting in a `Cell` in stable memory such that it gets persisted over canister upgrades.
    static GREETING: RefCell<ic_stable_structures::Cell<String, Memory>> = RefCell::new(
        ic_stable_structures::Cell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), "Hello, ".to_string()
        ).unwrap()
    );
}

// This update method stores the greeting prefix in stable memory.
#[ic_cdk::update]
fn set_greeting(prefix: String) {
    GREETING.with_borrow_mut(|greeting| {
        greeting.set(prefix).unwrap();
    });
}

// This query method returns the currently persisted greeting with the given name.
#[ic_cdk::query]
fn greet(name: String) -> String {
    let greeting = GREETING.with_borrow(|greeting| greeting.get().clone());
    format!("{greeting}{name}!")
}

// Define the structure of an NFT
#[derive(Clone, Debug)]
struct NFT {
    owner: PrincipalId,
    metadata: Metadata,
}

// Define the state of the canister
#[derive(Default)]
struct NFTCanister {
    nfts: HashMap<TokenId, NFT>,
    next_token_id: TokenId,
}

thread_local! {
    // Use thread-local storage for safe state management without `unsafe`.
    static STATE: RefCell<NFTCanister> = RefCell::new(NFTCanister::default());
}

#[init]
fn init() {
    // Initialize state if required. Thread-local storage ensures safety.
    ic_cdk::println!("NFT Canister initialized");
}

#[update]
fn mint(metadata: Metadata, owner: PrincipalId) -> TokenId {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        let token_id = state.next_token_id;
        state.nfts.insert(
            token_id,
            NFT {
                owner: owner.clone(),
                metadata,
            },
        );
        state.next_token_id += 1;

        ic_cdk::println!("Minted NFT with Token ID: {}", token_id);
        token_id
    })
}

#[update]
fn transfer(token_id: TokenId, to: PrincipalId) -> Result<String, String> {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        if let Some(nft) = state.nfts.get_mut(&token_id) {
            if nft.owner == api::caller().to_string() {
                nft.owner = to.clone();
                ic_cdk::println!("Transferred NFT ID {} to {}", token_id, to);
                return Ok("Transfer successful".to_string());
            } else {
                return Err("You are not the owner of this NFT".to_string());
            }
        }
        Err("NFT not found".to_string())
    })
}

#[query]
fn metadata(token_id: TokenId) -> Option<Metadata> {
    STATE.with(|state| {
        let state = state.borrow();
        state.nfts.get(&token_id).map(|nft| nft.metadata.clone())
    })
}

#[query]
fn owner_of(token_id: TokenId) -> Option<PrincipalId> {
    STATE.with(|state| {
        let state = state.borrow();
        state.nfts.get(&token_id).map(|nft| nft.owner.clone())
    })
}

// Export the interface for the smart contract.
ic_cdk::export_candid!();
