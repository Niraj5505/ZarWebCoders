import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { brand } from '../data/websiteData';

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Brand Logo - Official ZarWebCoders Image */}
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

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button className="btn-navbar" onClick={onOpenModal}>
            Discuss a Project <ArrowRight size={16} />
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#0d1526', 
              padding: '8px', 
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: isActive(item.path) ? '700' : '500',
                    color: isActive(item.path) ? 'var(--primary-blue)' : '#334155',
                    width: '100%',
                    textAlign: 'left',
                    background: isActive(item.path) ? 'rgba(26,122,255,0.08)' : 'none',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onClick={() => handleNavClick(item.path)}
                >
                  <span>{item.label}</span>
                  {isActive(item.path) && <ArrowRight size={14} color="var(--primary-blue)" />}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e8edf5' }}>
            <button 
              className="btn-hero-primary" 
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
            >
              Discuss a Project <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
