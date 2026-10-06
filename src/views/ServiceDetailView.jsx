import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Zap, 
  Code, 
  Layers, 
  Fuel, 
  Sliders, 
  Network, 
  Headphones, 
  Database, 
  TrendingUp, 
  Image as ImageIcon, 
  Users, 
  Wallet, 
  Lightbulb, 
  PenTool, 
  Rocket, 
  FileCheck,
  ChevronDown,
  Lock
} from 'lucide-react';

export default function ServiceDetailView({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Smart Contract Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Smart Contract Development',
        message: ''
      });
    }, 4000);
  };

  // 6 Overview features (Row 1 & Row 2 matching wireframe)
  const overviewFeatures = [
    {
      title: 'Security First',
      desc: 'We follow secure coding standards and industry best practices.',
      icon: <Shield size={22} />
    },
    {
      title: 'Custom Solutions',
      desc: 'Tailored smart contracts as per your business logic and goals.',
      icon: <Layers size={22} />
    },
    {
      title: 'Multi-Chain Support',
      desc: 'Ethereum, BSC, Polygon, Avalanche, Tron and more.',
      icon: <Network size={22} />
    },
    {
      title: 'Gas Optimized',
      desc: 'Efficient code to reduce transaction costs.',
      icon: <Zap size={22} />
    },
    {
      title: 'Audit Integration',
      desc: 'Optional third-party audits for extra security.',
      icon: <FileCheck size={22} />
    },
    {
      title: 'Ongoing Support',
      desc: 'Post-deployment support and updates.',
      icon: <Headphones size={22} />
    }
  ];

  // 6 Process Steps matching wireframe
  const processSteps = [
    {
      num: '01',
      title: 'Requirement Analysis',
      desc: 'Understand your goals, use case and technical requirements.',
      icon: <Lightbulb size={20} />
    },
    {
      num: '02',
      title: 'Architecture & Design',
      desc: 'Design the contract structure and logic.',
      icon: <PenTool size={20} />
    },
    {
      num: '03',
      title: 'Development',
      desc: 'Write clean, secure and gas-optimized smart contract code.',
      icon: <Code size={20} />
    },
    {
      num: '04',
      title: 'Testing',
      desc: 'Internal testing, security checks and (optional) third-party audit.',
      icon: <ShieldCheck size={20} />
    },
    {
      num: '05',
      title: 'Deployment',
      desc: 'Deploy on mainnet or testnet and verify on block explorer.',
      icon: <Rocket size={20} />
    },
    {
      num: '06',
      title: 'Support',
      desc: 'Ongoing maintenance and future updates.',
      icon: <Headphones size={20} />
    }
  ];

  // 9 Tech Stack items with authentic brand colored SVGs
  const techStackItems = [
    {
      name: 'Solidity',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M12 22V12m0 0L4 7m8 5l8-5" stroke="#334155" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Hardhat',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#eab308">
          <path d="M12 3a9 9 0 0 0-9 9c0 2.8 1.3 5.3 3.3 7h11.4c2-1.7 3.3-4.2 3.3-7a9 9 0 0 0-9-9z"/>
          <path d="M2 19h20v2H2z" fill="#ca8a04"/>
        </svg>
      )
    },
    {
      name: 'OpenZeppelin',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 4h12l-7 16h6" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Ethereum',
      icon: (
        <svg width="18" height="20" viewBox="0 0 784 1277" fill="#627EEA">
          <path d="M392 0L0 648l392 232 392-232L392 0z"/>
          <path d="M392 984L0 748l392 529 392-529-392 236z" fill="#4559A4"/>
        </svg>
      )
    },
    {
      name: 'BNB Chain',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#F0B90B">
          <path d="M12 2l4.5 4.5-4.5 4.5-4.5-4.5L12 2zm-7.5 7.5L9 14l-4.5 4.5L0 14l4.5-4.5zm15 0L24 14l-4.5 4.5-4.5-4.5 4.5-4.5zM12 13l4.5 4.5-4.5 4.5-4.5-4.5L12 13z"/>
        </svg>
      )
    },
    {
      name: 'Polygon',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#8247E5">
          <path d="M16.5 12l3.5-2v-4l-3.5-2-3.5 2v4l3.5 2zm-9 0l3.5-2v-4l-3.5-2-3.5 2v4l3.5 2zm4.5 2.5l-3.5 2-3.5-2V18l3.5 2 3.5-2v-3.5zm4.5 0l-3.5 2-3.5-2V18l3.5 2 3.5-2v-3.5z"/>
        </svg>
      )
    },
    {
      name: 'Tron',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#EF0027">
          <path d="M2 3l20 5-8 13-12-18zm3 3.5l8 12 5.5-9-13.5-3z"/>
        </svg>
      )
    },
    {
      name: 'Avalanche',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#E84142">
          <path d="M12 2L1 21h7l4-7.5 4 7.5h7L12 2zm0 6.5l2.6 5h-5.2l2.6-5z"/>
        </svg>
      )
    },
    {
      name: 'Arbitrum',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#28A0F0">
          <path d="M12 2L2 19h4.5l5.5-9.5L17.5 19H22L12 2zm-1.8 11.5L8.5 17h6.8l-1.7-3.5h-3.4z"/>
        </svg>
      )
    }
  ];

  // 6 Use Cases matching wireframe
  const useCases = [
    {
      title: 'Token Development',
      desc: 'ERC-20, BEP-20, TRC-20 and custom tokens.',
      icon: <Database size={18} />
    },
    {
      title: 'DeFi Protocols',
      desc: 'Staking, Farming, Lending & Liquidity Pools.',
      icon: <TrendingUp size={18} />
    },
    {
      title: 'NFT Platforms',
      desc: 'Minting, Marketplace and NFT utilities.',
      icon: <ImageIcon size={18} />
    },
    {
      title: 'DAO & Governance',
      desc: 'Voting, Treasury and Governance Logic.',
      icon: <Users size={18} />
    },
    {
      title: 'Wallet Integration',
      desc: 'Multi-chain wallet interactions and permissions.',
      icon: <Wallet size={18} />
    },
    {
      title: 'Custom Web3 Logic',
      desc: 'Any custom smart contract as per your business needs.',
      icon: <Code size={18} />
    }
  ];

  // 4 Related Services matching wireframe
  const relatedServices = [
    {
      id: 'dapp-development',
      title: 'dApp Development',
      desc: 'Build decentralized applications with modern tech stack.',
      image: '/images/service_dapp.jpg',
      link: '/services'
    },
    {
      id: 'token-development',
      title: 'Token Development',
      desc: 'Create custom tokens for your blockchain project.',
      image: '/images/service_token.jpg',
      link: '/services'
    },
    {
      id: 'blockchain-integration',
      title: 'Blockchain Integration',
      desc: 'Integrate blockchain into your existing systems.',
      image: '/images/service_blockchain.jpg',
      link: '/services'
    },
    {
      id: 'web3-consulting',
      title: 'Web3 Consulting',
      desc: 'Get expert guidance for your Web3 product roadmap.',
      image: '/images/service_consulting.jpg',
      link: '/services'
    }
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO & BREADCRUMB
          ═══════════════════════════════════════════════════════ */}
      <section className="contract-hero-section">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb-nav-wireframe">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <span className="breadcrumb-current">Smart Contract Development</span>
          </div>

          <div className="contract-hero-grid">
            {/* Left Content Column */}
            <div>
              <span className="contract-hero-eyebrow">OUR SERVICE</span>
              <h1 className="contract-hero-title">
                Smart Contract<br />Development
              </h1>
              <p className="contract-hero-subtitle">
                Secure, efficient, and audit-ready smart contracts for your Web3 projects. We build custom smart contracts with best practices, security, and scalability in mind.
              </p>

              {/* 4 Feature Badges in 2x2 Grid */}
              <div className="contract-hero-badges-row">
                <div className="contract-hero-badge-pill">
                  <div className="contract-hero-badge-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="contract-hero-badge-title">Secure Code</div>
                    <div className="contract-hero-badge-sub">Audited & Tested</div>
                  </div>
                </div>

                <div className="contract-hero-badge-pill">
                  <div className="contract-hero-badge-icon">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="contract-hero-badge-title">Gas Optimized</div>
                    <div className="contract-hero-badge-sub">Cost Efficient</div>
                  </div>
                </div>

                <div className="contract-hero-badge-pill">
                  <div className="contract-hero-badge-icon">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <div className="contract-hero-badge-title">Custom Logic</div>
                    <div className="contract-hero-badge-sub">Tailored to Your Needs</div>
                  </div>
                </div>

                <div className="contract-hero-badge-pill">
                  <div className="contract-hero-badge-icon">
                    <Network size={20} />
                  </div>
                  <div>
                    <div className="contract-hero-badge-title">Multi-Chain</div>
                    <div className="contract-hero-badge-sub">Ethereum, BSC, Polygon +</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="contract-hero-btns">
                <button className="btn-hero-primary" onClick={onOpenModal}>
                  Discuss Your Project <ArrowRight size={16} />
                </button>
                <Link to="/case-studies" className="btn-hero-white" onClick={() => window.scrollTo({top:0})}>
                  View Case Studies <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Visual Card with Glowing Laptop and 3 Floating Badges */}
            <div className="contract-hero-visual-card">
              <img 
                src="/images/hero_laptop.jpg" 
                alt="Smart Contract Engineering High-Tech Laptop Setup" 
              />

              {/* Floating Badge 1 (Top Left) */}
              <div className="contract-hero-floating-badge floating-top-left">
                <div className="floating-badge-icon">
                  <Code size={16} />
                </div>
                <div>
                  <div className="floating-badge-title">Solidity</div>
                  <div className="floating-badge-sub">Smart Contracts</div>
                </div>
              </div>

              {/* Floating Badge 2 (Top Right) */}
              <div className="contract-hero-floating-badge floating-top-right">
                <div className="floating-badge-icon">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="floating-badge-title">Audit Ready</div>
                  <div className="floating-badge-sub">Secure & Reliable</div>
                </div>
              </div>

              {/* Floating Badge 3 (Bottom Right) */}
              <div className="contract-hero-floating-badge floating-bottom-right">
                <div className="floating-badge-icon">
                  <Network size={16} />
                </div>
                <div>
                  <div className="floating-badge-title">Multi-Chain</div>
                  <div className="floating-badge-sub">Ethereum, BSC, Polygon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: SERVICE OVERVIEW (SPLIT 2 COLUMNS)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="contract-overview-split">
            {/* Left Column: Narrative & Checklist */}
            <div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0d1526', marginBottom: '18px', fontFamily: 'Outfit, sans-serif' }}>
                Service Overview
              </h2>
              <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: '1.7', marginBottom: '24px' }}>
                We develop secure, scalable, and cost-efficient smart contracts for startups, businesses, and blockchain projects. Whether it's a token, DeFi protocol, NFT marketplace, staking platform, or custom Web3 logic — we turn your idea into reliable smart contracts with clean code, industry best practices, and optional third-party audits.
              </p>

              <div className="contract-overview-checklist">
                {[
                  'Custom smart contract development',
                  'Token development (ERC-20, BEP-20, TRC-20, etc.)',
                  'DeFi & DAO smart contracts',
                  'NFT & marketplace contracts',
                  'Upgradeable and modular architecture',
                  'Testing, deployment and post-launch support'
                ].map((item, idx) => (
                  <div key={idx} className="contract-overview-check-item">
                    <div className="contract-overview-check-icon">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 6 Features (3x2 Grid) */}
            <div className="contract-features-3x2">
              {overviewFeatures.map((feat, idx) => (
                <div key={idx} className="contract-feature-card">
                  <div className="contract-feature-card-icon">
                    {feat.icon}
                  </div>
                  <h3 className="contract-feature-card-title">{feat.title}</h3>
                  <p className="contract-feature-card-desc">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: OUR DEVELOPMENT PROCESS (6 HORIZONTAL STEPS)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-light" style={{ paddingTop: '65px', paddingBottom: '65px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div className="container">
          <div className="contract-process-header">
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0d1526', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
              Our Development Process
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#64748b' }}>
              A clear and transparent process to ensure your smart contract is secure, efficient, and delivered on time.
            </p>
          </div>

          <div className="contract-process-steps-row">
            {processSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="contract-process-step-col">
                  <div className="contract-process-step-circle">
                    {step.icon}
                  </div>
                  <div className="contract-process-step-num">{step.num}</div>
                  <div className="contract-process-step-title">{step.title}</div>
                  <div className="contract-process-step-desc">{step.desc}</div>
                </div>

                {/* Arrow separator between steps */}
                {idx < processSteps.length - 1 && (
                  <div className="contract-process-arrow-sep">
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: TECH STACK & USE CASES SPLIT ROW
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="contract-stack-cases-grid">
            {/* Left Column: Technology Stack */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0d1526', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                Technology Stack
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                We work with the latest blockchain technologies and tools to build high-performance smart contracts.
              </p>

              {/* 3x3 Grid of 9 Tech Cards */}
              <div className="contract-tech-9-grid">
                {techStackItems.map((tech, idx) => (
                  <div key={idx} className="contract-tech-btn">
                    <div className="contract-tech-icon">
                      {tech.icon}
                    </div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Use Cases */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0d1526', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                Use Cases
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                We build smart contracts for a wide range of Web3 applications.
              </p>

              {/* 3x2 Grid of 6 Use Cases */}
              <div className="contract-usecases-3x2">
                {useCases.map((usecase, idx) => (
                  <div key={idx} className="contract-usecase-box">
                    <div className="contract-usecase-icon-wrap">
                      {usecase.icon}
                    </div>
                    <div className="contract-usecase-title">{usecase.title}</div>
                    <div className="contract-usecase-desc">{usecase.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: CONSULTATION FORM BANNER (SPLIT DARK & LIGHT)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-light" style={{ paddingTop: '20px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="contract-consultation-banner">
            {/* Left Side: Dark Hero Section */}
            <div className="consultation-banner-dark">
              <div>
                <div className="consultation-dark-tag">GET A FREE CONSULTATION</div>
                <h2 className="consultation-dark-title">
                  Have a Smart Contract<br />Idea in Mind?
                </h2>
                <p className="consultation-dark-desc">
                  Tell us about your project and our experts will get back to you with the best solution, timeline and cost estimate.
                </p>
              </div>

              {/* 3D Glowing Blockchain Cube SVG Illustration */}
              <div style={{ position: 'relative', width: '100%', height: '110px', marginTop: '10px', overflow: 'hidden' }}>
                <svg width="100%" height="100%" viewBox="0 0 360 110" fill="none" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="cubeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#1a7aff" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="cubeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1a7aff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#05091a" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  {/* Floating Cube 1 */}
                  <polygon points="260,20 300,5 340,20 300,35" fill="url(#cubeGrad1)" stroke="#00d4ff" strokeWidth="1.2" />
                  <polygon points="260,20 300,35 300,75 260,60" fill="url(#cubeGrad2)" stroke="#1a7aff" strokeWidth="1.2" />
                  <polygon points="300,35 340,20 340,60 300,75" fill="url(#cubeGrad2)" stroke="#00d4ff" strokeWidth="1.2" opacity="0.85" />
                  
                  {/* Floating Cube 2 (Small) */}
                  <polygon points="190,45 220,33 250,45 220,57" fill="url(#cubeGrad1)" stroke="#00d4ff" strokeWidth="1" opacity="0.6" />
                  <polygon points="190,45 220,57 220,87 190,75" fill="url(#cubeGrad2)" stroke="#1a7aff" strokeWidth="1" opacity="0.6" />
                  <polygon points="220,57 250,45 250,75 220,87" fill="url(#cubeGrad2)" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
                  
                  {/* Cyan Circuit Lines */}
                  <path d="M120 70 L190 75 M250 65 L270 45" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                </svg>
              </div>

              {/* 3 Reassurance Checks */}
              <div className="consultation-dark-checks">
                <div className="consultation-dark-check-item">
                  <CheckCircle2 size={16} />
                  <span>Free Consultation</span>
                </div>
                <div className="consultation-dark-check-item">
                  <CheckCircle2 size={16} />
                  <span>No Obligation</span>
                </div>
                <div className="consultation-dark-check-item">
                  <CheckCircle2 size={16} />
                  <span>Confidential Discussion</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div className="consultation-banner-light">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f0fdf4', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                  <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 12px auto' }} />
                  <h3 style={{ fontSize: '1.4rem', color: '#166534', fontWeight: '800', marginBottom: '8px' }}>Thank You for Reaching Out!</h3>
                  <p style={{ color: '#4b5563', fontSize: '0.92rem' }}>Our Web3 smart contract engineering team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name and Email */}
                  <div className="consultation-form-grid-2">
                    <div>
                      <label className="consultation-label">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter your name" 
                        className="consultation-input" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="consultation-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="Enter your email" 
                        className="consultation-input" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Project Type */}
                  <div className="consultation-form-grid-2">
                    <div>
                      <label className="consultation-label">Phone Number</label>
                      <div className="consultation-phone-wrap">
                        <div className="consultation-country-btn">
                          <span>🇮🇳</span>
                          <span>+91</span>
                          <ChevronDown size={14} color="#64748b" />
                        </div>
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="consultation-input" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="consultation-label">Project Type</label>
                      <div style={{ position: 'relative' }}>
                        <select 
                          className="consultation-select" 
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{ appearance: 'none', paddingRight: '32px' }}
                        >
                          <option value="Smart Contract Development">Smart Contract Development</option>
                          <option value="dApp Development">dApp Development</option>
                          <option value="Token Development">Token Development</option>
                          <option value="Blockchain Integration">Blockchain Integration</option>
                          <option value="Web3 Consulting">Web3 Consulting</option>
                        </select>
                        <ChevronDown size={16} color="#64748b" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Textarea */}
                  <div className="consultation-form-group">
                    <label className="consultation-label">Tell us about your project *</label>
                    <textarea 
                      required 
                      rows="3" 
                      placeholder="Share your requirements, use case, or any questions..." 
                      className="consultation-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Row 4: Submit Button */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                    <button type="submit" className="consultation-btn-submit">
                      Send Message <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: RELATED SERVICES (4 CARDS)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '20px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="contract-related-header">
            <div>
              <h2 className="contract-related-title">Related Services</h2>
              <p className="contract-related-sub">Explore our other Web3 development services.</p>
            </div>
            <Link 
              to="/services" 
              className="contract-related-link"
              onClick={() => window.scrollTo({top:0})}
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="contract-related-4-grid">
            {relatedServices.map((svc) => (
              <Link 
                key={svc.id} 
                to={svc.link} 
                className="contract-related-card"
                onClick={() => window.scrollTo({top:0})}
              >
                <div className="contract-related-img-box">
                  <img src={svc.image} alt={svc.title} />
                </div>
                <h3 className="contract-related-card-title">{svc.title}</h3>
                <p className="contract-related-card-desc">{svc.desc}</p>
                <div className="contract-related-learn-more">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
