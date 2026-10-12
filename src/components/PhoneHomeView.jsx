import React from 'react';
import { ArrowRight, Box, Shield, Layers, ChevronRight } from 'lucide-react';

export default function PhoneHomeView({ onOpenMenu, onOpenServiceDetail, onOpenContact, onOpenModal }) {
  return (
    <div className="phone-home-container">
      {/* 1. Pill Eyebrow Badge */}
      <div className="phone-agency-badge">
        <span>WEB3 DEVELOPMENT AGENCY</span>
      </div>

      {/* 2. Hero Heading */}
      <h1 className="phone-hero-heading">
        Turning Ideas<br />
        into Decentralized<br />
        Solutions
      </h1>

      {/* 3. Hero Subtitle */}
      <p className="phone-hero-subtext">
        We build secure, scalable, and innovative Web3 solutions for businesses, startups, and enterprises.
      </p>

      {/* 4. Discuss a Project CTA Button */}
      <button className="phone-primary-pill-btn" onClick={onOpenModal}>
        Discuss a Project <ArrowRight size={16} />
      </button>

      {/* 5. Hero Laptop Graphic with Floating Badge */}
      <div className="phone-hero-graphic-box">
        <img
          src="/images/phone_hero_laptop.jpg"
          alt="Web3 Development Laptop with Glowing Cubes"
          className="phone-laptop-img"
        />

        {/* Floating Pill Tag matching the wireframe */}
        <div className="phone-laptop-floating-pill">
          <div className="phone-check-circle" style={{ background: 'rgba(26, 122, 255, 0.12)', color: '#1a7aff' }}>
            <Shield size={13} color="#1a7aff" strokeWidth={2.5} />
          </div>
          <div>
            <div className="phone-floating-pill-title">Smart Contracts</div>
            <div className="phone-floating-pill-desc">Secure &amp; Reliable</div>
          </div>
        </div>
      </div>

      {/* 6. Three Action Cards below Hero */}
      <div className="phone-action-cards-grid">
        <div 
          className="phone-action-card-item" 
          onClick={onOpenServiceDetail}
          title="Open Smart Contract Details"
        >
          <div className="phone-action-icon-wrap">
            <Shield size={19} color="#1a7aff" />
          </div>
          <span className="phone-action-card-title">Smart Contracts</span>
        </div>

        <div 
          className="phone-action-card-item"
          onClick={onOpenMenu}
        >
          <div className="phone-action-icon-wrap">
            <Layers size={19} color="#1a7aff" />
          </div>
          <span className="phone-action-card-title">dApp Development</span>
        </div>

        <div 
          className="phone-action-card-item"
          onClick={onOpenContact}
        >
          <div className="phone-action-icon-wrap">
            <Box size={19} color="#1a7aff" />
          </div>
          <span className="phone-action-card-title">Blockchain Integration</span>
        </div>
      </div>

      {/* Scrollable Value Highlights for full mobile experience */}
      <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.8px', color: '#1a7aff', textTransform: 'uppercase', marginBottom: '8px' }}>
          WHAT WE BUILD
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0d1526', marginBottom: '14px' }}>
          Enterprise-Ready Web3 Protocols
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div 
            style={{ 
              background: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '12px', 
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
            onClick={onOpenServiceDetail}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(26,122,255,0.1)', color: '#1a7aff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0d1526' }}>Audited Smart Contracts</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Gas-optimized Solidity &amp; Rust</div>
              </div>
            </div>
            <ChevronRight size={16} color="#94a3b8" />
          </div>

          <div 
            style={{ 
              background: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '12px', 
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
            onClick={onOpenMenu}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0,212,255,0.1)', color: '#008fb8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0d1526' }}>dApp Frontend Architecture</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>React, Web3.js, WalletConnect</div>
              </div>
            </div>
            <ChevronRight size={16} color="#94a3b8" />
          </div>
        </div>
      </div>
    </div>
  );
}
