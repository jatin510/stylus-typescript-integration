# Interacting with Stylus Smart Contracts using TypeScript

## Overview
This document explains how to interact with Rust-based Stylus smart contracts using TypeScript.

## Workflow

### 1. Develop and Deploy Rust Stylus Contract
First, develop your Rust-based ( language of your choice) Stylus smart contract and deploy it to an Arbitrum Stylus node.

### 2. Export the Contract ABI
After deployment, export the contract's ABI:

```bash
cargo stylus export-abi --output ./abi.txt
```


### 3. Set Up Environment Variables
Configure the necessary environment variables to connect to your deployed contract:

```bash
export RPC_URL=http://localhost:8547
export PRIVATE_KEY=your_private_key_here
export STYLUS_CONTRACT_ADDRESS="0x7e32b54800705876d3b5cfbc7d9c226a211f7c1a"
```


### 4. Create TypeScript Client
Create a TypeScript file (e.g., `hello-counter.ts`) that uses ethers.js to interact with your contract:

```typescript
import { ethers } from 'ethers';
// Connect to the Arbitrum node
// Use the contract's ABI and address
// Call contract functions
```

### 5. Run the TypeScript Client
Run your TypeScript client to interact with the deployed contract:

```bash
ts-node hello-counter.ts
```


## Key Points
- Stylus contracts are written in Rust but expose a standard Ethereum interface
- The ABI defines which functions are available to call from TypeScript
- You must use the correct ABI that matches your deployed contract
- Your wallet needs to be funded with ETH to pay for transactions

