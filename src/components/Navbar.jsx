import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Menu, X, Home, Box, FileText, Users, BookOpen, Mail, 
  ChevronRight, ChevronUp, Headphones, Code2, LayoutGrid, Link2, 
  Layers, ShieldCheck, Lightbulb, Coins 
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon, YoutubeIcon, TelegramIcon } from './SocialIcons';

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll detection for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure side menu is closed when on desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/services', label: 'Services', icon: <Box size={18} />, isDropdown: true },
    { path: '/case-studies', label: 'Case Studies', icon: <FileText size={18} /> },
    { path: '/about', label: 'About', icon: <Users size={18} /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  const subServices = [
    { path: '/services/smart-contract-development', title: 'Smart Contract Development', icon: <Code2 size={16} /> },
    { path: '/services', title: 'dApp Development', icon: <LayoutGrid size={16} /> },
    { path: '/services', title: 'Blockchain Integration', icon: <Link2 size={16} /> },
    { path: '/services', title: 'Web3 Infrastructure', icon: <Layers size={16} /> },
    { path: '/services', title: 'Security & Auditing', icon: <ShieldCheck size={16} /> },
    { path: '/services', title: 'Consulting & Strategy', icon: <Lightbulb size={16} /> },
    { path: '/services', title: 'Token Engineering', icon: <Coins size={16} /> }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="logo" style={{ textDecoration: 'none' }}>
            <img 
              src="/images/logo_zarwebcoders_transparent.png" 
              alt="ZarWebCoders - INFINITE SOLUTION. ENDLESS INNOVATION." 
              style={{ height: '46px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right CTA Button & Mobile Hamburger Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="btn-navbar" onClick={onOpenModal}>
              Discuss a Project <ArrowRight size={16} />
            </button>
            
            <button 
              className="mobile-toggle phone-menu-trigger-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Responsive Fullscreen Dark Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="mobile-drawer-sheet phone-light-drawer"
            onClick={(e) => e.stopPropagation()}
          >
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
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            {/* 2. Navigation Items List */}
            <div className="phone-menu-items-list">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  return servicesExpanded ? (
                    <div className="phone-services-expanded-card" key={item.path}>
                      <button 
                        className="phone-nav-row-btn"
                        onClick={() => setServicesExpanded(false)}
                      >
                        <div className="phone-nav-row-left">
                          <span className="phone-nav-icon">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <ChevronUp size={17} className="phone-nav-chevron" />
                      </button>

                      <div className="phone-submenu-block">
                        {subServices.map((sub, idx) => (
                          <button
                            key={idx}
                            className="phone-subitem-btn"
                            onClick={() => handleNavClick(sub.path)}
                          >
                            <span className="phone-subitem-icon">{sub.icon}</span>
                            <span>{sub.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div key={item.path}>
                      <button 
                        className={`phone-nav-row-btn ${isActive(item.path) ? 'active' : ''}`}
                        onClick={() => setServicesExpanded(true)}
                      >
                        <div className="phone-nav-row-left">
                          <span className="phone-nav-icon">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight size={17} className="phone-nav-chevron" />
                      </button>
                    </div>
                  );
                }

                return (
                  <button 
                    key={item.path}
                    className={`phone-nav-row-btn ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.path)}
                  >
                    <div className="phone-nav-row-left">
                      <span className="phone-nav-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight size={17} className="phone-nav-chevron" />
                  </button>
                );
              })}
            </div>

            {/* 3. Bottom Consultation Callout & Actions */}
            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              {/* Consultation Highlight Card */}
              <div 
                className="phone-light-consultation-card"
                onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
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

              {/* Discuss a Project Full Width Pill Button */}
              <button 
                className="phone-drawer-cta-btn" 
                onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              >
                Discuss a Project <ArrowRight size={16} />
              </button>

              {/* Follow Us Social Icons */}
              <div className="phone-follow-us-box">
                <div className="phone-follow-us-title">Follow Us</div>
                <div className="phone-social-icons-row">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="LinkedIn">
                    <LinkedinIcon size={15} />
                  </a>
                  <a href="https://x.com/zarwebcoders" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="X Twitter">
                    <TwitterIcon size={14} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="GitHub">
                    <GithubIcon size={15} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="YouTube">
                    <YoutubeIcon size={15} />
                  </a>
                  <a href="https://telegram.org" target="_blank" rel="noreferrer" className="phone-social-circle-btn" aria-label="Telegram">
                    <TelegramIcon size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
