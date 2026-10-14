require('dotenv').config();
const mongoose = require('mongoose');

// Import all 6 models
const Contact = require('./models/Contact');
const Inquiry = require('./models/Inquiry');
const Service = require('./models/Service');
const CaseStudy = require('./models/CaseStudy');
const BlogPost = require('./models/BlogPost');
const TeamMember = require('./models/TeamMember');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined in .env');
  process.exit(1);
}

// 1. Services Data (3 items)
const servicesData = [
  {
    title: 'Smart Contract Development',
    slug: 'smart-contract-development',
    description: 'Secure, efficient, and audit-ready smart contracts for EVM and multi-chain networks.',
    icon: 'Code2',
    features: ['Custom smart contracts', 'Token standards (ERC-20/721/1155)', 'Gas optimization', 'Formal verification'],
    price: 'Custom quote'
  },
  {
    title: 'dApp Development',
    slug: 'dapp-development',
    description: 'Full-stack decentralized applications with seamless wallet integration and intuitive UX.',
    icon: 'Globe',
    features: ['React & Next.js UI', 'WalletConnect & MetaMask', 'IPFS integration', 'Event indexing'],
    price: 'From $5,000'
  },
  {
    title: 'Security & Auditing',
    slug: 'security-auditing',
    description: 'Comprehensive vulnerability assessments and automated testing to secure your Web3 protocols.',
    icon: 'ShieldCheck',
    features: ['Static analysis', 'Reentrancy testing', 'Gas profiling', 'Detailed audit report'],
    price: 'From $3,500'
  }
];

// 2. Case Studies Data (2 items)
const caseStudiesData = [
  {
    title: 'DeFi Lending Platform',
    slug: 'defi-lending-platform',
    client: 'Aegis Finance',
    description: 'Architected and deployed secure liquidity pools with automated interest rate models and flash loan protection.',
    techStack: ['Solidity', 'Ethereum', 'Hardhat', 'Ethers.js'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    results: [
      { metric: 'TVL Secured', value: '$45M+' },
      { metric: 'Audit Score', value: '100% Passed' },
      { metric: 'Gas Optimization', value: '32% Reduction' }
    ]
  },
  {
    title: 'NFT Marketplace dApp',
    slug: 'nft-marketplace-dapp',
    client: 'Vanguard Collectibles',
    description: 'Built a high-performance marketplace enabling fractional ownership, royalties enforcement, and zero-loss auctions.',
    techStack: ['React', 'Polygon', 'The Graph', 'IPFS'],
    imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80',
    results: [
      { metric: 'Total Volume', value: '$12M+' },
      { metric: 'Daily Active Users', value: '8,500+' }
    ]
  }
];

// 3. Blog Posts Data (2 items)
const blogPostsData = [
  {
    title: 'How to Write and Deploy a Smart Contract in Solidity',
    slug: 'how-to-write-deploy-smart-contract-solidity',
    author: 'Abuzar Munshi',
    content: 'A comprehensive guide walking developers through modern Solidity development, security best practices, and mainnet deployment strategies using Hardhat and Foundry.',
    tags: ['Solidity', 'Ethereum', 'Web3', 'Tutorial'],
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    publishedAt: new Date()
  },
  {
    title: 'Building a Web3 dApp with React and Ethers.js',
    slug: 'building-web3-dapp-react-ethersjs',
    author: 'Rizwana Khan',
    content: 'Learn step-by-step how to connect your React interface to blockchain nodes, manage multi-wallet authentication, and handle async transaction life cycles.',
    tags: ['React', 'Ethers.js', 'Frontend', 'dApp'],
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    publishedAt: new Date()
  }
];

// 4. Team Members Data (3 items)
const teamMembersData = [
  {
    name: 'Abuzar Munshi',
    role: 'Founder & CEO',
    bio: 'Lead Web3 Architect directing blockchain protocol development and decentralized system architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com/zarwebcoders',
    order: 1
  },
  {
    name: 'Tufail Ahmed',
    role: 'Blockchain Developer',
    bio: 'Specialist in EVM smart contract logic, cross-chain bridges, and DeFi financial engineering.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com/zarwebcoders',
    order: 2
  },
  {
    name: 'Rizwana Khan',
    role: 'Frontend Developer',
    bio: 'Frontend engineer specialized in responsive React interfaces and Web3 wallet UX.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com/zarwebcoders',
    order: 3
  }
];

// 5. Contact Lead (1 item)
const contactData = {
  name: 'CryptoVentures Advisory',
  email: 'partnerships@cryptoventures.io',
  phone: '+91 81604 04725',
  projectType: 'Smart Contract Development',
  message: 'We are looking to develop an audited algorithmic staking contract for our upcoming token launch.'
};

// 6. Inquiry Lead (1 item)
const inquiryData = {
  name: 'Marcus Vance',
  email: 'marcus@blocklabs.tech',
  phone: '+1 (555) 019-2834',
  serviceType: 'dApp Development',
  budget: '$15k - $30k',
  details: 'Require an enterprise dashboard dApp with multi-sig authorization and real-time gas analytics.',
  status: 'new'
};

async function seed() {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!\n');

    // Drop existing collections to clean up any old schema indexes
    console.log('Dropping existing collections to reset schemas & indexes...');
    await Service.collection.drop().catch(() => {});
    await CaseStudy.collection.drop().catch(() => {});
    await BlogPost.collection.drop().catch(() => {});
    await TeamMember.collection.drop().catch(() => {});
    await Contact.collection.drop().catch(() => {});
    await Inquiry.collection.drop().catch(() => {});

    // Sync new indexes
    await Service.syncIndexes();
    await CaseStudy.syncIndexes();
    await BlogPost.syncIndexes();
    await TeamMember.syncIndexes();
    await Contact.syncIndexes();
    await Inquiry.syncIndexes();

    // Insert new data
    console.log('Inserting seed data...');
    await Service.insertMany(servicesData);
    console.log('✓ Inserted 3 Services');

    await CaseStudy.insertMany(caseStudiesData);
    console.log('✓ Inserted 2 Case Studies');

    await BlogPost.insertMany(blogPostsData);
    console.log('✓ Inserted 2 Blog Posts');

    await TeamMember.insertMany(teamMembersData);
    console.log('✓ Inserted 3 Team Members');

    await Contact.create(contactData);
    console.log('✓ Inserted 1 Contact Lead');

    await Inquiry.create(inquiryData);
    console.log('✓ Inserted 1 Inquiry Lead');

    console.log('\n✅ Seed complete!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
