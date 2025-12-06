# KYORO Token - Solana SPL Token Creation

A complete guide to creating a custom SPL token on Solana with metadata, including name, symbol, and image.

## 🐱 About KYORO

KYORO is a utility token created on the Solana blockchain as a demonstration of the complete token creation process. The token features a custom cat mascot and serves as the gaming token for the Open-Lotto protocol.

**Token Details:**
- **Name:** KYORO
- **Symbol:** KYORO
- **Mint Address:** `AHgVJscCvsGR7jWX39VRFKvyZU1jjaNcARHawYsinM6d`
- **Supply:** 1,000,000 tokens
- **Decimals:** 9
- **Network:** Solana Mainnet

## 🚀 What This Project Demonstrates

- Creating SPL tokens on Solana mainnet
- Adding custom metadata (name, symbol, image) using Metaplex
- TypeScript development with Solana/Metaplex SDKs
- Handling metadata updates and verified creators
- Real-world token deployment costs and considerations

## 📁 Project Structure
```
kyoro-token-metadata/
├── add-metadata.ts         # Initial metadata creation script
├── update-metadata.ts      # Script to update metadata URI
├── kyoro-metadata.json     # Token metadata JSON file
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🛠️ Technologies Used

- **Solana CLI** - Token creation and management
- **TypeScript** - Development language
- **Metaplex Umi SDK** - Metadata management
- **GitHub** - Image and metadata hosting

## 💰 Cost Breakdown

Total cost to create KYORO token with full metadata on Solana mainnet:

| Operation | Cost (SOL) | Cost (USD) |
|-----------|------------|------------|
| Token creation | ~0.00001 | ~$0.002 |
| Token account | ~0.00001 | ~$0.002 |
| Minting tokens | ~0.00001 | ~$0.002 |
| Initial metadata | ~0.00001 | ~$0.002 |
| Metadata update | ~0.00001 | ~$0.002 |
| **Total** | **~0.00005 SOL** | **~$0.012** |

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js and npm installed
- Solana CLI configured with a funded wallet
- Git installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arussel/kyoro-token-metadata.git
cd kyoro-token-metadata
```

2. Install dependencies:
```bash
npm install
```

3. Configure your Solana CLI for mainnet:
```bash
solana config set --url https://api.mainnet-beta.solana.com
```

### Creating Your Own Token

1. **Create the token mint:**
```bash
spl-token create-token
```

2. **Create a token account:**
```bash
spl-token create-account <YOUR_MINT_ADDRESS>
```

3. **Mint tokens:**
```bash
spl-token mint <YOUR_MINT_ADDRESS> 1000000
```

4. **Update the scripts with your mint address and run:**
```bash
npx ts-node add-metadata.ts
npx ts-node update-metadata.ts
```

## 📖 Key Learnings

### Metadata Challenges
- Initial metadata creation doesn't require a URI
- Images require a separate JSON file hosted publicly
- Verified creators cannot be removed once set
- Metadata updates require preserving the exact creator structure

### Best Practices
- Host metadata JSON on GitHub for permanence
- Use square images (512x512) for token icons
- Keep descriptions generic to avoid regulatory issues
- Test on devnet before mainnet deployment

### Common Gotchas
- Phantom wallet may flag new tokens as spam initially
- TypeScript module configuration can be tricky with Solana SDKs
- Metadata propagation can take time across different explorers

## 🔗 Links

- **Token on Solscan:** [View KYORO](https://solscan.io/token/AHgVJscCvsGR7jWX39VRFKvyZU1jjaNcARHawYsinM6d)
- **Metadata JSON:** [kyoro-metadata.json](./kyoro-metadata.json)
- **Creator's Portfolio:** [arussel.github.io](https://arussel.github.io)

## 🤝 Contributing

This project serves as a learning resource. Feel free to:
- Fork the repository
- Create your own token using this as a template
- Submit improvements or corrections via pull requests
- Share your own token creation experiences

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Disclaimer:** This is educational content. KYORO is a utility token created for learning purposes. Not financial advice.