

import { ethers } from 'ethers';

async function main() {
  // Connect to your local Arbitrum node
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8547');
  
  // Set up your wallet with private key
  const privateKey = '0xb6b15c8cb491557369f3c7d2c287b053eb229daa9c22138887752191c9520659'; // Your private key
  const wallet = new ethers.Wallet(privateKey, provider);
  const balance = await wallet.getBalance();
  console.log(`Eth Balance: ${balance}`);
  
  // Contract address and ABI
  const contractAddress = '0x7e32b54800705876d3b5cfbc7d9c226a211f7c1a';
  const abi = [
    "function number() external view returns (uint256)",
    "function setNumber(uint256 number) external",
    "function increment() external"
  ];
  
  // Create contract instance
  const counter = new ethers.Contract(contractAddress, abi, wallet);
  
  // Read the current counter value
  const currentValue = await counter.number();
  console.log(`Current counter value: ${currentValue.toString()}`);
  
  // Increment the counter
  console.log('Incrementing counter...');
  const tx = await counter.increment();
  await tx.wait();
  console.log('Transaction confirmed!');
  
  // Read the new counter value
  const newValue = await counter.number();
  console.log(`New counter value: ${newValue.toString()}`);
}

main().catch(console.error);