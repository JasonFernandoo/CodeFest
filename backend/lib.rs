use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    DefaultMemoryImpl,
};
use std::cell::RefCell;

type Memory = VirtualMemory<DefaultMemoryImpl>;

// To store global state in a Rust canister, we use the `thread_local!` macro.
thread_local! {
    // The memory manager is used for simulating multiple memories. Given a `MemoryId`, it can
    // return a memory that can be used by stable structures.
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    // We store the greeting in a `Cell` in stable memory such that it gets persisted over canister upgrades.
    static GREETING_TEXT: RefCell<ic_stable_structures::Cell<String, Memory>> = RefCell::new(
        ic_stable_structures::Cell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 
            "Hello, ".to_string()
        ).unwrap()
    );

    static GREETING_COUNT: RefCell<u32> = RefCell::new(0);

}

// This update method stores the greeting prefix in stable memory.
#[ic_cdk::update]
fn set_greeting(prefix: String) {
    GREETING_TEXT.with(|greeting| {
        greeting.borrow_mut().set(prefix).unwrap();
    });
}

// This update method increments the stored count by the given number.
#[ic_cdk::update]
fn inc(prefix: u32) {
    GREETING_COUNT.with(|greeting| {
        *greeting.borrow_mut() += prefix; 
    });
}

// This query method returns the current value of the incremented count.
#[ic_cdk::query]
fn get_count() -> u32 {
    GREETING_COUNT.with(|count| *count.borrow())
}

// This query method returns the currently persisted greeting with the given name.
#[ic_cdk::query]
fn greet(name: String) -> String {
    let greeting = GREETING_TEXT.with(|greeting| greeting.borrow().get().clone());
    format!("{greeting}{name}!")
}

// Export the interface for the smart contract.
ic_cdk::export_candid!();
