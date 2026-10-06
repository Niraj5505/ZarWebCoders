import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Layers, Cpu, Code2, Sparkles, 
  ChevronDown, CheckCircle2, Zap, TrendingUp, ShieldCheck, Users,
  Globe, Rocket
} from 'lucide-react';

export default function CaseStudiesView({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest First');

  const filters = [
    'All', 
    'Smart Contracts', 
    'dApp Development', 
    'Blockchain Integration', 
    'Web3 Infrastructure', 
    'Consulting'
  ];

  const allProjects = [
    {
      id: 'defi-lending-platform',
      title: 'DeFi Lending Platform',
      category: 'Smart Contracts',
      desc: 'Developed secure and audited smart contracts for a DeFi lending platform with automated interest distribution and collateral management.',
      image: '/images/case_study_defi.jpg',
      tags: ['Solidity', 'Ethereum', '3 Months'],
      link: '/case-studies/defi-lending-platform',
      featured: true
    },
    {
      id: 'nft-marketplace-dapp',
      title: 'NFT Marketplace dApp',
      category: 'dApp Development',
      desc: 'Built a feature-rich NFT marketplace with wallet integration, minting, bidding and collection management.',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80',
      tags: ['React.js', 'Polygon', '4 Months'],
      link: '/case-studies'
    },
    {
      id: 'enterprise-blockchain-solution',
      title: 'Enterprise Blockchain Solution',
      category: 'Blockchain Integration',
      desc: 'Integrated Hyperledger Fabric for a logistics company to ensure transparent and tamper-proof supply chain tracking.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      tags: ['Hyperledger', 'Node.js', '5 Months'],
      link: '/case-studies'
    },
    {
      id: 'web3-wallet-integration',
      title: 'Web3 Wallet Integration',
      category: 'Web3 Infrastructure',
      desc: 'Integrated multi-chain wallet support into an existing platform with secure authentication and seamless UX.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      tags: ['Web3.js', 'Multiple Chains', '3 Months'],
      link: '/case-studies'
    },
    {
      id: 'token-vesting-contract',
      title: 'Token Vesting Contract',
      category: 'Smart Contracts',
      desc: 'Developed a secure vesting contract with role-based access, time locks and admin controls for a client\'s token ecosystem.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      tags: ['Solidity', 'Ethereum', '2 Months'],
      link: '/case-studies'
    },
    {
      id: 'web3-strategy-consulting',
      title: 'Web3 Strategy & Consulting',
      category: 'Consulting',
      desc: 'Provided technical consulting and architecture design for a Web3 startup, including technology stack and development roadmap.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Strategy', 'Architecture', '1 Month'],
      link: '/case-studies'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-section" style={{ paddingBottom: '70px' }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div className="hero-eyebrow">
                <span className="hero-tag-text">CASE STUDIES</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: '3.4rem', lineHeight: '1.14', marginBottom: '18px' }}>
                Real Solutions.<br />
                <span className="hero-title-accent">Real Impact.</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.02rem', marginBottom: '24px', maxWidth: '520px' }}>
                Explore how we’ve helped businesses, startups, and innovators build secure, scalable, and high-performance Web3 solutions. Each project reflects our commitment to quality, innovation, and long-term success.
              </p>

              {/* 3 Mini Stats in a Row */}
              <div className="case-study-hero-stats">
                <div className="case-study-stat-item">
                  <div className="case-study-stat-icon-wrap">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="case-study-stat-val">12+</div>
                    <div className="case-study-stat-lbl">Successful Projects</div>
                  </div>
                </div>

                <div className="case-study-stat-item">
                  <div className="case-study-stat-icon-wrap">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="case-study-stat-val">8+</div>
                    <div className="case-study-stat-lbl">Happy Clients</div>
                  </div>
                </div>

                <div className="case-study-stat-item">
                  <div className="case-study-stat-icon-wrap">
                    <Layers size={20} />
                  </div>
                  <div>
                    <div className="case-study-stat-val">3+</div>
                    <div className="case-study-stat-lbl">Blockchain Networks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic */}
            <div style={{ position: 'relative' }}>
              <div className="hero-image-wrapper">
                <img
                  src="/images/hero_laptop.jpg"
                  alt="ZarWebCoders Web3 Case Studies Laptop"
                  className="hero-image"
                />
              </div>

              {/* Floating Pill Badges matching wireframe */}
              <div className="hero-floating-cube-badge badge-top-left">
                <div className="cube-dot"></div>
                <span>Smart Contracts</span>
              </div>
              <div className="hero-floating-cube-badge badge-top-right">
                <div className="cube-dot"></div>
                <span>dApps</span>
              </div>
              <div className="hero-floating-cube-badge badge-mid-right">
                <div className="cube-dot"></div>
                <span>Web3 Integration</span>
              </div>
              <div className="hero-floating-cube-badge badge-bottom-left badge-highlight">
                <CheckCircle2 size={16} color="#00d4ff" />
                <span>From Concept to Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: FILTER BAR & SORT
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '40px', paddingBottom: '70px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            {/* Filter Pills */}
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    background: activeFilter === filter ? '#05091a' : '#ffffff',
                    color: activeFilter === filter ? '#ffffff' : '#475569',
                    border: '1px solid #e8edf5',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.86rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#64748b' }}>
              <span>Sort by</span>
              <div style={{ position: 'relative' }}>
                <select
                  style={{
                    appearance: 'none',
                    background: '#ffffff',
                    border: '1px solid #e8edf5',
                    borderRadius: '8px',
                    padding: '7px 32px 7px 14px',
                    fontSize: '0.85rem',
                    color: '#0d1526',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Newest First">Newest First</option>
                  <option value="Oldest First">Oldest First</option>
                </select>
                <ChevronDown size={14} color="#64748b" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              SECTION 3: 6 CASE STUDY CARDS (3x2 GRID)
              ═══════════════════════════════════════════════════════ */}
          <div className="grid-3" style={{ gap: '28px' }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="case-study-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8edf5',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image Container with Floating Badge */}
                <div className="case-card-img-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                  <div className="case-card-floating-badge">
                    {project.category}
                  </div>
                </div>

                {/* Body Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0d1526', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {project.desc}
                  </p>

                  {/* Meta Tags Row + Link */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.75rem', color: '#64748b' }}>
                      {project.tags.map((tag, ti) => (
                        <span key={ti} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ color: '#1a7aff' }}>•</span> {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={project.link}
                      onClick={() => window.scrollTo({top:0})}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.84rem',
                        fontWeight: '700',
                        color: '#1a7aff',
                        textDecoration: 'none',
                        transition: 'gap 0.2s ease'
                      }}
                    >
                      View Case Study <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: FEATURED CASE STUDY SHOWCASE
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '10px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="featured-showcase-box">
            {/* Left Image & Overlay Button */}
            <div className="featured-showcase-img-wrap">
              <img
                src="/images/defi_detail_dashboard.jpg"
                alt="DeFi Lending Platform Featured Case Study"
                className="featured-showcase-img"
              />
              <div 
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(8, 13, 30, 0.8)',
                  backdropFilter: 'blur(8px)',
                  color: '#00d4ff',
                  padding: '5px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(0, 212, 255, 0.3)'
                }}
              >
                Featured Case Study
              </div>

              <Link
                to="/case-studies/defi-lending-platform"
                className="featured-showcase-overlay-btn"
                onClick={() => window.scrollTo({top:0})}
              >
                View Full Case Study <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Information & 3 Metrics */}
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                SMART CONTRACTS • ETHEREUM • 3 MONTHS
              </div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#0d1526', lineHeight: '1.2', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                DeFi Lending Platform
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '28px' }}>
                We built a decentralized lending platform with secure smart contracts, automated interest distribution, and collateral management. The solution is fully tested, audited, and ready for mainnet deployment.
              </p>

              {/* 3 Metric Cards */}
              <div className="featured-metrics-row">
                <div className="featured-metric-card">
                  <div className="featured-metric-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="featured-metric-val">100%</div>
                    <div className="featured-metric-lbl">Tested &amp; Audited</div>
                  </div>
                </div>

                <div className="featured-metric-card">
                  <div className="featured-metric-icon">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="featured-metric-val">&lt; 2s</div>
                    <div className="featured-metric-lbl">Transaction Speed</div>
                  </div>
                </div>

                <div className="featured-metric-card">
                  <div className="featured-metric-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="featured-metric-val">3x</div>
                    <div className="featured-metric-lbl">Performance Gain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: DARK CTA BANNER
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '10px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="cta-dark-banner">
            <div className="cta-dark-content">
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '14px' }}>
                LET'S BUILD YOUR WEB3 SOLUTION
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.2', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                Have a Project in Mind?
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '28px' }}>
                Whether you need a smart contract, dApp, or full Web3 integration, we're here to help. Let's turn your idea into a secure and scalable solution.
              </p>
              <button 
                className="btn-white" 
                onClick={onOpenModal}
                style={{
                  background: '#ffffff',
                  color: '#0d1526',
                  fontWeight: '700',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                Discuss Your Project <ArrowRight size={16} />
              </button>
            </div>

            {/* Right 3D Glowing Isometric Blockchain Cubes */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
              <div 
                style={{ 
                  width: '74px', 
                  height: '74px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #1a7aff, #00d4ff)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  boxShadow: '0 0 30px rgba(0,212,255,0.5)',
                  animation: 'floatA 3.5s ease-in-out infinite alternate'
                }}
              >
                <Layers size={36} color="#ffffff" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div 
                  style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '12px', 
                    background: 'rgba(26,122,255,0.4)', 
                    border: '1px solid rgba(0,212,255,0.4)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    animation: 'floatB 3.8s ease-in-out infinite alternate'
                  }}
                >
                  <Cpu size={22} color="#00d4ff" />
                </div>
                <div 
                  style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '10px', 
                    background: 'rgba(0,212,255,0.2)', 
                    border: '1px solid rgba(0,212,255,0.3)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    animation: 'floatA 4.2s ease-in-out infinite alternate'
                  }}
                >
                  <Shield size={18} color="#00d4ff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
