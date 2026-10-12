import React, { useState } from 'react';
import { ArrowLeft, X, Code2, ChevronRight, ChevronUp, ArrowRight } from 'lucide-react';

export default function PhoneServiceDetailView({ onBack, onClose, onOpenModal }) {
  const [activeAccordion, setActiveAccordion] = useState('Overview');

  const sections = [
    {
      title: 'Overview',
      content: 'We design, test, and deploy resilient smart contracts with rigorous formal verification and gas optimization. Every contract undergoes automated fuzzing and reentrancy analysis.'
    },
    {
      title: 'Process',
      content: '1. Architecture & Specification -> 2. Modular Implementation (Solidity/Foundry) -> 3. Automated & Invariant Testing -> 4. Security Audit -> 5. Multi-sig Mainnet Deployment.'
    },
    {
      title: 'Technology Stack',
      content: 'Solidity 0.8+, Foundry, Hardhat, OpenZeppelin Contracts, Slither, Echidna, EVM bytecode optimization, Layer-2 Arbitrum & Polygon rollups.'
    },
    {
      title: 'Use Cases',
      content: 'Automated Market Makers (AMMs), DeFi Collateralized Lending, ERC-20 / ERC-721 / ERC-1155 Tokenomics, Staking Vaults, Governance DAOs, and Cross-Chain Bridges.'
    },
    {
      title: 'Benefits',
      content: 'Zero known vulnerabilities post-audit, up to 40% reduced transaction gas overhead, upgradable modular proxy patterns, and comprehensive developer documentation.'
    },
    {
      title: 'FAQ',
      content: 'Q: How long does a smart contract audit take? A: Typically 1 to 2 weeks depending on lines of code and protocol complexity. All findings are documented with actionable remediations.'
    }
  ];

  return (
    <div className="phone-light-service-screen" style={{ minHeight: '100%', height: '100%' }}>
      {/* 1. Top Bar */}
      <div className="phone-light-top-bar">
        <button className="phone-light-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Services</span>
        </button>

        <button className="phone-light-close-btn" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
      </div>

      {/* 2. Service Hero Card */}
      <div className="phone-light-service-hero">
        <div className="phone-service-hero-top">
          <div className="phone-service-badge-cube">
            <Code2 size={26} color="#ffffff" strokeWidth={2.5} />
          </div>
          <img 
            src="/images/light_web3_cube.jpg" 
            alt="Web3 Cubes Graphic" 
            className="phone-service-hero-graphic"
          />
        </div>

        <h1 className="phone-light-service-title">
          Smart Contract<br />Development
        </h1>

        <p className="phone-light-service-desc">
          Secure, gas-efficient, and custom smart contracts for your Web3 projects.
        </p>
      </div>

      {/* 3. Navigation / Accordion Items */}
      <div className="phone-light-accordion-list">
        {sections.map((sec) => {
          const isOpen = activeAccordion === sec.title;
          return (
            <div key={sec.title} className={`phone-light-accordion-card ${isOpen ? 'open' : ''}`}>
              <button 
                className="phone-light-accordion-btn"
                onClick={() => setActiveAccordion(isOpen ? null : sec.title)}
              >
                <span>{sec.title}</span>
                {isOpen ? (
                  <ChevronUp size={17} color="#1a7aff" />
                ) : (
                  <ChevronRight size={17} color="#94a3b8" />
                )}
              </button>

              {isOpen && (
                <div className="phone-light-accordion-content">
                  {sec.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Action Button */}
      <div style={{ marginTop: 'auto', paddingTop: '14px' }}>
        <button className="phone-drawer-cta-btn" onClick={onOpenModal}>
          View Service Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
