import React, { useState } from 'react';
import { 
  X, Home, Box, FileText, Users, BookOpen, Mail, ChevronRight, ChevronUp, 
  ArrowRight, Headphones, Code2, LayoutGrid, Link2, Layers, ShieldCheck, 
  Lightbulb, Coins 
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon, YoutubeIcon, TelegramIcon, FacebookIcon, InstagramIcon } from './SocialIcons';

export default function PhoneMenuDrawer({ 
  onClose, 
  onSelectScreen, 
  servicesExpandedDefault = false, 
  showConsultationCard = true,
  onOpenModal 
}) {
  const [servicesExpanded, setServicesExpanded] = useState(servicesExpandedDefault);

  const subServices = [
    { title: 'Smart Contract Development', icon: <Code2 size={16} /> },
    { title: 'dApp Development', icon: <LayoutGrid size={16} /> },
    { title: 'Blockchain Integration', icon: <Link2 size={16} /> },
    { title: 'Web3 Infrastructure', icon: <Layers size={16} /> },
    { title: 'Security & Auditing', icon: <ShieldCheck size={16} /> },
    { title: 'Consulting & Strategy', icon: <Lightbulb size={16} /> },
    { title: 'Token Engineering', icon: <Coins size={16} /> }
  ];

  return (
    <div className="phone-light-drawer" style={{ minHeight: '100%', height: '100%' }}>
      {/* 1. Header with Close Button */}
      <div className="phone-light-header">
        <div className="phone-light-logo">
          <img 
            src="/images/logo_zarwebcoders_transparent.png" 
            alt="ZarWebCoders Logo" 
            style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
          />
          <div>
            <div className="phone-light-logo-text">ZarWebCoders</div>
            <div className="phone-light-logo-sub">Web3 Development Agency</div>
          </div>
        </div>

        <button 
          className="phone-light-close-btn" 
          onClick={onClose}
          aria-label="Close Menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* 2. Nav Menu Items */}
      <div className="phone-menu-items-list">
        {/* Home */}
        <button 
          className="phone-nav-row-btn active"
          onClick={() => { onSelectScreen('home'); onClose(); }}
        >
          <div className="phone-nav-row-left">
            <span className="phone-nav-icon"><Home size={18} /></span>
            <span>Home</span>
          </div>
          <ChevronRight size={17} className="phone-nav-chevron" />
        </button>

        {/* Services (Expandable) */}
        {servicesExpanded ? (
          <div className="phone-services-expanded-card">
            <button 
              className="phone-nav-row-btn"
              onClick={() => setServicesExpanded(false)}
            >
              <div className="phone-nav-row-left">
                <span className="phone-nav-icon"><Box size={18} /></span>
                <span>Services</span>
              </div>
              <ChevronUp size={17} className="phone-nav-chevron" />
            </button>

            <div className="phone-submenu-block">
              {subServices.map((sub, idx) => (
                <button
                  key={idx}
                  className="phone-subitem-btn"
                  onClick={() => {
                    onSelectScreen('service-detail');
                    onClose();
                  }}
                >
                  <span className="phone-subitem-icon">{sub.icon}</span>
                  <span>{sub.title}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button 
            className="phone-nav-row-btn"
            onClick={() => setServicesExpanded(true)}
          >
            <div className="phone-nav-row-left">
              <span className="phone-nav-icon"><Box size={18} /></span>
              <span>Services</span>
            </div>
            <ChevronRight size={17} className="phone-nav-chevron" />
          </button>
        )}

        {/* Case Studies */}
        <button 
          className="phone-nav-row-btn"
          onClick={() => { onSelectScreen('service-detail'); onClose(); }}
        >
          <div className="phone-nav-row-left">
            <span className="phone-nav-icon"><FileText size={18} /></span>
            <span>Case Studies</span>
          </div>
          <ChevronRight size={17} className="phone-nav-chevron" />
        </button>

        {/* About */}
        <button 
          className="phone-nav-row-btn"
          onClick={() => { onSelectScreen('home'); onClose(); }}
        >
          <div className="phone-nav-row-left">
            <span className="phone-nav-icon"><Users size={18} /></span>
            <span>About</span>
          </div>
          <ChevronRight size={17} className="phone-nav-chevron" />
        </button>

        {/* Blog */}
        <button 
          className="phone-nav-row-btn"
          onClick={() => { onSelectScreen('home'); onClose(); }}
        >
          <div className="phone-nav-row-left">
            <span className="phone-nav-icon"><BookOpen size={18} /></span>
            <span>Blog</span>
          </div>
          <ChevronRight size={17} className="phone-nav-chevron" />
        </button>

        {/* Contact */}
        <button 
          className="phone-nav-row-btn"
          onClick={() => { onSelectScreen('contact'); onClose(); }}
        >
          <div className="phone-nav-row-left">
            <span className="phone-nav-icon"><Mail size={18} /></span>
            <span>Contact</span>
          </div>
          <ChevronRight size={17} className="phone-nav-chevron" />
        </button>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
        {/* 3. Screen 5: Consultation Highlight Card */}
        {showConsultationCard && (
          <div 
            className="phone-light-consultation-card"
            onClick={() => { onClose(); onOpenModal(); }}
          >
            <div className="phone-light-consultation-icon">
              <Headphones size={20} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="phone-light-consultation-title">Have a Project in Mind?</div>
              <div className="phone-light-consultation-desc">Get a free consultation from our Web3 experts.</div>
            </div>
            <div className="phone-light-consultation-arrow">
              <ArrowRight size={15} />
            </div>
          </div>
        )}

        {/* 4. Discuss a Project CTA Button */}
        <button className="phone-drawer-cta-btn" onClick={() => { onClose(); onOpenModal(); }}>
          Discuss a Project <ArrowRight size={16} />
        </button>

        {/* 5. Follow Us Section */}
        <div className="phone-follow-us-box">
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '12px' }}>
            Follow Us
          </div>
          <div className="phone-social-icons-row">
            <a href="https://x.com/zarwebcoders" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="X Twitter">
              <TwitterIcon size={14} />
            </a>
            <a href="https://www.facebook.com/Zarwebcoders/" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="Facebook">
              <FacebookIcon size={15} />
            </a>
            <a href="https://www.instagram.com/zarwebcoders/" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="Instagram">
              <InstagramIcon size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="LinkedIn">
              <LinkedinIcon size={15} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="GitHub">
              <GithubIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
