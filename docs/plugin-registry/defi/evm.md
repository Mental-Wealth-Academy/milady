---
title: "EVM Plugin"
sidebarTitle: "EVM"
description: "EVM chain connector for Milady — Ethereum, Base, Arbitrum, Optimism, and other EVM-compatible chains."
---

The EVM plugin enables Milady agents to interact with Ethereum and EVM-compatible chains — reading balances, sending tokens, interacting with smart contracts, executing swaps, and participating in DeFi protocols.

**Package:** `@elizaos/plugin-evm` (community)

## Overview

The EVM plugin provides the agent with an embedded wallet and a set of on-chain actions covering the most common DeFi operations across all major EVM chains.

## Installation

```bash
milady plugins install evm
```

## Configuration

### Required

| Variable | Description |
|----------|-------------|
| `EVM_PRIVATE_KEY` | Hex-encoded private key (with or without `0x`) for the agent's wallet |

### RPC Providers

| Variable | Description |
|----------|-------------|
| `EVM_RPC_PROVIDER` | Preferred provider: `alchemy`, `infura`, `ankr`, or `elizacloud` |
| `ALCHEMY_API_KEY` | Alchemy API key (Ethereum, Polygon, Arbitrum, Optimism, Base, Avalanche, BSC, etc.) |
| `INFURA_API_KEY` | Infura API key (Ethereum, Polygon, Arbitrum, Optimism, Base, Avalanche, Linea, etc.) |
| `ANKR_API_KEY` | Ankr premium API key (broadest EVM chain support) |

### Chain-Specific RPC Overrides

| Variable | Description |
|----------|-------------|
| `ETHEREUM_PROVIDER_ETHEREUM` | Custom RPC URL for Ethereum mainnet |
| `ETHEREUM_PROVIDER_BASE` | Custom RPC URL for Base mainnet |
| `ETHEREUM_PROVIDER_ARBITRUM` | Custom RPC URL for Arbitrum One |
| `ETHEREUM_PROVIDER_OPTIMISM` | Custom RPC URL for Optimism mainnet |

For other chains, set `ETHEREUM_PROVIDER_<CHAINNAME>` or `EVM_PROVIDER_<CHAINNAME>`.

### Testnet

| Variable | Default | Description |
|----------|---------|-------------|
| `SEPOLIA_RPC_URL` | `https://ethereum-sepolia-rpc.publicnode.com` | Sepolia testnet RPC |
| `BASE_SEPOLIA_RPC_URL` | `https://sepolia.base.org` | Base Sepolia testnet RPC |

### TEE (Trusted Execution Environment)

| Variable | Default | Description |
|----------|---------|-------------|
| `TEE_MODE` | `OFF` | Enable TEE mode for secure key derivation |
| `WALLET_SECRET_SALT` | — | Salt value for TEE-derived wallet keypair |

## Supported Chains

| Chain | Chain ID | Native Token |
|-------|----------|-------------|
| Ethereum Mainnet | 1 | ETH |
| Base | 8453 | ETH |
| Arbitrum One | 42161 | ETH |
| Optimism | 10 | ETH |
| Polygon | 137 | MATIC |
| BSC | 56 | BNB |
| Avalanche C-Chain | 43114 | AVAX |
| Zora | 7777777 | ETH |
| Mode | 34443 | ETH |
| Blast | 81457 | ETH |

## Actions

| Action | Description |
|--------|-------------|
| `TRANSFER_TOKEN` | Send ETH or ERC-20 tokens to an address |
| `SWAP_TOKENS` | Swap tokens via DEX aggregators (1inch, Uniswap) |
| `GET_BALANCE` | Check ETH and token balances |
| `DEPLOY_CONTRACT` | Deploy a smart contract |
| `CALL_CONTRACT` | Read from a smart contract |
| `SEND_TRANSACTION` | Send a raw transaction |
| `SIGN_MESSAGE` | Sign an arbitrary message |
| `GET_TRANSACTION` | Look up a transaction by hash |
| `BRIDGE_TOKENS` | Bridge tokens cross-chain |

## Providers

| Provider | Description |
|----------|-------------|
| `walletBalance` | Current ETH and token balances |
| `walletAddress` | The agent's wallet address |
| `chainInfo` | Current chain ID and network |

## Usage Examples

After the plugin is loaded, the agent can execute on-chain operations through natural language:

> "Send 0.01 ETH to vitalik.eth"

> "Swap 100 USDC for ETH on Base"

> "What's my wallet balance on Arbitrum?"

> "Deploy the ERC-20 contract to Base Sepolia"

## Security Considerations

- The private key grants full control of the agent's wallet. Store it securely using the [Secrets Manager Plugin](/plugin-registry/secrets-manager).
- Consider using a dedicated agent wallet with limited funds rather than a primary wallet.
- The plugin does not impose spending limits — any action the LLM selects will execute. Configure the character carefully.
- Use testnets (Base Sepolia, Arbitrum Sepolia) for development.

## Testnet Configuration

```json
{
  "settings": {
    "secrets": {
      "EVM_PRIVATE_KEY": "0x...",
      "EVM_RPC_URL": "https://sepolia.base.org"
    }
  }
}
```

## Related

- [Solana Plugin](/plugin-registry/defi/solana) — Solana chain integration
- [Secrets Manager Plugin](/plugin-registry/secrets-manager) — Secure key storage
- [Wallet Guide](/guides/wallet) — Wallet setup and management
