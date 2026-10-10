import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, InstagramIcon, FacebookIcon } from './SocialIcons';
import { brand } from '../data/websiteData';

export default function Footer({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="footer" style={{ background: '#05091a', borderTop: '1px solid #1a2540', color: '#94a3b8' }}>
      <div className="container">
        {/* Top bar with CTA motto */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '32px', marginBottom: '36px', borderBottom: '1px solid #1a2540', flexWrap: 'wrap', gap: '20px' }}>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/images/logo_zarwebcoders_white.png" 
              alt="ZarWebCoders - INFINITE SOLUTION. ENDLESS INNOVATION." 
              style={{ height: '44px', width: 'auto', display: 'block' }}
            />
          </Link>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.92rem', color: '#94a3b8', fontStyle: 'italic' }}>
              Let's build your
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginTop: '2px' }}>
              Web3 product together.
            </div>
            <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, #1a7aff, #00d4ff)', marginLeft: 'auto', marginTop: '6px', borderRadius: '2px' }}></div>
          </div>
        </div>

        <div className="footer-grid">
          {/* Col 1 */}
          <div>
            <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#ffffff', marginBottom: '6px', fontFamily: 'Outfit, sans-serif' }}>
              ZarWebCoders
            </div>
            <div style={{ fontSize: '0.82rem', color: '#00d4ff', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '14px' }}>
              Web3 Development Agency
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.65', marginBottom: '20px', color: '#6d7fa0' }}>
              We build custom smart contracts, dApps, and blockchain infrastructure designed for high security and scale.
            </p>
            <div className="social-links" style={{ justifyContent: 'flex-start', gap: '10px' }}>
              <a href={brand.socials?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn" style={{ background: '#0c1225', borderColor: '#1a2540', color: '#94a3b8' }}><LinkedinIcon size={15} /></a>
              <a href={brand.socials?.twitter || "https://x.com/zarwebcoders"} target="_blank" rel="noopener noreferrer" className="social-link" title="X / Twitter" style={{ background: '#0c1225', borderColor: '#1a2540', color: '#94a3b8' }}><TwitterIcon size={15} /></a>
              <a href={brand.socials?.instagram || "https://www.instagram.com/zarwebcoders/"} target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram" style={{ background: '#0c1225', borderColor: '#1a2540', color: '#94a3b8' }}><InstagramIcon size={15} /></a>
              <a href={brand.socials?.facebook || "https://www.facebook.com/Zarwebcoders/"} target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook" style={{ background: '#0c1225', borderColor: '#1a2540', color: '#94a3b8' }}><FacebookIcon size={15} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-title" style={{ color: '#ffffff', fontSize: '0.95rem' }}>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Home</Link></li>
              <li><Link to="/services" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Services</Link></li>
              <li><Link to="/case-studies" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Case Studies</Link></li>
              <li><Link to="/about" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>About</Link></li>
              <li><Link to="/blog" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Blog</Link></li>
              <li><Link to="/contact" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="footer-title" style={{ color: '#ffffff', fontSize: '0.95rem' }}>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/smart-contract-development" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Smart Contracts</Link></li>
              <li><Link to="/services" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>dApp Development</Link></li>
              <li><Link to="/services" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Wallet Integrations</Link></li>
              <li><Link to="/services" className="footer-link" style={{ color: '#94a3b8' }} onClick={() => window.scrollTo({top:0})}>Blockchain Infrastructure</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="footer-title" style={{ color: '#ffffff', fontSize: '0.95rem' }}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#94a3b8', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#00d4ff" /> {brand.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#00d4ff" /> {brand.phone}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="#00d4ff" /> {brand.office}
              </div>
            </div>

            <button 
              className="btn-primary" 
              onClick={onOpenModal}
              style={{ 
                padding: '10px 22px', 
                fontSize: '0.86rem', 
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #1a7aff, #0058d4)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Discuss a Project <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid #1a2540', marginTop: '48px', paddingTop: '24px', color: '#6d7fa0', fontSize: '0.84rem' }}>
          <div>© 2026 ZarWebCoders. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/contact" className="footer-link" style={{ color: '#6d7fa0' }}>Privacy Policy</Link>
            <span style={{ color: '#1a2540' }}>|</span>
            <Link to="/contact" className="footer-link" style={{ color: '#6d7fa0' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
