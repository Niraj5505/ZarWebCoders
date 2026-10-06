import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Layers, Cpu, Globe, Box, Link2,
  Code2, CheckCircle2, ChevronRight, Wallet, Database,
  TrendingUp, Clock, ShieldCheck, ChevronDown
} from 'lucide-react';

export default function HomeView({ onOpenModal }) {
  const [expandedClarity, setExpandedClarity] = useState(null);

  const clarityItems = [
    {
      icon: <Layers size={18} />,
      title: 'Tailored Architecture',
      desc: 'Modular, future-proof smart contract systems and system architectures designed specifically to meet your protocol goals.'
    },
    {
      icon: <TrendingUp size={18} />,
      title: 'Scalable Development',
      desc: 'Gas-optimized codebases built to withstand high transaction throughput and expand across multiple L1/L2 networks.'
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'Testing & Code Quality',
      desc: 'Rigorous automated unit testing, fuzz testing, and static analysis adhering to the highest Web3 security standards.'
    },
    {
      icon: <Clock size={18} />,
      title: 'Transparent Delivery',
      desc: 'Milestone-based delivery with weekly sprints, real-time repo access, transparent communication, and continuous reporting.'
    }
  ];

  const whatWeBuildCards = [
    {
      icon: <Code2 size={24} />,
      title: 'Smart Contracts',
      desc: 'Secure, efficient and audited smart contracts for your blockchain applications.',
      link: '/services/smart-contract-development'
    },
    {
      icon: <Box size={24} />,
      title: 'Decentralized Applications',
      desc: 'Custom dApps with modern UI/UX and seamless blockchain integration.',
      link: '/services'
    },
    {
      icon: <Wallet size={24} />,
      title: 'Wallet & Web3 Integrations',
      desc: 'Integrate wallets, connect to blockchains and enable seamless user experiences.',
      link: '/services'
    },
    {
      icon: <Database size={24} />,
      title: 'Blockchain Infrastructure',
      desc: 'Node setup, APIs, indexing and infrastructure for reliable performance.',
      link: '/services'
    }
  ];

  const processSteps = [
    {
      num: '1',
      title: 'Discover',
      desc: 'Understand your goals, define requirements and plan the approach.'
    },
    {
      num: '2',
      title: 'Design',
      desc: 'Create architecture, UI/UX and technical plan.'
    },
    {
      num: '3',
      numBadge: '3',
      title: 'Build',
      desc: 'Develop, integrate and keep you updated at every stage.'
    },
    {
      num: '4',
      title: 'Test & Deliver',
      desc: 'Ensure quality, security and smooth deployment.'
    }
  ];

  const teamMembers = [
    {
      name: 'Abuzar Munshi',
      role: 'Lead Blockchain Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Rizwana Khan',
      role: 'Senior Smart Contract Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Tufail Ahmed',
      role: 'Full-Stack Web3 Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const recentProjects = [
    {
      title: 'Smart Contract Development',
      desc: 'Custom smart contract system for business logic and automation.',
      image: '/images/case_study_defi.jpg',
      link: '/case-studies/defi-lending-platform'
    },
    {
      title: 'dApp Development',
      desc: 'Decentralized application with modern UI and wallet integration.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
      link: '/case-studies'
    },
    {
      title: 'Blockchain Web3 Integrations',
      desc: 'Integration with a public blockchain network for data verification.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      link: '/case-studies'
    },
    {
      title: 'Infrastructure Setup',
      desc: 'Node setup and blockchain infrastructure for reliable operations.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      link: '/case-studies'
    }
  ];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div>
              <div className="hero-eyebrow">
                <span className="hero-tag-text">
                  WEB3 ENGINEERING • BLOCKCHAIN SOLUTIONS
                </span>
              </div>
              <h1 className="hero-title">
                Build What’s Next<br />
                on the <span className="hero-title-accent">Blockchain.</span>
              </h1>
              <p className="hero-subtitle">
                We build custom smart contracts, dApps, wallet integrations and blockchain infrastructure 
                for startups and businesses across industries.
              </p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={onOpenModal} id="hero-discuss-btn">
                  Discuss Your Project <ArrowRight size={17} />
                </button>
                <Link to="/services" className="hero-secondary-link" onClick={() => window.scrollTo({top:0})} id="hero-explore-link">
                  Explore Services <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div style={{ position: 'relative' }}>
              <div className="hero-image-wrapper">
                <img
                  src="/images/hero_laptop.jpg"
                  alt="ZarWebCoders Web3 Development Laptop"
                  className="hero-image"
                />
              </div>

              {/* Floating Solidity Code Snippet Card matching wireframe */}
              <div className="floating-code-card">
                <div className="code-header">contract Sample {'{'}</div>
                <div className="code-line">function hello() public pure</div>
                <div className="code-line indent">returns (string memory) {'{'}</div>
                <div className="code-line indent-2">return "Web3";</div>
                <div className="code-line indent">{'}'}</div>
                <div className="code-header">{'}'}</div>
              </div>

              {/* Floating tags */}
              <div className="hero-floating-cube-badge badge-top-left">
                <div className="cube-dot"></div>
                <span>Smart Contracts</span>
              </div>
              <div className="hero-floating-cube-badge badge-bottom-right">
                <div className="cube-dot"></div>
                <span>Wallet Integration</span>
              </div>
            </div>
          </div>

          {/* Integrated Tech Bar (Bottom of Hero) */}
          <div className="hero-tech-strip">
            <div className="tech-strip-label">Technologies We Work With</div>
            <div className="tech-strip-items">
              <div className="tech-strip-item">
                <Code2 size={16} color="#1a7aff" />
                <span>Solidity</span>
              </div>
              <div className="tech-strip-item">
                <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1.5L4.5 13.5L12 18L19.5 13.5L12 1.5ZM12 19.5L4.5 15L12 22.5L19.5 15L12 19.5Z"/>
                </svg>
                <span>Ethereum</span>
              </div>
              <div className="tech-strip-item">
                <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>Polygon</span>
              </div>
              <div className="tech-strip-item">
                <Cpu size={16} color="#1a7aff" />
                <span>EVM</span>
              </div>
              <div className="tech-strip-item">
                <Globe size={16} color="#1a7aff" />
                <span>Web3.js</span>
              </div>
              <div className="tech-strip-item">
                <Box size={16} color="#1a7aff" />
                <span>IPFS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: OUR EXPERTISE
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Top Split Layout */}
          <div className="home-expertise-split">
            <div className="home-expertise-content">
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '14px' }}>
                OUR EXPERTISE
              </div>
              <h2 className="section-title" style={{ fontSize: '2.5rem', lineHeight: '1.18', marginBottom: '20px' }}>
                Engineering for Real-World<br />Web3 Products
              </h2>
              <p className="section-desc" style={{ marginBottom: '32px', maxWidth: '500px' }}>
                We turn ideas into secure, scalable and user-friendly blockchain applications. 
                From smart contract development to full-stack dApps, we help you build solutions that create real value.
              </p>
              <Link to="/services" className="btn-expertise-outline" onClick={() => window.scrollTo({top:0})}>
                Our Services <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Developer Image with Floating Badges */}
            <div className="home-expertise-image-wrap">
              <div className="home-expertise-img-card">
                <img
                  src="/images/developer_workstation.jpg"
                  alt="ZarWebCoders Web3 Engineer Workstation"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Floating Badges matching wireframe */}
              <div className="hero-floating-cube-badge badge-expertise-1">
                <div className="cube-dot"></div>
                <span>Smart Contracts</span>
              </div>
              <div className="hero-floating-cube-badge badge-expertise-2">
                <div className="cube-dot"></div>
                <span>dApp Development</span>
              </div>
              <div className="hero-floating-cube-badge badge-expertise-3">
                <div className="cube-dot"></div>
                <span>Wallet Integration</span>
              </div>
            </div>
          </div>

          {/* 3 Subcards Strip Below (Directly matching wireframe) */}
          <div className="expertise-subcards-wrapper">
            <div className="grid-3" style={{ gap: '28px' }}>
              <div className="expertise-subcard">
                <div className="expertise-subcard-icon">
                  <Code2 size={22} />
                </div>
                <div>
                  <h3 className="expertise-subcard-title">Smart Contract Engineering</h3>
                  <p className="expertise-subcard-desc">Secure and efficient smart contracts for your Web3 applications.</p>
                </div>
              </div>

              <div className="expertise-subcard">
                <div className="expertise-subcard-icon">
                  <Box size={22} />
                </div>
                <div>
                  <h3 className="expertise-subcard-title">Full-Stack dApps</h3>
                  <p className="expertise-subcard-desc">Modern, scalable and user-friendly decentralized applications.</p>
                </div>
              </div>

              <div className="expertise-subcard">
                <div className="expertise-subcard-icon">
                  <Link2 size={22} />
                </div>
                <div>
                  <h3 className="expertise-subcard-title">Blockchain Integrations</h3>
                  <p className="expertise-subcard-desc">Seamless integration with leading blockchain networks and ecosystems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: BUILT FOR CLARITY. DESIGNED FOR SCALE.
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="home-clarity-split">
            {/* Left Team Photo */}
            <div className="home-clarity-image-wrap">
              <img
                src="/images/team_working.jpg"
                alt="ZarWebCoders Developers Collaborating"
                className="home-clarity-img"
              />
            </div>

            {/* Right Accordion / List */}
            <div className="home-clarity-content">
              <h2 className="section-title" style={{ fontSize: '2.4rem', lineHeight: '1.2', marginBottom: '16px' }}>
                Built for Clarity. Designed for Scale.
              </h2>
              <p className="section-desc" style={{ marginBottom: '32px' }}>
                We follow a transparent, structured process to ensure your project is delivered on time, 
                with clean code and long-term support.
              </p>

              <div className="clarity-list">
                {clarityItems.map((item, idx) => {
                  const isOpen = expandedClarity === idx;
                  return (
                    <div 
                      key={idx} 
                      className="clarity-item"
                      style={{ 
                        flexDirection: 'column', 
                        alignItems: 'stretch',
                        borderColor: isOpen ? 'rgba(26,122,255,0.4)' : '#e8edf5',
                        background: isOpen ? '#f8faff' : '#ffffff'
                      }}
                      onClick={() => setExpandedClarity(isOpen ? null : idx)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div className="clarity-item-left">
                          <div className="clarity-item-icon">
                            {item.icon}
                          </div>
                          <div className="clarity-item-title">{item.title}</div>
                        </div>
                        <div className="clarity-item-arrow">
                          <ArrowRight 
                            size={18} 
                            style={{ 
                              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                              transition: 'transform 0.25s ease',
                              color: isOpen ? '#1a7aff' : '#94a3b8'
                            }} 
                          />
                        </div>
                      </div>
                      {isOpen && (
                        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #edf2f7', fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6' }} className="fade-in">
                          {item.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: OUR SERVICES - WHAT WE BUILD
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header-split">
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                OUR SERVICES
              </div>
              <h2 className="section-title" style={{ margin: 0, fontSize: '2.4rem' }}>
                What We Build
              </h2>
            </div>
            <p className="section-header-split-desc">
              From smart contracts to complete Web3 infrastructure, we build the core technology that powers your vision.
            </p>
          </div>

          <div className="grid-4">
            {whatWeBuildCards.map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link} 
                className="card" 
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
                onClick={() => window.scrollTo({top:0})}
              >
                <div className="card-icon" style={{ marginBottom: '18px' }}>
                  {card.icon}
                </div>
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>{card.title}</h3>
                <p className="card-desc" style={{ flex: 1, minHeight: '64px' }}>{card.desc}</p>
                <div>
                  <div className="circle-arrow-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: OUR PROCESS - PROJECT PROCESS
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header-split">
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                OUR PROCESS
              </div>
              <h2 className="section-title" style={{ margin: 0, fontSize: '2.4rem' }}>
                Project Process
              </h2>
            </div>
            <p className="section-header-split-desc">
              A clear and collaborative process to turn your idea into a secure and scalable Web3 product.
            </p>
          </div>

          {/* Connected Step Row */}
          <div className="process-connected-row">
            {processSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="process-step-box">
                  <div className="process-step-num-circle">
                    {step.num}
                  </div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="process-arrow-divider">
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: OUR TEAM - SKILLED PEOPLE. REAL EXPERIENCE.
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header-split">
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                OUR TEAM
              </div>
              <h2 className="section-title" style={{ margin: 0, fontSize: '2.4rem', lineHeight: '1.2' }}>
                Skilled People.<br />Real Experience.
              </h2>
            </div>
            <p className="section-header-split-desc">
              A focused team of developers, blockchain engineers and designers working together to build reliable Web3 solutions.
            </p>
          </div>

          {/* 3 Portrait Photo Cards in a row matching wireframe */}
          <div className="team-portraits-row">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-portrait-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-portrait-img"
                />
                <div className="team-portrait-info">
                  <div className="team-portrait-name">{member.name}</div>
                  <div className="team-portrait-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7: CASE STUDIES - RECENT PROJECTS
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="section-header-split">
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                CASE STUDIES
              </div>
              <h2 className="section-title" style={{ margin: 0, fontSize: '2.4rem' }}>
                Recent Projects
              </h2>
            </div>
            <p className="section-header-split-desc">
              A few examples of how we’ve helped businesses build custom blockchain and Web3 solutions.
            </p>
          </div>

          {/* 4 Cards in a row matching wireframe */}
          <div className="grid-4">
            {recentProjects.map((project, idx) => (
              <Link 
                key={idx} 
                to={project.link} 
                className="case-study-compact-card"
                onClick={() => window.scrollTo({top:0})}
              >
                <div className="case-study-compact-img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="case-study-compact-img"
                  />
                </div>
                <h3 className="case-study-compact-title">{project.title}</h3>
                <p className="case-study-compact-desc">{project.desc}</p>
                <div>
                  <div className="circle-arrow-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
