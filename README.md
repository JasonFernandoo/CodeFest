# Hello, world!

![Hello, world!](/examples/_attachments/hello_world.png)

Start developing on ICP with the “Hello, world!” Rust smart contract. Learn how entire dapps, composed of frontend, backend, and data storage, are built from canister smart contracts.

## What is Hello, world?

"Hello, world!" projects are a common starting point for developers learning new languages or platforms, as it provides a simple demonstration of how a programming language can be written for an application.

This variation of "Hello, world!" is written in [Rust](https://internetcomputer.org/docs/current/developer-docs/backend/rust/),a programming language designed specifically for developing smart contracts on ICP. Smart contracts on ICP are called **canisters.**

Every ICP smart contract must be [compiled into WebAssembly](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/compile) before it can be deployed. Rust's compiler supports compiling to Wasm directly under the hood. It offers seamless integration for ICP features and makes the most out of WebAssembly's functionalities.

### Project structure

The `/backend` folder contains the Rust smart contract:

- `Cargo.toml`, which defines the crate that will form the backend
- `lib.rs`, which contains the actual smart contract, and exports its interface

The `/frontend` folder contains web assets for the application's user interface. The user interface is written with plain JavaScript, but any frontend framework can be used.

## What you'll learn

### Query calls

In this "Hello, world!" example, the Rust smart contract exposes a `query` method that can be called to return a "Hello, #name!" message to the user. [Query calls](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/call/overview#query-calls) are used to return data from a smart contract, and their response is not validated by consensus.

### Onchain frontend

ICP is the only blockchain that can serve web assets (HTML, CSS, JS, and others) from the blockchain to your web browser. To host these assets, a canister smart contract implements a method that accepts and consumes an HTTP request, then returns the web assets in the HTTP response.

In this example, the React frontend is compiled into an [asset canister smart contract](https://internetcomputer.org/docs/current/developer-docs/web-apps/application-frontends/overview) and deployed to ICP.

To communicate with the backend smart contract, it uses the [ICP JavaScript agent](https://internetcomputer.org/docs/current/developer-docs/developer-tools/off-chain/agents/javascript-agent).

## Learn more

- [Rust documentation](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)
- [ICP development workflow](https://internetcomputer.org/docs/current/developer-docs/getting-started/development-workflow)
- [Inside canisters](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/overview/inside-canisters)
- [Canister lifecycle](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/overview/canister-lifecycle)
- [Application frontends](https://internetcomputer.org/docs/current/developer-docs/web-apps/application-frontends/overview)
- [React quickstart](https://internetcomputer.org/docs/current/developer-docs/getting-started/quickstart/react-quickstart)
