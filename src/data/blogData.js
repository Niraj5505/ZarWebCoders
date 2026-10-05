// Blog Data - Single source of truth for ZarWebCoders Web3 Insights

export const BLOG_CATEGORIES = [
  'All',
  'Smart Contracts',
  'dApps',
  'Blockchain',
  'Web3 Development',
  'DeFi',
  'Tutorials',
  'Industry News',
]

export const SIDEBAR_CATEGORIES = [
  { name: 'Smart Contracts', count: 12, icon: 'FileCode' },
  { name: 'dApps', count: 10, icon: 'Layers' },
  { name: 'Blockchain', count: 8, icon: 'Blocks' },
  { name: 'Web3 Development', count: 15, icon: 'Code2' },
  { name: 'DeFi', count: 6, icon: 'Coins' },
  { name: 'Tutorials', count: 9, icon: 'BookOpen' },
  { name: 'Industry News', count: 7, icon: 'Newspaper' },
]

export const BLOG_ARTICLES = [
  {
    id: 1,
    slug: 'how-to-write-and-deploy-a-smart-contract-in-solidity',
    title: 'How to Write and Deploy a Smart Contract in Solidity',
    category: 'Smart Contracts',
    excerpt:
      'A step-by-step guide to writing your first smart contract in Solidity, testing it locally, and deploying it to the Ethereum network.',
    image: '/assets/blog-1-solidity.jpg',
    author: 'Abuzar Munshi',
    authorRole: 'Lead Smart Contract Architect',
    authorImage: '/assets/portrait-abuzar.png',
    date: 'Apr 28, 2025',
    readTime: '8 min read',
    isPopular: true,
    content: `
Smart contracts form the backbone of the decentralized ecosystem. Operating as immutable, self-executing code stored on a blockchain, smart contracts automate financial agreements, supply chain workflows, and governance without relying on centralized intermediaries.

In this guide, we will walk through building a complete, production-ready ERC-20 token contract in Solidity 0.8.24, testing its behavior using Hardhat, and deploying it to the Sepolia testnet.

### 1. Prerequisites & Environment Setup

Before starting, ensure you have Node.js (v18+) and npm installed. Initialize a clean project directory and install Hardhat:

\`\`\`bash
mkdir my-smart-contract
cd my-smart-contract
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat init
\`\`\`

Choose "Create a JavaScript project" when prompted by Hardhat.

### 2. Writing the Solidity Smart Contract

Create a new file named \`contracts/ZarToken.sol\`:

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZarToken is ERC20, Ownable {
    constructor(uint256 initialSupply) 
        ERC20("ZarWeb Token", "ZWT") 
        Ownable(msg.sender) 
    {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
\`\`\`

### Key Features of this Contract:
- **Inheritance:** Extends OpenZeppelin standard \`ERC20\` and \`Ownable\` security contracts.
- **Decimals:** Automatically handles standard 18-decimal precision.
- **Access Control:** Restricts additional token minting strictly to the contract owner.

### 3. Compiling and Local Testing

Testing your code thoroughly before deployment is critical in Web3, as deployed code cannot be modified. Create a test file \`test/ZarToken.js\`:

\`\`\`javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZarToken Contract", function () {
  it("Should assign total supply of tokens to owner", async function () {
    const [owner] = await ethers.getSigners();
    const ZarToken = await ethers.getContractFactory("ZarToken");
    const token = await ZarToken.deploy(1000000);

    const ownerBalance = await token.balanceOf(owner.address);
    expect(await token.totalSupply()).to.equal(ownerBalance);
  });
});
\`\`\`

Run the test suite using:

\`\`\`bash
npx hardhat test
\`\`\`

### 4. Deploying to Testnet

To deploy to Sepolia testnet, configure your \`hardhat.config.js\` with your Infura/Alchemy API key and private key (stored securely in \`.env\`):

\`\`\`javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
\`\`\`

Finally, execute your deployment script:

\`\`\`bash
npx hardhat run scripts/deploy.js --network sepolia
\`\`\`

### Summary & Next Steps
Congratulations! You have written, unit tested, and deployed an audited ERC-20 smart contract. Next, connect your contract with a frontend using Ethers.js or Viem for user interaction.
    `,
  },
  {
    id: 2,
    slug: 'building-a-web3-dapp-with-react-and-ethers-js',
    title: 'Building a Web3 dApp with React and Ethers.js',
    category: 'dApps',
    excerpt:
      'Learn how to connect your React application to the blockchain using Ethers.js and integrate a MetaMask wallet for seamless user experience.',
    image: '/assets/blog-2-dapp.jpg',
    author: 'Rizwana Khan',
    authorRole: 'Frontend Web3 Engineer',
    authorImage: '/assets/portrait-rizwana.png',
    date: 'Apr 20, 2025',
    readTime: '6 min read',
    isPopular: false,
    content: `
Integrating Web3 capability into modern frontend frameworks like React allows developers to build rich, decentralized user interfaces. In this guide, we cover how to seamlessly connect React apps with Ethereum wallets using Ethers.js v6.

### Why Ethers.js?
Ethers.js is a compact, robust, and secure library designed to interact with the Ethereum Blockchain and its ecosystem. It provides clean abstractions for provider, signer, and contract instances.

### 1. Setting Up the Web3 Provider Context

Create a reusable Web3 Context in React to manage wallet connection state across your application:

\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const browserProvider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await browserProvider.send("eth_requestAccounts", []);
        const signer = await browserProvider.getSigner();
        setProvider(browserProvider);
        setAccount(accounts[0]);
      } catch (err) {
        console.error("User rejected wallet connection", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <Web3Context.Provider value={{ account, provider, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};
\`\`\`

### 2. Reading Data from Smart Contracts

Once connected, instantiating a contract object allows fetching blockchain state asynchronously:

\`\`\`javascript
const readBalance = async (contractAddress, abi, userAddress) => {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const balance = await contract.balanceOf(userAddress);
  return ethers.formatEther(balance);
};
\`\`\`

### Best Practices for User Experience:
- **Graceful Rejection Handling:** Always handle cases where users cancel prompt popups.
- **Network Switching:** Alert users when they are on the wrong chain (e.g. Mainnet vs Sepolia).
- **Responsive State:** Update state automatically when users switch accounts in MetaMask (\`window.ethereum.on('accountsChanged')\`).
    `,
  },
  {
    id: 3,
    slug: 'what-is-defi-how-its-changing-the-financial-world',
    title: "What is DeFi? How It's Changing the Financial World",
    category: 'DeFi',
    excerpt:
      "Explore the basics of decentralized finance, its key components, and how it's creating new opportunities in the global economy.",
    image: '/assets/blog-3-defi.jpg',
    author: 'Tufail Ahmed',
    authorRole: 'DeFi & Protocol Engineer',
    authorImage: '/assets/portrait-tufail.png',
    date: 'Apr 12, 2025',
    readTime: '7 min read',
    isPopular: true,
    content: `
Decentralized Finance (DeFi) represents a global, open alternative to the traditional financial system. Built primarily on smart contract platforms like Ethereum, Solana, and Layer 2 solutions, DeFi allows anyone with an internet connection to borrow, lend, trade, and earn interest without bank intermediaries.

### Core Pillars of DeFi

1. **Automated Market Makers (AMMs):** Protocols like Uniswap enable decentralized token swaps through liquidity pools governed by mathematical formulas ($x \\cdot y = k$).
2. **Lending Protocols:** Platforms like Aave and Compound allow users to deposit assets into liquidity pools to earn yield or use deposited assets as collateral for crypto loans.
3. **Yield Aggregators:** Automated strategies optimizing yield farming returns across multiple decentralized protocols.
4. **Stablecoins:** Cryptocurrencies pegged to fiat currencies (USDT, USDC, DAI) that provide price stability within volatile crypto markets.

### Key Benefits Over Traditional Banking
- **24/7 Accessibility:** Unrestricted global access without border friction or credit history approvals.
- **Transparency:** All transaction records and smart contract codes are publicly auditable on-chain.
- **Self-Custody:** Users retain full control of their private keys and digital funds.
    `,
  },
  {
    id: 4,
    slug: 'nfts-beyond-art-real-world-use-cases',
    title: 'NFTs Beyond Art: Real World Use Cases',
    category: 'NFTs',
    excerpt:
      'From gaming to identity, NFTs are unlocking new possibilities beyond digital art. Here are some real-world applications you should know.',
    image: '/assets/blog-4-nft.jpg',
    author: 'Sameer Shaikh',
    authorRole: 'Web3 Product Strategist',
    authorImage: '/assets/portrait-sameer.png',
    date: 'Mar 30, 2025',
    readTime: '5 min read',
    isPopular: true,
    content: `
While Non-Fungible Tokens (NFTs) gained viral fame through digital art collections, their underlying technology—verifiable digital ownership—extends far into enterprise and real-world assets (RWA).

### Emerging Real-World NFT Applications

- **Real Estate Tokenization:** Fractionalizing physical land and property ownership into legally compliant NFT tokens for global investor liquidity.
- **Supply Chain Integrity:** Tracking product provenance and authenticity from luxury goods to pharmaceuticals on immutable ledgers.
- **Digital Identity & Credentials:** Issuing tamper-proof academic degrees, professional certifications, and passport identities as Soulbound Tokens (SBTs).
- **Ticketing & Loyalty Programs:** Eliminating counterfeit tickets for concerts and live events while enabling dynamic post-event perks for fans.
    `,
  },
  {
    id: 5,
    slug: 'web3-wallet-integration-in-5-simple-steps',
    title: 'Web3 Wallet Integration in 5 Simple Steps',
    category: 'Tutorials',
    excerpt:
      'Learn how to integrate a crypto wallet into your dApp, connect with MetaMask, and handle transactions securely.',
    image: '/assets/blog-5-wallet.jpg',
    author: 'Ahsan Ali',
    authorRole: 'Senior Blockchain Developer',
    authorImage: '/assets/headshot-abuzar.png',
    date: 'Mar 18, 2025',
    readTime: '7 min read',
    isPopular: true,
    content: `
A seamless wallet connection UX is vital for web3 user conversion. In this hands-on tutorial, learn how to implement wallet connection using RainbowKit and Wagmi in 5 clean steps.

### Step 1: Install Dependencies
\`\`\`bash
npm install @rainbow-me/rainbowkit wagmi viem @tanstack/react-query
\`\`\`

### Step 2: Configure Wagmi Client & Providers
Set up project credentials with WalletConnect Project ID and supported chains (Mainnet, Polygon, Arbitrum).

### Step 3: Wrap App in Providers
Enclose your main React DOM render within \`WagmiProvider\`, \`QueryClientProvider\`, and \`RainbowKitProvider\`.

### Step 4: Add the ConnectButton Component
Import and render \`<ConnectButton />\` in your header navigation.

### Step 5: Handle Accounts & Chain Switching
Use Wagmi hooks like \`useAccount()\` and \`useBalance()\` to render reactive wallet states.
    `,
  },
  {
    id: 6,
    slug: 'blockchain-security-best-practices-for-developers',
    title: 'Blockchain Security Best Practices for Developers',
    category: 'Blockchain',
    excerpt:
      'Discover essential security tips to keep your smart contracts, dApps, and blockchain applications safe and reliable.',
    image: '/assets/blog-6-security.jpg',
    author: 'Faizan Khan',
    authorRole: 'Smart Contract Auditor',
    authorImage: '/assets/headshot-tufail.png',
    date: 'Mar 10, 2025',
    readTime: '6 min read',
    isPopular: true,
    content: `
Smart contract bugs can lead to devastating loss of funds. Because smart contract deployment is irreversible, security auditing and defensive design patterns are mandatory for every Web3 development team.

### Essential Security Rules

1. **Reentrancy Protection:** Use OpenZeppelin's \`ReentrancyGuard\` modifier (\`nonReentrant\`) on all external state-changing functions.
2. **Checks-Effects-Interactions Pattern:** Always update internal contract state before initiating external token transfers or low-level calls.
3. **Use Tested Libraries:** Never re-implement math or standard ERC implementations; always leverage peer-reviewed packages like OpenZeppelin Contracts.
4. **Fuzz & Formal Verification:** Supplement unit tests with automated property-based fuzz testing tools like Echidna and Slither static analyzer.
    `,
  },
  {
    id: 7,
    slug: 'top-5-web3-development-tools-in-2025',
    title: 'Top 5 Web3 Development Tools in 2025',
    category: 'Web3 Development',
    excerpt:
      'Explore the best tools and frameworks that make Web3 development faster, easier, and more efficient in 2025.',
    image: '/assets/blog-7-tools.jpg',
    author: 'Abuzar Munshi',
    authorRole: 'Lead Smart Contract Architect',
    authorImage: '/assets/portrait-abuzar.png',
    date: 'Apr 02, 2025',
    readTime: '5 min read',
    isPopular: false,
    content: `
The Web3 developer toolchain has matured exponentially. Here are the top 5 essential developer tools powering modern blockchain engineering teams in 2025.

1. **Foundry:** Rust-based ultra-fast smart contract development toolkit. Allows writing tests in Solidity directly.
2. **Hardhat:** Feature-rich JavaScript environment ideal for integration testing, scripts, and local node simulation.
3. **Viem & Wagmi:** Lightweight, modern TypeScript interfaces replacing legacy web3.js implementations with superior type safety and speed.
4. **The Graph:** Decentralized indexing protocol for querying blockchain data efficiently using GraphQL.
5. **Slither:** Static analysis framework that detects security vulnerabilities in Solidity contracts within seconds.
    `,
  },
  {
    id: 8,
    slug: 'the-future-of-web3-in-india-opportunities-and-challenges',
    title: 'The Future of Web3 in India: Opportunities and Challenges',
    category: 'Industry News',
    excerpt:
      "How India's Web3 ecosystem is evolving, what's driving growth, and what challenges still need to be solved.",
    image: '/assets/blog-8-india.jpg',
    author: 'Rizwana Khan',
    authorRole: 'Frontend Web3 Engineer',
    authorImage: '/assets/portrait-rizwana.png',
    date: 'Feb 22, 2025',
    readTime: '6 min read',
    isPopular: false,
    content: `
India has rapidly surfaced as a world leader in Web3 engineering talent, developer adoption, and decentralized innovation. With over 11% of global Web3 developers originating from India, the country is uniquely positioned to shape global decentralized infrastructure.

### Growth Drivers
- **Massive Developer Talent Base:** Millions of skilled STEM graduates transitioning from Web2 to Web3.
- **High Crypto & Payment Adoption:** Deep familiarity with instant digital payments (UPI) facilitating intuitive onboarding to Web3 wallets.
- **Thriving Startup Ecosystem:** Leading Web3 protocols and scaling solutions like Polygon originated in India.

### Key Challenges & Road Ahead
- **Regulatory Clarity:** Need for progressive regulatory frameworks for token classification and taxation.
- **Enterprise Integration:** Accelerating adoption of enterprise private chains in banking, logistics, and government record keeping.
    `,
  },
  {
    id: 9,
    slug: 'common-mistakes-to-avoid-in-smart-contract-development',
    title: 'Common Mistakes to Avoid in Smart Contract Development',
    category: 'Smart Contracts',
    excerpt:
      'Learn about the most common smart contract mistakes and how to prevent them before deployment.',
    image: '/assets/blog-9-mistakes.jpg',
    author: 'Tufail Ahmed',
    authorRole: 'DeFi & Protocol Engineer',
    authorImage: '/assets/portrait-tufail.png',
    date: 'Feb 15, 2025',
    readTime: '5 min read',
    isPopular: false,
    content: `
Even experienced software developers make fundamental mistakes when transitioning from traditional client-server applications to smart contract engineering. Avoid these top 5 pitfalls.

### 1. Assuming Private Variables Are Secret
In Solidity, marking a state variable as \`private\` only restricts other contracts from accessing it. The variable data remains 100% visible to anyone inspecting raw blockchain storage slots.

### 2. Relying on Block Timestamps for Randomness
\`block.timestamp\` can be manipulated slightly by miners or validators. Never use block properties for pseudo-random number generation; use Chainlink VRF (Verifiable Random Function) instead.

### 3. Unchecked Integer Overflow (in legacy Solidity)
Always use Solidity ^0.8.0 or SafeMath to prevent silent arithmetic overflows and underflows.

### 4. Hardcoding Gas Limits
Avoid hardcoding fixed gas amounts for internal transfers (\`transfer()\` or \`send()\`), as opcode gas costs change with Ethereum hard forks. Use low-level \`call\` with value instead.
    `,
  },
]

export const POPULAR_POSTS = BLOG_ARTICLES.filter((article) => article.isPopular).slice(0, 5)
