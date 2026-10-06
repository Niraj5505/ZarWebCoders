import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  AlertCircle, 
  Globe, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Headphones, 
  Building2, 
  Briefcase, 
  LineChart, 
  Check,
  Sparkles,
  Lock,
  Wallet
} from 'lucide-react';

export default function DeFiCaseStudyView({ onOpenModal }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const screenshots = [
    {
      id: 1,
      title: 'DeFi Platform Landing',
      tag: 'Home / Hero',
      desc: 'Lend, Borrow and Earn on DeFi hero presentation with wallet connect trigger and statistics.'
    },
    {
      id: 2,
      title: 'Live Markets Overview',
      tag: 'Markets',
      desc: 'Real-time supply & borrow APY rates across USDT, ETH, BTC, and USDC token pools.'
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      tag: 'Dashboard',
      desc: 'User portfolio balance ($4,520.00), supplied assets, borrowed liabilities, and dynamic yield curves.'
    },
    {
      id: 4,
      title: 'Lend & Borrow Modal',
      tag: 'Execution Modal',
      desc: 'Seamless asset supply flow with gas estimation, slippage controls, and one-click smart contract confirmation.'
    }
  ];

  const relatedCases = [
    {
      id: 'nft-marketplace',
      title: 'NFT Marketplace dApp',
      desc: 'A feature-rich NFT marketplace with minting, bidding and wallet integration.',
      image: '/images/service_dapp.jpg',
      link: '/case-studies'
    },
    {
      id: 'token-staking',
      title: 'Token Staking Platform',
      desc: 'A secure staking platform with rewards, vesting and multi-token support.',
      image: '/images/service_token.jpg',
      link: '/case-studies'
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain',
      desc: 'End-to-end supply chain tracking using blockchain technology.',
      image: '/images/service_blockchain.jpg',
      link: '/case-studies'
    },
    {
      id: 'web3-wallet',
      title: 'Web3 Wallet Integration',
      desc: 'Multi-chain wallet integration for a decentralized application.',
      image: '/images/service_consulting.jpg',
      link: '/case-studies'
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
            <Link to="/case-studies">Case Studies</Link>
            <span className="breadcrumb-sep">&gt;</span>
            <span className="breadcrumb-current">DeFi Lending Platform</span>
          </div>

          <div className="contract-hero-grid">
            {/* Left Content */}
            <div>
              <span className="contract-hero-eyebrow">CASE STUDY</span>
              <h1 className="contract-hero-title">
                DeFi Lending Platform
              </h1>
              <h2 style={{ fontSize: '1.25rem', color: '#0d1526', fontWeight: '700', marginBottom: '14px', lineHeight: '1.35', fontFamily: 'Outfit, sans-serif' }}>
                A Secure and Scalable DeFi Solution for Decentralized Lending and Borrowing
              </h2>
              <p className="contract-hero-subtitle" style={{ marginBottom: '24px' }}>
                We developed a complete DeFi lending platform with smart contracts, frontend dApp, and wallet integration, enabling users to lend, borrow, and earn interest securely on the blockchain.
              </p>

              {/* 4 Metadata Badges in a Row */}
              <div className="defi-meta-grid-4">
                <div className="defi-meta-pill">
                  <div className="defi-meta-icon">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0d1526', lineHeight: '1.2' }}>DeFi Platform</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Project Type</div>
                  </div>
                </div>

                <div className="defi-meta-pill">
                  <div className="defi-meta-icon">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0d1526', lineHeight: '1.2' }}>Ethereum & Polygon</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Blockchain</div>
                  </div>
                </div>

                <div className="defi-meta-pill">
                  <div className="defi-meta-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0d1526', lineHeight: '1.2' }}>3 Months</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Timeline</div>
                  </div>
                </div>

                <div className="defi-meta-pill">
                  <div className="defi-meta-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0d1526', lineHeight: '1.2' }}>Live & Active</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Status</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="contract-hero-btns">
                <button className="btn-hero-primary" onClick={onOpenModal}>
                  View Live Project <ArrowRight size={16} />
                </button>
                <button className="btn-hero-white" onClick={onOpenModal}>
                  Discuss Similar Project <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Mockup Graphic: Laptop + Smartphone Mockup */}
            <div className="defi-hero-device-wrap">
              <div className="defi-laptop-mockup-frame">
                <img 
                  src="/images/defi_detail_dashboard.jpg" 
                  alt="DeFi Lending Platform Multi-Screen Interface" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: PROJECT OVERVIEW (SPLIT 2 COLUMNS)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '70px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="defi-overview-split-layout">
            {/* Left Narrative */}
            <div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0d1526', marginBottom: '18px', fontFamily: 'Outfit, sans-serif' }}>
                Project Overview
              </h2>
              <p style={{ fontSize: '0.96rem', color: '#64748b', lineHeight: '1.72', marginBottom: '20px' }}>
                Our client wanted to build a decentralized lending and borrowing platform where users can supply crypto assets, earn interest, and borrow against their holdings. We delivered a secure, scalable, and user-friendly DeFi platform with audited smart contracts, real-time data integration, and a modern UI/UX.
              </p>
            </div>

            {/* Right: 6 Feature Cards in 2x3 Grid */}
            <div className="defi-overview-6-grid">
              <div className="defi-overview-feat-card">
                <div className="defi-overview-feat-icon">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0d1526', marginBottom: '3px', fontFamily: 'Outfit, sans-serif' }}>
                    Custom Smart Contracts
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                    Lending, borrowing, interest calculation
                  </p>
                </div>
              </div>

              <div className="defi-overview-feat-card">
                <div className="defi-overview-feat-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0d1526', marginBottom: '3px', fontFamily: 'Outfit, sans-serif' }}>
                    User-Friendly dApp
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                    Modern and responsive interface
                  </p>
                </div>
              </div>

              <div className="defi-overview-feat-card">
                <div className="defi-overview-feat-icon">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0d1526', marginBottom: '3px', fontFamily: 'Outfit, sans-serif' }}>
                    Multi-Chain Support
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                    Ethereum and Polygon integration
                  </p>
                </div>
              </div>

              <div className="defi-overview-feat-card">
                <div className="defi-overview-feat-icon">
                  <LineChart size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0d1526', marginBottom: '3px', fontFamily: 'Outfit, sans-serif' }}>
                    Real-Time Data
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                    Live market data and analytics
                  </p>
                </div>
              </div>

              <div className="defi-overview-feat-card">
                <div className="defi-overview-feat-icon">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0d1526', marginBottom: '3px', fontFamily: 'Outfit, sans-serif' }}>
                    Secure & Audited
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                    Industry best practices and audits
                  </p>
                </div>
              </div>

              <div className="defi-overview-feat-card">
                <div className="defi-overview-feat-icon">
                  <Headphones size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0d1526', marginBottom: '3px', fontFamily: 'Outfit, sans-serif' }}>
                    Ongoing Support
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                    Maintenance and feature updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: THREE-COLUMN ANALYSIS (CHALLENGE / SOLUTION / DETAILS)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-light" style={{ paddingTop: '60px', paddingBottom: '70px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div className="container">
          <div className="defi-analysis-3col">
            {/* Card 1: The Challenge (Red Alert Highlight) */}
            <div className="defi-challenge-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div className="defi-challenge-badge-icon">
                  <AlertCircle size={22} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0d1526', margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                  The Challenge
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.65', marginBottom: '22px' }}>
                The client needed a secure and scalable DeFi lending platform with real-time interest rates, multi-token support, and a simple user experience. The platform had to be gas-efficient, fully decentralized, and ready for future upgrades.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Complex smart contract logic for lending & borrowing',
                  'Real-time interest rate calculation',
                  'Multi-token and multi-chain support',
                  'Secure architecture and audit compliance',
                  'User-friendly interface for non-technical users'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#1e293b', fontWeight: '500' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Our Solution (Blue / Cyan Highlight) */}
            <div className="defi-solution-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div className="defi-solution-badge-icon">
                  <CheckCircle2 size={22} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0d1526', margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                  Our Solution
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.65', marginBottom: '22px' }}>
                We developed a custom DeFi platform with secure and modular smart contracts, integrated real-time data feeds, and designed a clean, intuitive frontend. The solution was built with scalability, security, and performance in mind.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Developed and audited smart contracts',
                  'Integrated Chainlink for real-time price data',
                  'Implemented multi-token and multi-chain support',
                  'Built a modern and responsive dApp',
                  'Deployed, tested and provided post-launch support'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#1e293b', fontWeight: '500' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#eaf2ff', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Project Details (Sidebar Panel) */}
            <div className="defi-details-sidebar-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Briefcase size={20} color="var(--primary-blue)" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0d1526', margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                  Project Details
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {/* Client */}
                <div className="defi-sidebar-detail-item">
                  <div className="defi-sidebar-icon-wrap">
                    <Users size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: '700', color: '#94a3b8' }}>Client</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0d1526' }}>DeFiPro (Confidential)</div>
                  </div>
                </div>

                {/* Industry */}
                <div className="defi-sidebar-detail-item">
                  <div className="defi-sidebar-icon-wrap">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: '700', color: '#94a3b8' }}>Industry</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0d1526' }}>DeFi / FinTech</div>
                  </div>
                </div>

                {/* Project Type */}
                <div className="defi-sidebar-detail-item">
                  <div className="defi-sidebar-icon-wrap">
                    <Layers size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: '700', color: '#94a3b8' }}>Project Type</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0d1526' }}>DeFi Lending Platform</div>
                  </div>
                </div>

                {/* Blockchain */}
                <div className="defi-sidebar-detail-item">
                  <div className="defi-sidebar-icon-wrap">
                    <Globe size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: '700', color: '#94a3b8' }}>Blockchain</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0d1526' }}>Ethereum, Polygon</div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="defi-sidebar-detail-item">
                  <div className="defi-sidebar-icon-wrap">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: '700', color: '#94a3b8' }}>Timeline</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0d1526' }}>3 Months</div>
                  </div>
                </div>

                {/* Project Link */}
                <div className="defi-sidebar-detail-item">
                  <div className="defi-sidebar-icon-wrap">
                    <ExternalLink size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: '700', color: '#94a3b8' }}>Project Link</div>
                    <a 
                      href="https://defipro.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--primary-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
                    >
                      https://defipro.app <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: PROJECT SCREENSHOTS (4 CARDS GRID)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '65px', paddingBottom: '70px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0d1526', margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                Project Screenshots
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginTop: '6px' }}>
                A look at the actual platform we developed.
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => setActiveSlide((s) => Math.max(0, s - 1))}
                className="contact-social-icon-btn"
                aria-label="Previous Screenshot"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setActiveSlide((s) => Math.min(screenshots.length - 1, s + 1))}
                className="contact-social-icon-btn"
                aria-label="Next Screenshot"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* 4 Platform UI Screen Cards */}
          <div className="defi-screenshots-4-grid">
            {/* Screen 1: Hero Landing */}
            <div className="defi-screen-mockup-card">
              <div style={{ background: '#080d1e', padding: '16px', borderBottom: '1px solid #1a2540', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: '800', color: '#00d4ff', textTransform: 'uppercase' }}>DeFiPro</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Connect Wallet</span>
              </div>
              <div style={{ padding: '22px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.25', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                  Lend, Borrow<br />and Earn on DeFi
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginBottom: '16px' }}>
                  A Decentralized Lending Platform for a Financially Open Future.
                </div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ background: '#0e172e', border: '1px solid #1a2540', borderRadius: '8px', padding: '6px 10px', flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#00d4ff' }}>$12.5M</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Total Value Locked</div>
                  </div>
                  <div style={{ background: '#0e172e', border: '1px solid #1a2540', borderRadius: '8px', padding: '6px 10px', flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#00d4ff' }}>2.8K</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Active Users</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: 'linear-gradient(135deg, #1a7aff, #0058d4)', color: '#fff', fontSize: '0.75rem', fontWeight: '600', padding: '6px 14px', borderRadius: '9999px' }}>
                    Connect Wallet
                  </button>
                  <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: '600', padding: '6px 14px', borderRadius: '9999px' }}>
                    Start Lending
                  </button>
                </div>
              </div>
            </div>

            {/* Screen 2: Markets Table */}
            <div className="defi-screen-mockup-card">
              <div style={{ background: '#080d1e', padding: '16px', borderBottom: '1px solid #1a2540', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#ffffff' }}>Markets</span>
                <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Live APY</span>
              </div>
              <div style={{ padding: '14px', flex: 1 }}>
                <table style={{ width: '100%', fontSize: '0.74rem', borderCollapse: 'collapse', color: '#94a3b8' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #1a2540', textAlign: 'left', color: '#64748b' }}>
                      <th style={{ padding: '6px 4px' }}>Asset</th>
                      <th style={{ padding: '6px 4px' }}>Supply APY</th>
                      <th style={{ padding: '6px 4px' }}>Borrow APY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #131c36' }}>
                      <td style={{ padding: '8px 4px', color: '#ffffff', fontWeight: '600' }}>🟢 USDT</td>
                      <td style={{ padding: '8px 4px', color: '#00d4ff', fontWeight: '600' }}>6.2%</td>
                      <td style={{ padding: '8px 4px' }}>8.4%</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #131c36' }}>
                      <td style={{ padding: '8px 4px', color: '#ffffff', fontWeight: '600' }}>🔵 ETH</td>
                      <td style={{ padding: '8px 4px', color: '#00d4ff', fontWeight: '600' }}>4.8%</td>
                      <td style={{ padding: '8px 4px' }}>7.1%</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #131c36' }}>
                      <td style={{ padding: '8px 4px', color: '#ffffff', fontWeight: '600' }}>🟠 BTC</td>
                      <td style={{ padding: '8px 4px', color: '#00d4ff', fontWeight: '600' }}>3.1%</td>
                      <td style={{ padding: '8px 4px' }}>5.9%</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 4px', color: '#ffffff', fontWeight: '600' }}>🔵 USDC</td>
                      <td style={{ padding: '8px 4px', color: '#00d4ff', fontWeight: '600' }}>5.4%</td>
                      <td style={{ padding: '8px 4px' }}>6.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Screen 3: Dashboard */}
            <div className="defi-screen-mockup-card">
              <div style={{ background: '#080d1e', padding: '16px', borderBottom: '1px solid #1a2540', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#ffffff' }}>Dashboard</span>
                <span style={{ fontSize: '0.7rem', color: '#00d4ff', fontWeight: '700' }}>+12.5%</span>
              </div>
              <div style={{ padding: '18px 16px', flex: 1 }}>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Total Balance</div>
                <div style={{ fontSize: '1.45rem', fontWeight: '800', color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
                  $4,520.00
                </div>
                <div style={{ display: 'flex', gap: '8px', margin: '14px 0' }}>
                  <div style={{ background: '#0e172e', border: '1px solid #1a2540', borderRadius: '8px', padding: '8px 10px', flex: 1 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: '800', color: '#00d4ff' }}>$2,100</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Supplied</div>
                  </div>
                  <div style={{ background: '#0e172e', border: '1px solid #1a2540', borderRadius: '8px', padding: '8px 10px', flex: 1 }}>
                    <div style={{ fontSize: '0.84rem', fontWeight: '800', color: '#38bdf8' }}>$1,200</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Borrowed</div>
                  </div>
                </div>
                {/* Visual Chart Line */}
                <div style={{ height: '36px', width: '100%' }}>
                  <svg width="100%" height="100%" viewBox="0 0 120 30" fill="none">
                    <path d="M0 25 Q30 5, 60 20 T120 5" fill="none" stroke="#00d4ff" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Screen 4: Lend USDT Modal */}
            <div className="defi-screen-mockup-card">
              <div style={{ background: '#080d1e', padding: '16px', borderBottom: '1px solid #1a2540', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#ffffff' }}>Lend USDT</span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Balance: 1,250 USDT</span>
              </div>
              <div style={{ padding: '18px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ background: '#060c1e', border: '1px solid #1a2540', borderRadius: '10px', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem' }}>100</span>
                    <span style={{ color: '#00d4ff', fontWeight: '700', fontSize: '0.78rem' }}>🟢 USDT ▾</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '6px' }}>
                    <span>Estimated APY</span>
                    <span style={{ color: '#00d4ff', fontWeight: '700' }}>6.2%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '14px' }}>
                    <span>Estimated Rewards</span>
                    <span style={{ color: '#ffffff', fontWeight: '700' }}>6.2 USDT / yr</span>
                  </div>
                </div>
                <button style={{ width: '100%', background: 'linear-gradient(135deg, #1a7aff, #0058d4)', color: '#fff', fontSize: '0.8rem', fontWeight: '700', padding: '9px', borderRadius: '10px', border: 'none' }}>
                  Supply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: PROJECT RESULTS & TESTIMONIAL
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-light" style={{ paddingTop: '65px', paddingBottom: '70px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div className="container">
          <div className="defi-results-split-row">
            {/* Left: Project Results */}
            <div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0d1526', marginBottom: '6px', fontFamily: 'Outfit, sans-serif' }}>
                Project Results
              </h2>
              <p style={{ fontSize: '0.94rem', color: '#64748b' }}>
                The platform has achieved great results since launch.
              </p>

              <div className="defi-results-stats-row">
                <div className="defi-result-stat-card">
                  <div className="defi-result-stat-icon">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0d1526', lineHeight: '1.1', fontFamily: 'Outfit, sans-serif' }}>$12.5M</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Total Value Locked</div>
                  </div>
                </div>

                <div className="defi-result-stat-card">
                  <div className="defi-result-stat-icon">
                    <Users size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0d1526', lineHeight: '1.1', fontFamily: 'Outfit, sans-serif' }}>2.8K+</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Active Users</div>
                  </div>
                </div>

                <div className="defi-result-stat-card">
                  <div className="defi-result-stat-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0d1526', lineHeight: '1.1', fontFamily: 'Outfit, sans-serif' }}>5.4%</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Average APY</div>
                  </div>
                </div>

                <div className="defi-result-stat-card">
                  <div className="defi-result-stat-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0d1526', lineHeight: '1.1', fontFamily: 'Outfit, sans-serif' }}>99.9%</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>Platform Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Client Testimonial */}
            <div className="defi-testimonial-card">
              <div style={{ fontSize: '2.5rem', color: 'var(--primary-blue)', lineHeight: 0.8, marginBottom: '10px', fontFamily: 'serif' }}>
                “
              </div>
              <p style={{ fontSize: '0.92rem', color: '#334155', fontStyle: 'italic', lineHeight: '1.65', marginBottom: '22px' }}>
                "ZarWebCoders delivered an exceptional DeFi platform that exceeded our expectations. Their technical expertise, communication, and support were outstanding. Highly recommended for any Web3 project."
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                    alt="Michael Carter" 
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#0d1526' }}>Michael Carter</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Founder, DeFiPro</div>
                  </div>
                </div>

                {/* 5 Gold Stars */}
                <div style={{ display: 'flex', gap: '3px', color: '#f59e0b' }}>
                  <Star size={15} fill="#f59e0b" />
                  <Star size={15} fill="#f59e0b" />
                  <Star size={15} fill="#f59e0b" />
                  <Star size={15} fill="#f59e0b" />
                  <Star size={15} fill="#f59e0b" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: RELATED CASE STUDIES (4 CARDS)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '65px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="contract-related-header">
            <div>
              <h2 className="contract-related-title">Related Case Studies</h2>
              <p className="contract-related-sub">Explore more projects we've built for our clients.</p>
            </div>
            <Link 
              to="/case-studies" 
              className="contract-related-link"
              onClick={() => window.scrollTo({top:0})}
            >
              View All Case Studies <ArrowRight size={16} />
            </Link>
          </div>

          <div className="contract-related-4-grid">
            {relatedCases.map((cs) => (
              <Link 
                key={cs.id} 
                to={cs.link} 
                className="contract-related-card"
                onClick={() => window.scrollTo({top:0})}
              >
                <div className="contract-related-img-box">
                  <img src={cs.image} alt={cs.title} />
                </div>
                <h3 className="contract-related-card-title">{cs.title}</h3>
                <p className="contract-related-card-desc">{cs.desc}</p>
                <div className="contract-related-learn-more">
                  View Case Study <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7: DARK CTA BANNER ("Let's Build Your Web3 Idea Together")
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '10px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="contact-dark-cta-card">
            {/* Left Content */}
            <div style={{ maxWidth: '640px', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '0.74rem', fontWeight: '800', letterSpacing: '1.6px', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '10px' }}>
                HAVE A SIMILAR PROJECT IN MIND?
              </div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.2', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                Let's Build Your Web3 Idea Together
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '28px' }}>
                Whether you need a DeFi platform, NFT marketplace, dApp, or custom blockchain solution, our team is here to help. Get a free consultation and project estimate.
              </p>

              <button 
                className="btn-hero-white" 
                onClick={onOpenModal}
                style={{ 
                  background: '#ffffff', 
                  color: '#0d1526', 
                  fontWeight: '700', 
                  padding: '12px 28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)' 
                }}
              >
                Discuss Your Project <ArrowRight size={16} />
              </button>
            </div>

            {/* Right: 3D Isometric Glowing Blockchain Cubes SVG */}
            <div className="dark-cta-svg-cube-wrap" style={{ position: 'relative', zIndex: 2 }}>
              <svg width="100%" height="100%" viewBox="0 0 280 170" fill="none">
                <defs>
                  <linearGradient id="defiCubeGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1a7aff" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="defiCubeGlow2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a7aff" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#05091a" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Large Center Cube */}
                <polygon points="170,45 220,20 270,45 220,70" fill="url(#defiCubeGlow1)" stroke="#00d4ff" strokeWidth="1.5" />
                <polygon points="170,45 220,70 220,130 170,105" fill="url(#defiCubeGlow2)" stroke="#1a7aff" strokeWidth="1.5" />
                <polygon points="220,70 270,45 270,105 220,130" fill="url(#defiCubeGlow2)" stroke="#00d4ff" strokeWidth="1.5" opacity="0.9" />

                {/* Left Floating Cube */}
                <polygon points="70,75 110,55 150,75 110,95" fill="url(#defiCubeGlow1)" stroke="#00d4ff" strokeWidth="1.2" opacity="0.8" />
                <polygon points="70,75 110,95 110,140 70,120" fill="url(#defiCubeGlow2)" stroke="#1a7aff" strokeWidth="1.2" opacity="0.8" />
                <polygon points="110,95 150,75 150,120 110,140" fill="url(#defiCubeGlow2)" stroke="#00d4ff" strokeWidth="1.2" opacity="0.7" />

                {/* Small Top Floating Cube */}
                <polygon points="20,50 45,36 70,50 45,64" fill="url(#defiCubeGlow1)" stroke="#00d4ff" strokeWidth="1" opacity="0.6" />
                <polygon points="20,50 45,64 45,94 20,80" fill="url(#defiCubeGlow2)" stroke="#1a7aff" strokeWidth="1" opacity="0.6" />
                <polygon points="45,64 70,50 70,80 45,94" fill="url(#defiCubeGlow2)" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />

                {/* Connecting Laser Beams */}
                <path d="M70 85 L110 95 M150 95 L170 80" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
