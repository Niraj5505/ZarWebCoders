import React from 'react';
import { 
  Shield, Layers, Cpu, Code2, Users, ArrowRight, Zap, Target, 
  HeartHandshake, Sparkles, Calendar, Rocket, Clock, Briefcase, 
  Lightbulb, ShieldCheck, CheckCircle2
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../components/SocialIcons';

export default function AboutView({ onOpenModal }) {
  const teamMembersList = [
    {
      name: 'Abuzar Munshi',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tufail Ahmed',
      role: 'Blockchain Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Rizwana Khan',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sameer Shaikh',
      role: 'Smart Contract Developer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: ABOUT HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-section" style={{ paddingBottom: '70px' }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div className="hero-eyebrow">
                <span className="hero-tag-text">ABOUT US</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: '3.2rem', lineHeight: '1.16', marginBottom: '18px' }}>
                Turning Ideas into<br />
                <span className="hero-title-accent">Decentralized Solutions</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.02rem', marginBottom: '24px', maxWidth: '520px' }}>
                ZarWebCoders is a Web3 development agency helping businesses, startups, and enterprises build secure, scalable, and innovative blockchain solutions.
              </p>

              {/* 4 Feature Pills in a Row */}
              <div className="about-hero-pills">
                <div className="about-hero-pill-item">
                  <div className="about-hero-pill-icon">
                    <Shield size={16} />
                  </div>
                  <div>
                    <div className="about-hero-pill-title">Smart Contracts</div>
                    <div className="about-hero-pill-sub">Secure &amp; Reliable</div>
                  </div>
                </div>

                <div className="about-hero-pill-item">
                  <div className="about-hero-pill-icon">
                    <Layers size={16} />
                  </div>
                  <div>
                    <div className="about-hero-pill-title">dApp Development</div>
                    <div className="about-hero-pill-sub">User-Centric</div>
                  </div>
                </div>

                <div className="about-hero-pill-item">
                  <div className="about-hero-pill-icon">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <div className="about-hero-pill-title">Blockchain Integration</div>
                    <div className="about-hero-pill-sub">Seamless &amp; Scalable</div>
                  </div>
                </div>

                <div className="about-hero-pill-item">
                  <div className="about-hero-pill-icon">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <div className="about-hero-pill-title">Technical Consulting</div>
                    <div className="about-hero-pill-sub">Strategy &amp; Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic */}
            <div style={{ position: 'relative' }}>
              <div className="hero-image-wrapper">
                <img
                  src="/images/developer_workstation.jpg"
                  alt="ZarWebCoders Developers at Workstation"
                  className="hero-image"
                />
              </div>

              {/* Floating Pill Tag */}
              <div className="hero-floating-cube-badge badge-top-right">
                <div className="cube-dot"></div>
                <span>Code • Build • Decentralize</span>
              </div>

              {/* Floating 3D Glowing Cube Accent */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  left: '-15px',
                  width: '74px',
                  height: '74px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(26,122,255,0.85) 0%, rgba(0,212,255,0.85) 100%)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 30px rgba(0,212,255,0.4)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  animation: 'floatA 3.8s ease-in-out infinite alternate'
                }}
              >
                <Layers size={32} color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: OUR STORY
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="our-story-grid">
            {/* Col 1: Text */}
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '12px' }}>
                OUR STORY
              </div>
              <h2 className="section-title" style={{ fontSize: '2.3rem', lineHeight: '1.2', marginBottom: '20px' }}>
                From a Vision to<br />a Web3 Development Partner
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
                ZarWebCoders started with a simple belief — blockchain technology can make the internet more open, transparent and fair. What began as a small team of passionate developers has grown into a trusted Web3 engineering partner for clients across India and beyond.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '28px' }}>
                We combine deep technical expertise with a product-driven mindset to turn your Web3 ideas into secure, high-performance applications.
              </p>
              <button className="btn-primary" onClick={onOpenModal}>
                Let's Build Together <ArrowRight size={16} />
              </button>
            </div>

            {/* Col 2: Center Image */}
            <div className="story-image-container">
              <img
                src="/images/team_working.jpg"
                alt="Better Technology Brighter Future"
                className="story-image"
              />
              <div className="story-image-overlay">
                <div className="story-overlay-text">
                  Better<br />
                  Technology<br />
                  Brighter<br />
                  Future
                </div>
              </div>
            </div>

            {/* Col 3: Right Milestone Cards */}
            <div className="story-milestones-stack">
              <div className="milestone-card">
                <div className="milestone-icon">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="milestone-number">2021</div>
                  <p className="milestone-desc">Founded with a mission to build the decentralized future.</p>
                </div>
              </div>

              <div className="milestone-card">
                <div className="milestone-icon">
                  <Rocket size={20} />
                </div>
                <div>
                  <div className="milestone-number">50+</div>
                  <p className="milestone-desc">Successful projects delivered.</p>
                </div>
              </div>

              <div className="milestone-card">
                <div className="milestone-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="milestone-number">100%</div>
                  <p className="milestone-desc">Client-focused approach and long-term partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: WHY CHOOSE US
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '20px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="why-choose-box">
            {/* Left Header */}
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '12px' }}>
                WHY CHOOSE US
              </div>
              <h2 className="section-title" style={{ fontSize: '2.3rem', lineHeight: '1.2', marginBottom: '18px' }}>
                What Makes<br />ZarWebCoders Different?
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: '1.7' }}>
                We're not just coders. We're problem solvers, innovators, and long-term partners. Our team brings a unique blend of blockchain expertise, modern development practices, and a commitment to your success.
              </p>
            </div>

            {/* Right Features 3x2 Grid */}
            <div className="why-choose-features-grid">
              <div className="why-choose-feature-item">
                <div className="why-choose-feature-icon">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="why-choose-feature-title">Expert Team</h4>
                  <p className="why-choose-feature-desc">Skilled in Solidity, Rust, React, Node.js and more.</p>
                </div>
              </div>

              <div className="why-choose-feature-item">
                <div className="why-choose-feature-icon">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="why-choose-feature-title">Security First</h4>
                  <p className="why-choose-feature-desc">Best practices and optional third-party audits.</p>
                </div>
              </div>

              <div className="why-choose-feature-item">
                <div className="why-choose-feature-icon">
                  <Rocket size={18} />
                </div>
                <div>
                  <h4 className="why-choose-feature-title">Transparent Process</h4>
                  <p className="why-choose-feature-desc">Clear communication, regular updates.</p>
                </div>
              </div>

              <div className="why-choose-feature-item">
                <div className="why-choose-feature-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="why-choose-feature-title">On-Time Delivery</h4>
                  <p className="why-choose-feature-desc">We respect your time and milestones.</p>
                </div>
              </div>

              <div className="why-choose-feature-item">
                <div className="why-choose-feature-icon">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h4 className="why-choose-feature-title">Flexible Engagements</h4>
                  <p className="why-choose-feature-desc">From MVPs to full-scale product development.</p>
                </div>
              </div>

              <div className="why-choose-feature-item">
                <div className="why-choose-feature-icon">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <h4 className="why-choose-feature-title">Long-Term Support</h4>
                  <p className="why-choose-feature-desc">We're here beyond deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: OUR TEAM
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '20px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="about-team-split-layout">
            <div>
              <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#1a7aff', marginBottom: '10px' }}>
                OUR TEAM
              </div>
              <h2 className="section-title" style={{ fontSize: '2.3rem', lineHeight: '1.2', margin: '0 0 14px 0' }}>
                Meet the People<br />Behind ZarWebCoders
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '24px' }}>
                A diverse team of developers, designers and blockchain experts working together to build the future of Web3.
              </p>
              <button className="btn-expertise-outline" onClick={onOpenModal}>
                Join Our Team <ArrowRight size={15} />
              </button>
            </div>

            {/* 4 Team Cards Grid */}
            <div className="grid-4" style={{ gap: '20px' }}>
              {teamMembersList.map((member, i) => (
                <div key={i} className="team-card" style={{ padding: '24px 18px', textAlign: 'center' }}>
                  <div className="team-avatar-wrapper" style={{ width: '96px', height: '96px', margin: '0 auto 16px' }}>
                    <img src={member.image} alt={member.name} className="team-avatar" />
                  </div>
                  <h3 className="team-name" style={{ fontSize: '1.05rem', marginBottom: '4px' }}>{member.name}</h3>
                  <div className="team-role" style={{ fontSize: '0.82rem', marginBottom: '14px', color: '#64748b' }}>{member.role}</div>
                  <div className="social-links" style={{ justifyContent: 'center', gap: '8px' }}>
                    <a href="#" className="social-link" title="LinkedIn"><LinkedinIcon size={14} /></a>
                    <a href="#" className="social-link" title="Twitter"><TwitterIcon size={14} /></a>
                    <a href="#" className="social-link" title="GitHub"><GithubIcon size={14} /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: OUR VALUES
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '20px', paddingBottom: '90px' }}>
        <div className="container">
          <div className="values-container-box">
            {/* Left Dark Card with Isometric Cubes */}
            <div className="values-left-dark">
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: '700', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#00d4ff', marginBottom: '14px' }}>
                  OUR VALUES
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif', color: '#ffffff', lineHeight: '1.2', marginBottom: '18px' }}>
                  Principles That<br />Guide Us
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '32px', maxWidth: '420px' }}>
                  Our work is driven by a set of core values that help us build better products, stronger partnerships and a more open Web3 ecosystem.
                </p>
                <button 
                  className="btn-secondary" 
                  onClick={onOpenModal}
                  style={{ color: '#00d4ff', borderColor: 'rgba(0,212,255,0.4)', background: 'rgba(0,212,255,0.06)' }}
                >
                  Our Values <ArrowRight size={16} />
                </button>
              </div>

              {/* 3D Glowing Blockchain Cubes Decoration */}
              <div style={{ marginTop: '40px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #1a7aff, #00d4ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,212,255,0.5)' }}>
                    <Layers size={22} color="#ffffff" />
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(26,122,255,0.4)', border: '1px solid rgba(0,212,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Zap size={16} color="#00d4ff" />
                  </div>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(0,212,255,0.2)', border: '1px solid rgba(0,212,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shield size={12} color="#00d4ff" />
                  </div>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#6d7fa0', letterSpacing: '0.5px' }}>Decentralized Core Principles</span>
              </div>
            </div>

            {/* Right Light 2x2 Grid */}
            <div className="values-right-light">
              <div className="values-cards-grid">
                <div className="value-card-item">
                  <div className="value-card-icon">
                    <Lightbulb size={22} />
                  </div>
                  <div>
                    <h4 className="value-card-title">Innovation</h4>
                    <p className="value-card-desc">We embrace new ideas and technologies to stay ahead.</p>
                  </div>
                </div>

                <div className="value-card-item">
                  <div className="value-card-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="value-card-title">Integrity</h4>
                    <p className="value-card-desc">We build trust through honesty and transparency.</p>
                  </div>
                </div>

                <div className="value-card-item">
                  <div className="value-card-icon">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="value-card-title">Collaboration</h4>
                    <p className="value-card-desc">Great results come from strong partnerships.</p>
                  </div>
                </div>

                <div className="value-card-item">
                  <div className="value-card-icon">
                    <Target size={22} />
                  </div>
                  <div>
                    <h4 className="value-card-title">Impact</h4>
                    <p className="value-card-desc">We're focused on creating real value for our clients and the Web3 community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
