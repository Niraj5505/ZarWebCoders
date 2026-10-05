// Services Data - Single source of truth for ZarWebCoders Web3 Services

export const SERVICES_DATA = [
  {
    id: 1,
    slug: 'smart-contract-development',
    title: 'Smart Contract Development',
    description:
      'Secure, gas-efficient and audit-ready smart contracts built with Solidity and modern frameworks.',
    iconName: 'FileCode2',
    watermarkIcon: 'Code2',
    features: [
      'ERC-20 / ERC-721 / ERC-1155',
      'DeFi & DAO Contracts',
      'Custom Logic & Automation',
    ],
    overview:
      'Our Smart Contract Development service focuses on designing, coding, and deploying gas-optimized, battle-tested smart contracts across Ethereum, Polygon, Arbitrum, and other EVM-compatible chains. We ensure every contract is written according to strict OpenZeppelin standards and prepared for rigorous third-party audits.',
    benefits: [
      'Gas Optimization for Lower Execution Fees',
      'Formal Verification & Automated Testing',
      'Upgradable & Modular Architecture Patterns',
      'Complete Deployment Scripts & Documentation',
    ],
    technologies: ['Solidity', 'Hardhat', 'Foundry', 'OpenZeppelin', 'Ethers.js'],
  },
  {
    id: 2,
    slug: 'dapp-development',
    title: 'dApp Development',
    description:
      'Build decentralized applications with seamless user experiences and wallet integrations.',
    iconName: 'Box',
    watermarkIcon: 'Wallet',
    features: [
      'Web3 Frontend (React / Next.js)',
      'Wallet Integration (MetaMask, WalletConnect)',
      'Testing & Deployment',
    ],
    overview:
      'We craft high-performance, responsive decentralized applications (dApps) that bridge complex blockchain smart contracts with intuitive Web2-like user experiences. From crypto wallets to DeFi dashboards and NFT platforms, we deliver end-to-end fullstack Web3 products.',
    benefits: [
      'Multi-Wallet Support (MetaMask, Coinbase Wallet, WalletConnect)',
      'Real-time On-Chain Event Subscriptions',
      'Fast Page Loads & Server-Side Rendering with Next.js',
      'Mobile-first & Fully Responsive User Interfaces',
    ],
    technologies: ['React.js', 'Next.js', 'Ethers.js', 'Wagmi', 'Tailwind CSS'],
  },
  {
    id: 3,
    slug: 'blockchain-integration',
    title: 'Blockchain Integration',
    description:
      'Integrate blockchain technology into your existing systems for transparency and efficiency.',
    iconName: 'Link',
    watermarkIcon: 'Network',
    features: [
      'API Integration (Ethereum, Polygon, etc.)',
      'Custom Blockchain Solutions',
      'Cross-Chain Integration',
    ],
    overview:
      'Empower your existing enterprise architecture with blockchain capabilities. We integrate decentralized networks, layer-2 solutions, and custom nodes directly into your Web2 databases, ERP systems, and cloud backend environments.',
    benefits: [
      'Seamless REST & GraphQL API Bridges',
      'Cross-Chain Token & Data Messaging',
      'Tamper-Proof Audit Trails for Operations',
      'Zero Disruption to Existing Business Logic',
    ],
    technologies: ['Node.js', 'The Graph', 'Web3.js', 'Polygon', 'Ethereum'],
  },
  {
    id: 4,
    slug: 'web3-infrastructure',
    title: 'Web3 Infrastructure',
    description:
      'Reliable and scalable infrastructure for your blockchain applications.',
    iconName: 'Server',
    watermarkIcon: 'Database',
    features: [
      'Node Setup & Maintenance',
      'IPFS & Decentralized Storage',
      'DevOps & Cloud Deployment',
    ],
    overview:
      'High-availability Web3 infrastructure is essential for production dApps. We configure dedicated RPC nodes, decentralized IPFS storage networks, indexers, and automated CI/CD pipelines to guarantee 99.99% uptime for your protocol.',
    benefits: [
      'High-throughput Private RPC Endpoints',
      'Decentralized File Storage via IPFS & Arweave',
      'Automated Testing & Monitoring Dashboards',
      'Enterprise SLA & High Concurrency Handling',
    ],
    technologies: ['IPFS', 'Docker', 'AWS', 'Hardhat', 'Node.js'],
  },
  {
    id: 5,
    slug: 'security-auditing',
    title: 'Security & Auditing',
    description:
      'Protect your assets and users with robust security practices and audits.',
    iconName: 'ShieldCheck',
    watermarkIcon: 'Shield',
    features: [
      'Smart Contract Audits',
      'Vulnerability Assessment',
      'Best Practices Implementation',
    ],
    overview:
      'In Web3, security is paramount. Our auditing team conducts line-by-line manual code reviews, static analysis with Slither, and automated property-based fuzzing to discover reentrancy, overflow, access control, and logic vulnerabilities before mainnet launch.',
    benefits: [
      'Comprehensive PDF Audit Report & Scoring',
      'Reentrancy & Front-running Protection',
      'Remediation Guidance & Re-testing',
      'Public Audit Verification Badge',
    ],
    technologies: ['Slither', 'Echidna', 'Solidity', 'Hardhat', 'Foundry'],
  },
  {
    id: 6,
    slug: 'consulting-strategy',
    title: 'Consulting & Strategy',
    description:
      'Get expert guidance to choose the right blockchain solutions for your business goals.',
    iconName: 'Settings',
    watermarkIcon: 'TrendingUp',
    features: [
      'Tech Stack Recommendation',
      'Project Roadmap & Planning',
      'Ongoing Support & Maintenance',
    ],
    overview:
      'Navigating the Web3 landscape requires technical foresight. We partner with founders, enterprise leaders, and product teams to refine tokenomics, select optimal blockchain networks, and design future-proof technical roadmaps.',
    benefits: [
      'Tokenomics & Incentive Model Design',
      'Network Evaluation (L1 vs L2 vs Appchain)',
      'Regulatory & Technical Risk Assessments',
      'Post-Launch Governance & Maintenance Support',
    ],
    technologies: ['Architecture', 'Tokenomics', 'Ethereum', 'Polygon', 'Strategy'],
  },
]

export const TECH_STACK = [
  { name: 'Solidity', logo: 'FileCode', color: 'emerald' },
  { name: 'React.js', logo: 'Atom', color: 'cyan' },
  { name: 'Next.js', logo: 'Zap', color: 'slate' },
  { name: 'Node.js', logo: 'Server', color: 'green' },
  { name: 'Web3.js', logo: 'Code', color: 'blue' },
  { name: 'IPFS', logo: 'Globe', color: 'teal' },
  { name: 'Polygon', logo: 'Boxes', color: 'purple' },
  { name: 'Ethereum', logo: 'Coins', color: 'indigo' },
  { name: 'Hardhat', logo: 'Wrench', color: 'amber' },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand your goals, requirements and vision.',
    icon: 'Lightbulb',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create architecture, UI/UX and technical plan.',
    icon: 'Edit3',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build, test and integrate core features.',
    icon: 'Code2',
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Launch on mainnet/testnet and ensure stability.',
    icon: 'Rocket',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Provide ongoing updates, maintenance and guidance.',
    icon: 'Headphones',
  },
]
