import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Box, Link2, Database, ShieldCheck, Compass, 
  ArrowRight, CheckCircle2, Lock, Clock, Shield, Code2, 
  Layers, Cpu, Globe, Rocket, Lightbulb, PenTool, Headphones, 
  BarChart3, Wallet, Zap
} from 'lucide-react';

export default function ServicesView({ onOpenModal }) {
  const coreServices = [
    {
      id: 'smart-contract-development',
      icon: <FileText size={24} />,
      title: 'Smart Contract Development',
      desc: 'Secure, gas-efficient and audit-ready smart contracts built with Solidity and modern frameworks.',
      bullets: [
        'ERC-20 / ERC-721 / ERC-1155',
        'DeFi & DAO Contracts',
        'Custom Logic & Automation'
      ],
      link: '/services/smart-contract-development',
      watermark: <Code2 size={70} />
    },
    {
      id: 'dapp-development',
      icon: <Box size={24} />,
      title: 'dApp Development',
      desc: 'Build decentralized applications with seamless user experiences and wallet integrations.',
      bullets: [
        'Web3 Frontend (React / Next.js)',
        'Wallet Integration (MetaMask, WalletConnect)',
        'Testing & Deployment'
      ],
      link: '/services',
      watermark: <Wallet size={70} />
    },
    {
      id: 'blockchain-integration',
      icon: <Link2 size={24} />,
      title: 'Blockchain Integration',
      desc: 'Integrate blockchain technology into your existing systems for transparency and efficiency.',
      bullets: [
        'API Integration (Ethereum, Polygon, etc.)',
        'Custom Blockchain Solutions',
        'Cross-Chain Integration'
      ],
      link: '/services',
      watermark: <Cpu size={70} />
    },
    {
      id: 'web3-infrastructure',
      icon: <Database size={24} />,
      title: 'Web3 Infrastructure',
      desc: 'Reliable and scalable infrastructure for your blockchain applications.',
      bullets: [
        'Node Setup & Maintenance',
        'IPFS & Decentralized Storage',
        'DevOps & Cloud Deployment'
      ],
      link: '/services',
      watermark: <Layers size={70} />
    },
    {
      id: 'security-auditing',
      icon: <ShieldCheck size={24} />,
      title: 'Security & Auditing',
      desc: 'Protect your assets and users with robust security practices and audits.',
      bullets: [
        'Smart Contract Audits',
        'Vulnerability Assessment',
        'Best Practices Implementation'
      ],
      link: '/services',
      watermark: <Shield size={70} />
    },
    {
      id: 'consulting-strategy',
      icon: <Compass size={24} />,
      title: 'Consulting & Strategy',
      desc: 'Get expert guidance to choose the right blockchain solutions for your business goals.',
      bullets: [
        'Tech Stack Recommendation',
        'Project Roadmap & Planning',
        'Ongoing Support & Maintenance'
      ],
      link: '/services',
      watermark: <BarChart3 size={70} />
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Understand your goals, requirements and vision.',
      icon: <Lightbulb size={18} />
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Create architecture, UI/UX and technical plan.',
      icon: <PenTool size={18} />
    },
    {
      num: '03',
      title: 'Development',
      desc: 'Build, test and integrate core features.',
      icon: <Code2 size={18} />
    },
    {
      num: '04',
      title: 'Deployment',
      desc: 'Launch on mainnet/testnet and ensure stability.',
      icon: <Rocket size={18} />
    },
    {
      num: '05',
      title: 'Support',
      desc: 'Provide ongoing maintenance and updates.',
      icon: <Headphones size={18} />
    }
  ];

  const techStackList = [
    { name: 'Solidity', icon: <Code2 size={16} color="#1a7aff" /> },
    { name: 'React.js', icon: <Layers size={16} color="#00d4ff" /> },
    { name: 'Next.js', icon: <Globe size={16} color="#0d1526" /> },
    { name: 'Node.js', icon: <Cpu size={16} color="#10b981" /> },
    { name: 'Web3.js', icon: <Globe size={16} color="#1a7aff" /> },
    { name: 'IPFS', icon: <Box size={16} color="#00d4ff" /> },
    { name: 'Polygon', icon: <Zap size={16} color="#8247e5" /> },
    { name: 'Ethereum', icon: <Shield size={16} color="#3b82f6" /> },
    { name: 'Hardhat', icon: <Compass size={16} color="#eab308" /> }
  ];

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
                <span className="hero-tag-text">OUR SERVICES</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: '3.3rem', lineHeight: '1.15', marginBottom: '18px' }}>
                Build Scalable Web3<br />
                <span className="hero-title-accent">Solutions for Your Business</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.02rem', marginBottom: '24px', maxWidth: '520px' }}>
                From smart contracts to full-stack dApps, we provide end-to-end Web3 development services to help you innovate, automate, and grow in the decentralized world.
              </p>

              {/* 3 Feature Pills */}
              <div className="services-hero-pills">
                <div className="services-hero-pill-item">
                  <Lock size={15} />
                  <span>Secure Code</span>
                </div>
                <div className="services-hero-pill-item">
                  <Clock size={15} />
                  <span>On-Time Delivery</span>
                </div>
                <div className="services-hero-pill-item">
                  <ShieldCheck size={15} />
                  <span>Long-Term Support</span>
                </div>
              </div>
            </div>

            {/* Right Graphic */}
            <div style={{ position: 'relative' }}>
              <div className="hero-image-wrapper">
                <img
                  src="/images/hero_laptop.jpg"
                  alt="ZarWebCoders Scalable Web3 Solutions Laptop"
                  className="hero-image"
                />
              </div>

              {/* 4 Floating Badges matching wireframe */}
              <div className="hero-floating-cube-badge badge-top-left">
                <div className="cube-dot"></div>
                <span>Smart Contracts</span>
              </div>
              <div className="hero-floating-cube-badge badge-top-right">
                <div className="cube-dot"></div>
                <span>dApps</span>
              </div>
              <div className="hero-floating-cube-badge badge-bottom-left">
                <div className="cube-dot"></div>
                <span>Blockchain Integration</span>
              </div>
              <div className="hero-floating-cube-badge badge-bottom-right">
                <div className="cube-dot"></div>
                <span>Web3 Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: OUR CORE SERVICES (6 CARDS GRID)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header-split">
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                OUR CORE SERVICES
              </div>
              <h2 className="section-title" style={{ margin: 0, fontSize: '2.4rem' }}>
                Specialized Web3 Development<br />Services
              </h2>
            </div>
            <p className="section-header-split-desc">
              We offer a comprehensive range of Web3 development services tailored to your business needs. Whether you're launching a new product or integrating blockchain into your existing platform, we've got you covered.
            </p>
          </div>

          {/* 6 Core Service Cards in 3x2 Grid */}
          <div className="grid-3" style={{ gap: '28px' }}>
            {coreServices.map((svc) => (
              <Link 
                key={svc.id} 
                to={svc.link} 
                className="service-card-wireframe"
                onClick={() => window.scrollTo({top:0})}
              >
                {/* Top Icon */}
                <div className="service-card-wireframe-icon">
                  {svc.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="service-card-wireframe-title">{svc.title}</h3>
                <p className="service-card-wireframe-desc">{svc.desc}</p>

                {/* Checklist */}
                <div className="service-card-checklist">
                  {svc.bullets.map((bullet, bi) => (
                    <div key={bi} className="service-checklist-item">
                      <CheckCircle2 size={15} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="card-link" style={{ marginTop: 'auto' }}>
                  Learn More <ArrowRight size={14} />
                </div>

                {/* Watermark Icon */}
                <div className="service-card-watermark">
                  {svc.watermark}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: OUR PROCESS & OUR TECHNOLOGY STACK (SPLIT ROW)
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '10px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="services-process-stack-grid">
            {/* Left: OUR PROCESS */}
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                OUR PROCESS
              </div>
              <h2 className="section-title" style={{ fontSize: '2.3rem', margin: '0 0 14px 0' }}>
                From Idea to Deployment
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: '1.65', maxWidth: '500px' }}>
                We follow a clear and transparent process to ensure your project is delivered on time, with the highest quality standards.
              </p>

              {/* 5-Step Row */}
              <div className="process-5-steps-row">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="process-step-pill-box">
                    <div className="process-step-icon-wrap">
                      {step.icon}
                    </div>
                    <div className="process-step-num-small">{step.num}</div>
                    <div className="process-step-title-small">{step.title}</div>
                    <div className="process-step-desc-small">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: OUR TECHNOLOGY STACK */}
            <div className="tech-stack-widget-box">
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0d1526', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                Our Technology Stack
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: '1.6' }}>
                We use modern and proven technologies to build secure, scalable and high-performance Web3 solutions.
              </p>

              {/* 3x3 Grid of Tech Pills */}
              <div className="tech-stack-pills-grid">
                {techStackList.map((tech, idx) => (
                  <div key={idx} className="tech-stack-pill-btn">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: DARK CTA BANNER ("See Our Work in Action")
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '10px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="cta-dark-banner">
            <div className="cta-dark-content">
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '14px' }}>
                REAL PROJECTS. REAL IMPACT.
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.2', marginBottom: '14px', fontFamily: 'Outfit, sans-serif' }}>
                See Our Work in Action
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '28px' }}>
                Explore our case studies to see how we've helped businesses build and scale with Web3 technology.
              </p>
              <Link 
                to="/case-studies"
                className="btn-white"
                onClick={() => window.scrollTo({top:0})}
                style={{
                  background: '#ffffff',
                  color: '#0d1526',
                  fontWeight: '700',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                View Case Studies <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Graphic: Mockup Stack with +12 More Projects Badge */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
              {/* Stacked Device Mockups */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src="/images/case_study_defi.jpg"
                  alt="Web3 Project Preview 1"
                  style={{ width: '80px', height: '110px', objectFit: 'cover', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 24px rgba(0,0,0,0.4)' }}
                />
                <img
                  src="/images/defi_detail_dashboard.jpg"
                  alt="Web3 Project Preview 2"
                  style={{ width: '90px', height: '130px', objectFit: 'cover', borderRadius: '12px', border: '1px solid rgba(0,212,255,0.4)', boxShadow: '0 12px 30px rgba(0,0,0,0.5)', zIndex: 3 }}
                />
              </div>

              {/* +12 More Projects Badge */}
              <div 
                style={{ 
                  background: 'rgba(8, 13, 30, 0.85)', 
                  border: '1px solid rgba(0, 212, 255, 0.35)', 
                  borderRadius: '14px', 
                  padding: '16px 20px', 
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
                }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#00d4ff', fontFamily: 'Outfit, sans-serif' }}>
                  +12
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
                  More Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
