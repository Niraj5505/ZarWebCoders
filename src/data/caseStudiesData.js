// Case Studies Data — single source of truth for all case study content

export const CASE_STUDIES = [
  {
    id: 'defi-lending-platform',
    slug: 'defi-lending-platform',
    title: 'DeFi Lending Platform',
    category: 'Smart Contracts',
    categoryColor: 'emerald',
    image: '/assets/cs-defi-lending.jpg',
    heroImage: '/assets/defi-hero-laptop.jpg',
    description:
      'Developed secure and audited smart contracts for a DeFi lending platform with automated interest distribution and collateral management.',
    techs: ['Solidity', 'Ethereum'],
    duration: '3 Months',
    date: '2024-09-01',
    featured: true,
    featuredDescription:
      'We built a decentralized lending platform with secure smart contracts, automated interest distribution, and collateral management. The solution is fully tested, audited, and ready for mainnet deployment.',
    stats: [
      { value: '100%', label: 'Tested & Audited' },
      { value: '< 2s', label: 'Transaction Speed' },
      { value: '3x', label: 'Performance Gain' },
    ],

    // ── Detail page fields ──────────────────────────────────────────────
    client: 'FinanceChain Protocol',
    industry: 'Decentralized Finance',
    network: 'Ethereum Mainnet',
    overview:
      'FinanceChain Protocol needed a fully decentralized, permissionless lending platform built on Ethereum. The system required secure smart contracts that could handle multi-asset collateral, automated interest accrual, real-time liquidation mechanisms, and deep integration with existing DeFi protocols. ZarWebCoders delivered a production-ready lending suite that passed multiple third-party audits and launched successfully on mainnet.',

    challenge:
      'The client had a complex financial model requiring real-time on-chain interest compounding across multiple ERC-20 tokens, liquidation logic that had to be both gas-efficient and attack-resistant, and integration with Chainlink price feeds. The existing prototype had critical re-entrancy vulnerabilities and was over 3× more gas-intensive than acceptable for production.',

    solution:
      'We rewrote the entire smart contract suite from scratch using a gas-optimized architecture. Re-entrancy guards and checks-effects-interactions patterns were applied throughout. We integrated Chainlink oracles for price feeds, implemented a flash-loan-resistant liquidation engine, and built a comprehensive Hardhat test suite with 98% line coverage. The final contracts were audited by an independent security firm with zero critical findings.',

    highlights: [
      '100% audit score — zero critical vulnerabilities',
      'Gas usage reduced by 67% vs initial prototype',
      'Sub-2-second transaction confirmation on L2',
      'Supports 8 ERC-20 collateral asset types',
      'Automated liquidation with MEV-resistant design',
      'Full Chainlink oracle integration',
    ],

    metrics: [
      { value: '100%', label: 'Audit Score', icon: 'shield' },
      { value: '67%', label: 'Gas Reduction', icon: 'zap' },
      { value: '< 2s', label: 'Tx Speed', icon: 'clock' },
      { value: '8', label: 'Asset Types', icon: 'layers' },
    ],

    process: [
      {
        step: '01',
        title: 'Discovery & Architecture',
        desc: 'Deep-dive into the financial model, tokenomics, and risk parameters. Designed the contract architecture with modular, upgradeable components.',
      },
      {
        step: '02',
        title: 'Smart Contract Development',
        desc: 'Built core lending, collateral, and interest contracts in Solidity with gas-optimized patterns and full NatSpec documentation.',
      },
      {
        step: '03',
        title: 'Testing & Hardhat Suite',
        desc: 'Wrote 200+ unit and integration tests covering normal flows, edge cases, and attack vectors including re-entrancy and flash loan scenarios.',
      },
      {
        step: '04',
        title: 'Security Audit & Deployment',
        desc: 'Coordinated third-party audit, resolved all findings, deployed to testnet for UAT, then executed a staged mainnet launch.',
      },
    ],

    techStack: [
      { label: 'Solidity', category: 'Language' },
      { label: 'Hardhat', category: 'Framework' },
      { label: 'Ethereum', category: 'Network' },
      { label: 'Chainlink', category: 'Oracle' },
      { label: 'OpenZeppelin', category: 'Libraries' },
      { label: 'Ethers.js', category: 'SDK' },
    ],

    screenshots: [
      { src: '/assets/defi-screen-dashboard.jpg', caption: 'Lending Dashboard' },
      { src: '/assets/defi-screen-markets.jpg', caption: 'Markets Overview' },
      { src: '/assets/defi-screen-portfolio.jpg', caption: 'Portfolio View' },
      { src: '/assets/defi-screen-supply.jpg', caption: 'Supply & Borrow Interface' },
    ],

    testimonial: {
      quote:
        'ZarWebCoders delivered exactly what we needed — clean, audited, gas-optimized smart contracts deployed on time and under budget. Their testing discipline is exceptional.',
      author: 'Michael Carter',
      role: 'CTO, FinanceChain Protocol',
      avatar: '/assets/testimonial-michael-carter.jpg',
    },

    relatedSlugs: ['token-vesting-contract', 'nft-marketplace-dapp', 'web3-wallet-integration'],
  },

  {
    id: 'nft-marketplace-dapp',
    slug: 'nft-marketplace-dapp',
    title: 'NFT Marketplace dApp',
    category: 'dApp Development',
    categoryColor: 'violet',
    image: '/assets/cs-nft-marketplace.jpg',
    heroImage: '/assets/cs-nft-marketplace-premium.jpg',
    description:
      'Built a feature-rich NFT marketplace with wallet integration, minting, bidding and collection management.',
    techs: ['React.js', 'Polygon'],
    duration: '6 Months',
    date: '2024-06-01',
    featured: false,
    client: 'ArtBlock Collective',
    industry: 'NFT / Digital Art',
    network: 'Polygon Mainnet',
    overview:
      'ArtBlock Collective needed a full-featured NFT marketplace supporting minting, lazy minting, auctions, offers, and collection management. ZarWebCoders delivered a performant React dApp with seamless wallet integration and a custom ERC-721/ERC-1155 smart contract suite.',
    challenge:
      'The platform needed to support high transaction volumes on Polygon while maintaining low gas costs. The client also required a lazy minting flow to reduce friction for new artists, and a bidding system that was both trustless and resistant to front-running.',
    solution:
      'We architected a modular marketplace smart contract with separate auction, offer, and royalty distribution modules. The React frontend used wagmi and RainbowKit for wallet connectivity, with real-time state management via The Graph Protocol.',
    highlights: [
      'ERC-721 & ERC-1155 support with lazy minting',
      'Trustless auction and offer system',
      'Real-time indexing via The Graph',
      'Mobile-first responsive design',
      '< 0.01 MATIC average transaction cost',
    ],
    metrics: [
      { value: '10K+', label: 'NFTs Minted', icon: 'image' },
      { value: '< 1s', label: 'Load Time', icon: 'zap' },
      { value: '99.9%', label: 'Uptime', icon: 'shield' },
      { value: '2', label: 'Token Standards', icon: 'layers' },
    ],
    process: [
      { step: '01', title: 'Product Design', desc: 'User flow mapping, wireframes, and component library definition aligned with Web3 UX best practices.' },
      { step: '02', title: 'Smart Contracts', desc: 'ERC-721/1155 contracts with marketplace, auction, and royalty modules, fully tested on Mumbai testnet.' },
      { step: '03', title: 'Frontend Development', desc: 'React + wagmi + RainbowKit frontend with The Graph integration for real-time NFT data.' },
      { step: '04', title: 'Launch & Monitoring', desc: 'Mainnet deployment, subgraph indexing setup, and ongoing monitoring dashboard.' },
    ],
    techStack: [
      { label: 'React.js', category: 'Frontend' },
      { label: 'Solidity', category: 'Language' },
      { label: 'Polygon', category: 'Network' },
      { label: 'The Graph', category: 'Indexing' },
      { label: 'RainbowKit', category: 'Wallet' },
      { label: 'wagmi', category: 'SDK' },
    ],
    screenshots: [
      { src: '/assets/cs-nft-marketplace-premium.jpg', caption: 'Marketplace Home' },
      { src: '/assets/cs-nft-marketplace.jpg', caption: 'Collection View' },
    ],
    testimonial: {
      quote: 'The marketplace ZarWebCoders built exceeded all our expectations. Artists love the lazy minting flow and collectors love the seamless bidding experience.',
      author: 'Sarah Chen',
      role: 'Founder, ArtBlock Collective',
      avatar: '/assets/headshot-rizwana.png',
    },
    relatedSlugs: ['defi-lending-platform', 'web3-wallet-integration', 'token-vesting-contract'],
  },

  {
    id: 'enterprise-blockchain-solution',
    slug: 'enterprise-blockchain-solution',
    title: 'Enterprise Blockchain Solution',
    category: 'Blockchain Integration',
    categoryColor: 'blue',
    image: '/assets/cs-enterprise-blockchain.jpg',
    heroImage: '/assets/cs-enterprise-blockchain.jpg',
    description:
      'Integrated Hyperledger Fabric for a logistics company to ensure transparent and tamper-proof supply chain tracking.',
    techs: ['Hyperledger', 'Node.js'],
    duration: '5 Months',
    date: '2024-03-01',
    featured: false,
    client: 'GlobalLogix Ltd.',
    industry: 'Logistics & Supply Chain',
    network: 'Hyperledger Fabric',
    overview:
      'GlobalLogix needed a permissioned blockchain network to track goods across their multi-party supply chain. ZarWebCoders designed and deployed a Hyperledger Fabric network with custom chaincode, a Node.js gateway API, and a real-time tracking dashboard.',
    challenge:
      'The existing ERP system had no blockchain capabilities and needed to continue operating alongside the new network. Data privacy between supply chain partners was critical — each party should only see data they are authorized for.',
    solution:
      'We implemented private data collections in Hyperledger Fabric for role-based data visibility. A Node.js gateway service bridged the legacy ERP with the Fabric network via REST APIs, and a React dashboard gave logistics managers real-time shipment visibility.',
    highlights: [
      'Private data collections for multi-party privacy',
      'Seamless ERP integration via REST API bridge',
      'Real-time shipment tracking dashboard',
      'Tamper-proof audit trail for all goods',
      '40% reduction in dispute resolution time',
    ],
    metrics: [
      { value: '40%', label: 'Dispute Reduction', icon: 'trending' },
      { value: '100%', label: 'Audit Trail', icon: 'shield' },
      { value: '5', label: 'Org Nodes', icon: 'network' },
      { value: '99.8%', label: 'Uptime', icon: 'zap' },
    ],
    process: [
      { step: '01', title: 'Network Design', desc: 'Defined Fabric network topology, channel structure, and MSP configuration for all participating organizations.' },
      { step: '02', title: 'Chaincode Development', desc: 'Wrote Go chaincode for asset tracking, transfer, and audit logging with private data support.' },
      { step: '03', title: 'API & ERP Integration', desc: 'Built Node.js gateway with REST API that allowed the legacy ERP to submit and query transactions.' },
      { step: '04', title: 'Dashboard & Deployment', desc: 'Deployed production Fabric network on cloud infrastructure with monitoring and alerting.' },
    ],
    techStack: [
      { label: 'Hyperledger Fabric', category: 'Platform' },
      { label: 'Go', category: 'Chaincode' },
      { label: 'Node.js', category: 'Gateway' },
      { label: 'React.js', category: 'Dashboard' },
      { label: 'Docker', category: 'Infrastructure' },
      { label: 'Kubernetes', category: 'Orchestration' },
    ],
    screenshots: [
      { src: '/assets/cs-enterprise-blockchain.jpg', caption: 'Supply Chain Dashboard' },
      { src: '/assets/dev-workstation-premium.jpg', caption: 'Network Architecture' },
    ],
    testimonial: {
      quote: 'ZarWebCoders gave us full supply chain visibility in months. The dispute resolution time dropped by 40% and our partners love the transparency.',
      author: 'Raj Patel',
      role: 'Head of Operations, GlobalLogix',
      avatar: '/assets/headshot-tufail.png',
    },
    relatedSlugs: ['web3-wallet-integration', 'defi-lending-platform', 'web3-strategy-consulting'],
  },

  {
    id: 'web3-wallet-integration',
    slug: 'web3-wallet-integration',
    title: 'Web3 Wallet Integration',
    category: 'Web3 Infrastructure',
    categoryColor: 'indigo',
    image: '/assets/cs-wallet-integration.jpg',
    heroImage: '/assets/cs-wallet-integration.jpg',
    description:
      'Integrated multi-chain wallet support into an existing platform with secure authentication and seamless UX.',
    techs: ['Web3.js', 'Multiple Chains'],
    duration: '3 Months',
    date: '2023-12-01',
    featured: false,
    client: 'PlayVerse Gaming',
    industry: 'Web3 Gaming',
    network: 'Multi-chain (ETH, BSC, Polygon)',
    overview:
      'PlayVerse Gaming needed to add Web3 wallet login and in-game asset ownership to their existing React platform without disrupting the current user experience. ZarWebCoders delivered a seamless multi-chain wallet integration supporting MetaMask, WalletConnect, and Coinbase Wallet.',
    challenge:
      'The platform had 50,000+ existing users with traditional email/password accounts. The wallet integration needed to be optional and backward-compatible, support multiple EVM chains, and handle network switching gracefully without confusing non-crypto-native users.',
    solution:
      'We built a wallet connection layer using wagmi with a custom chain-agnostic hook system. A smooth onboarding flow guided non-Web3 users through wallet setup. We also implemented ENS resolution for user-friendly wallet display names throughout the UI.',
    highlights: [
      'MetaMask, WalletConnect & Coinbase Wallet support',
      'Backward-compatible with existing email auth',
      'ENS name resolution for display',
      'Automatic network detection and switching',
      'Mobile wallet deep-link support',
    ],
    metrics: [
      { value: '50K+', label: 'Users Connected', icon: 'users' },
      { value: '3', label: 'Wallet Providers', icon: 'wallet' },
      { value: '3', label: 'EVM Chains', icon: 'network' },
      { value: '< 3s', label: 'Connection Time', icon: 'zap' },
    ],
    process: [
      { step: '01', title: 'UX Research', desc: 'Studied existing user patterns and designed a wallet onboarding flow optimized for non-Web3 users.' },
      { step: '02', title: 'Integration Development', desc: 'Built wagmi-based wallet hooks with multi-chain support and ENS resolution.' },
      { step: '03', title: 'Auth Bridge', desc: 'Connected wallet sign-in with the existing JWT auth system so both methods coexist seamlessly.' },
      { step: '04', title: 'Testing & Rollout', desc: 'Staged rollout with A/B testing of onboarding copy, monitored connection success rates.' },
    ],
    techStack: [
      { label: 'wagmi', category: 'SDK' },
      { label: 'WalletConnect', category: 'Protocol' },
      { label: 'React.js', category: 'Frontend' },
      { label: 'Ethereum', category: 'Network' },
      { label: 'ENS', category: 'Identity' },
      { label: 'TypeScript', category: 'Language' },
    ],
    screenshots: [
      { src: '/assets/cs-wallet-integration.jpg', caption: 'Wallet Connection Modal' },
      { src: '/assets/cs-hero-premium.jpg', caption: 'Dashboard with Wallet' },
    ],
    testimonial: {
      quote: 'The wallet integration was seamless — our existing users barely noticed the change and our Web3 users loved the multi-chain support from day one.',
      author: 'Alex Johnson',
      role: 'Product Lead, PlayVerse Gaming',
      avatar: '/assets/headshot-sameer.png',
    },
    relatedSlugs: ['nft-marketplace-dapp', 'defi-lending-platform', 'enterprise-blockchain-solution'],
  },

  {
    id: 'token-vesting-contract',
    slug: 'token-vesting-contract',
    title: 'Token Vesting Contract',
    category: 'Smart Contracts',
    categoryColor: 'emerald',
    image: '/assets/cs-token-vesting.jpg',
    heroImage: '/assets/cs-token-vesting.jpg',
    description:
      "Built a secure vesting contract with role-based access, time locks and admin controls for a client's token ecosystem.",
    techs: ['Solidity', 'Ethereum'],
    duration: '3 Months',
    date: '2023-09-01',
    featured: false,
    client: 'TokenDAO',
    industry: 'DeFi / DAO',
    network: 'Ethereum Mainnet',
    overview:
      'TokenDAO needed a battle-tested token vesting contract to manage allocations for founders, team, investors, and advisors. ZarWebCoders built a configurable, audit-ready vesting solution with cliff periods, linear release schedules, revocability controls, and a simple admin dashboard.',
    challenge:
      'The contract needed to handle eight different beneficiary classes with different vesting schedules, support revocation with pro-rated refunds, be completely permissionless for beneficiaries after the cliff, and pass a rigorous security audit before the TGE (Token Generation Event).',
    solution:
      'We designed a factory-pattern vesting architecture where each vesting schedule is a separate contract instance for maximum isolation and auditability. All admin functions use a multi-sig timelock controller. The solution shipped three weeks ahead of the TGE with a clean audit report.',
    highlights: [
      'Factory pattern for isolated vesting schedules',
      'Multi-sig timelock for all admin actions',
      'Cliff + linear vesting with revocation support',
      'Clean audit report — shipped 3 weeks early',
      'Gas-optimized batch claim mechanism',
    ],
    metrics: [
      { value: '8', label: 'Vesting Classes', icon: 'layers' },
      { value: '0', label: 'Audit Findings', icon: 'shield' },
      { value: '3wks', label: 'Ahead of Schedule', icon: 'clock' },
      { value: '100%', label: 'Test Coverage', icon: 'zap' },
    ],
    process: [
      { step: '01', title: 'Requirements Analysis', desc: 'Documented all vesting schedules, cliff periods, and admin requirements from the DAO governance proposal.' },
      { step: '02', title: 'Contract Architecture', desc: 'Designed the factory-pattern architecture with timelock admin and isolated schedule contracts.' },
      { step: '03', title: 'Development & Testing', desc: 'Implemented and tested 200+ scenarios including boundary conditions and attack vectors.' },
      { step: '04', title: 'Audit & TGE Support', desc: 'Coordinated audit, resolved all findings, deployed to mainnet and supported the TGE launch day.' },
    ],
    techStack: [
      { label: 'Solidity', category: 'Language' },
      { label: 'Hardhat', category: 'Framework' },
      { label: 'Ethereum', category: 'Network' },
      { label: 'OpenZeppelin', category: 'Libraries' },
      { label: 'Gnosis Safe', category: 'Multi-sig' },
      { label: 'Ethers.js', category: 'SDK' },
    ],
    screenshots: [
      { src: '/assets/cs-token-vesting.jpg', caption: 'Vesting Dashboard' },
      { src: '/assets/defi-screen-supply.jpg', caption: 'Claim Interface' },
    ],
    testimonial: {
      quote: 'We had a hard TGE deadline and ZarWebCoders delivered three weeks early with a spotless audit. The vesting contracts have been running flawlessly for months.',
      author: 'David Lee',
      role: 'Co-Founder, TokenDAO',
      avatar: '/assets/headshot-abuzar.png',
    },
    relatedSlugs: ['defi-lending-platform', 'web3-strategy-consulting', 'enterprise-blockchain-solution'],
  },

  {
    id: 'web3-strategy-consulting',
    slug: 'web3-strategy-consulting',
    title: 'Web3 Strategy & Consulting',
    category: 'Consulting',
    categoryColor: 'amber',
    image: '/assets/cs-consulting.jpg',
    heroImage: '/assets/cs-consulting.jpg',
    description:
      'Provided technical consulting and architecture design for a Web3 startup, including technology stack and development roadmap.',
    techs: ['Strategy', 'Architecture'],
    duration: '1 Month',
    date: '2023-06-01',
    featured: false,
    client: 'ChainStart Ventures',
    industry: 'Web3 Startup',
    network: 'Multi-chain',
    overview:
      'ChainStart Ventures was founding a new Web3 startup and needed expert guidance on technology stack selection, smart contract architecture, tokenomics design, and a 12-month development roadmap. ZarWebCoders provided a comprehensive technical consulting engagement that gave them the clarity and confidence to move forward.',
    challenge:
      'The founding team had a strong product vision but limited blockchain development experience. They needed to evaluate multiple chains (Ethereum, Solana, Polygon, Avalanche), understand trade-offs, select the right stack, and create a realistic technical roadmap before approaching Series A investors.',
    solution:
      'ZarWebCoders conducted a four-week consulting sprint including chain evaluation workshops, tokenomics modeling, architecture design sessions, and a final technical pitch deck review. We delivered a 40-page technical specification, a prioritized development roadmap, and ongoing advisory support.',
    highlights: [
      '40-page technical specification delivered',
      'Multi-chain evaluation with clear recommendation',
      'Tokenomics model with economic simulations',
      '12-month development roadmap',
      'Investor pitch deck technical review',
    ],
    metrics: [
      { value: '40pg', label: 'Tech Spec', icon: 'layers' },
      { value: '4', label: 'Chains Evaluated', icon: 'network' },
      { value: '12mo', label: 'Roadmap', icon: 'clock' },
      { value: '$2M', label: 'Seed Raised', icon: 'trending' },
    ],
    process: [
      { step: '01', title: 'Discovery Workshop', desc: 'Deep-dive sessions to understand product vision, user personas, and technical constraints.' },
      { step: '02', title: 'Chain & Stack Evaluation', desc: 'Comprehensive analysis of blockchain options against product requirements and growth projections.' },
      { step: '03', title: 'Architecture Design', desc: 'Designed smart contract architecture, data flow, and integration points for the recommended stack.' },
      { step: '04', title: 'Roadmap & Delivery', desc: 'Delivered technical specification, development roadmap, and reviewed investor pitch materials.' },
    ],
    techStack: [
      { label: 'Ethereum', category: 'Primary Chain' },
      { label: 'Polygon', category: 'L2' },
      { label: 'Solidity', category: 'Language' },
      { label: 'IPFS', category: 'Storage' },
      { label: 'The Graph', category: 'Indexing' },
      { label: 'Figma', category: 'Design' },
    ],
    screenshots: [
      { src: '/assets/cs-consulting.jpg', caption: 'Strategy Workshop' },
      { src: '/assets/team-collab-premium.jpg', caption: 'Architecture Review' },
    ],
    testimonial: {
      quote: 'ZarWebCoders gave us the technical clarity we needed to move from idea to funded startup. Their roadmap became our Series A pitch foundation.',
      author: 'Emma Wilson',
      role: 'CEO, ChainStart Ventures',
      avatar: '/assets/headshot-rizwana.png',
    },
    relatedSlugs: ['defi-lending-platform', 'enterprise-blockchain-solution', 'token-vesting-contract'],
  },
]

export const CATEGORIES = [
  'All',
  'Smart Contracts',
  'dApp Development',
  'Blockchain Integration',
  'Web3 Infrastructure',
  'Consulting',
]

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'name', label: 'Name A–Z' },
]
