import React from 'react';
import { ArrowLeft, X, Mail, Phone, MapPin, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon, YoutubeIcon, TelegramIcon, FacebookIcon, InstagramIcon } from './SocialIcons';

export default function PhoneContactView({ onBack, onClose, onOpenModal }) {
  return (
    <div className="phone-light-contact-screen" style={{ minHeight: '100%', height: '100%' }}>
      {/* 1. Top Bar */}
      <div className="phone-light-top-bar">
        <button className="phone-light-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Contact</span>
        </button>

        <button className="phone-light-close-btn" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
      </div>

      {/* 2. Three Contact Info Cards */}
      <div className="phone-light-contact-cards-stack">
        {/* Email */}
        <a href="mailto:info@zarwebcoders.in" className="phone-light-contact-card" style={{ textDecoration: 'none' }}>
          <div className="phone-light-contact-icon">
            <Mail size={19} />
          </div>
          <div>
            <div className="phone-light-contact-title">info@zarwebcoders.in</div>
            <div className="phone-light-contact-desc">We typically respond within 24 hours.</div>
          </div>
        </a>

        {/* Phone */}
        <a href="tel:+919876543210" className="phone-light-contact-card" style={{ textDecoration: 'none' }}>
          <div className="phone-light-contact-icon">
            <Phone size={19} />
          </div>
          <div>
            <div className="phone-light-contact-title">+91 98765 43210</div>
            <div className="phone-light-contact-desc">Mon - Sat, 9:00 AM - 7:00 PM (IST)</div>
          </div>
        </a>

        {/* Location */}
        <div className="phone-light-contact-card">
          <div className="phone-light-contact-icon">
            <MapPin size={19} />
          </div>
          <div>
            <div className="phone-light-contact-title">909-910, A Block, Signature 2, Sanand Circle, Sarkhej, Ahmedabad-382210</div>
            <div className="phone-light-contact-desc">Available for meetings by appointment.</div>
          </div>
        </div>
      </div>

      {/* 3. Book a Free Call CTA Button */}
      <button className="phone-light-book-call-btn" onClick={onOpenModal}>
        <Calendar size={17} />
        Book a Free Call <ArrowRight size={16} />
      </button>

      {/* 4. Follow Us Section */}
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

      {/* 5. Bottom Callout Card */}
      <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
        <div className="phone-light-callout-bottom-box" onClick={onOpenModal}>
          <div className="phone-light-callout-icon">
            <MessageSquare size={17} />
          </div>
          <div className="phone-light-callout-title">
            Let's Build Your<br />Web3 Project Together
          </div>
          <div className="phone-light-consultation-arrow">
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
