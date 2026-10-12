import React, { useState } from 'react';
import { Wifi, BatteryMedium, Signal, Menu } from 'lucide-react';
import PhoneHomeView from './PhoneHomeView';
import PhoneMenuDrawer from './PhoneMenuDrawer';
import PhoneServiceDetailView from './PhoneServiceDetailView';
import PhoneContactView from './PhoneContactView';
import ProjectModal from './ProjectModal';

export default function PhoneAppContainer() {
  const [activeScreen, setActiveScreen] = useState('screen1_home');
  const [modalOpen, setModalOpen] = useState(false);

  const screensConfig = [
    { id: 'screen1_home', label: '1. Home', desc: 'Hero & Action Cards' },
    { id: 'screen2_menu', label: '2. Menu Drawer', desc: 'Light Nav Menu' },
    { id: 'screen3_services', label: '3. Services Submenu', desc: 'Expanded Sub-services' },
    { id: 'screen4_service_detail', label: '4. Service Detail', desc: 'Smart Contract Specs' },
    { id: 'screen5_consultation', label: '5. Consultation', desc: 'Callout Card & Socials' },
    { id: 'screen6_contact', label: '6. Contact', desc: 'Direct Booking & Info' },
  ];

  return (
    <div className="phone-studio-wrapper">
      {/* ── Top Interactive Screen Switcher Bar ── */}
      <div className="phone-screen-switcher-bar">
        <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#00d4ff', padding: '0 8px', letterSpacing: '0.5px' }}>
          📱 6-SCREEN PREVIEW:
        </span>
        <div className="switcher-divider" />
        {screensConfig.map((item) => (
          <button
            key={item.id}
            className={`switcher-pill-btn ${activeScreen === item.id ? 'active' : ''}`}
            onClick={() => setActiveScreen(item.id)}
            title={item.desc}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ── Realistic Phone Device Chassis ── */}
      <div className="phone-chassis">
        <div className="phone-screen-viewport">
          {/* Status Bar */}
          <div className="phone-status-bar light-theme">
            <span>9:41</span>
            <div className="phone-island-notch" />
            <div className="phone-status-icons">
              <Signal size={13} />
              <Wifi size={13} />
              <BatteryMedium size={14} />
            </div>
          </div>

          {/* Light Header only on Home Screen */}
          {activeScreen === 'screen1_home' && (
            <div className="phone-header">
              <div className="phone-logo-block">
                <img 
                  src="/images/logo_zarwebcoders_transparent.png" 
                  alt="ZarWebCoders Logo" 
                  className="phone-logo-icon"
                />
                <div>
                  <div className="phone-logo-text">ZarWebCoders</div>
                  <div className="phone-logo-sub">Web3 Development Agency</div>
                </div>
              </div>

              <button 
                className="phone-menu-trigger-btn"
                onClick={() => setActiveScreen('screen5_consultation')}
                aria-label="Open Navigation Menu"
              >
                <Menu size={20} />
              </button>
            </div>
          )}

          {/* ── Active Screen View ── */}
          {activeScreen === 'screen1_home' && (
            <PhoneHomeView 
              onOpenMenu={() => setActiveScreen('screen5_consultation')}
              onOpenServiceDetail={() => setActiveScreen('screen4_service_detail')}
              onOpenContact={() => setActiveScreen('screen6_contact')}
              onOpenModal={() => setModalOpen(true)}
            />
          )}

          {activeScreen === 'screen2_menu' && (
            <PhoneMenuDrawer 
              onClose={() => setActiveScreen('screen1_home')}
              onSelectScreen={(scr) => {
                if (scr === 'home') setActiveScreen('screen1_home');
                if (scr === 'service-detail') setActiveScreen('screen4_service_detail');
                if (scr === 'contact') setActiveScreen('screen6_contact');
              }}
              servicesExpandedDefault={false}
              showConsultationCard={false}
              onOpenModal={() => setModalOpen(true)}
            />
          )}

          {activeScreen === 'screen3_services' && (
            <PhoneMenuDrawer 
              onClose={() => setActiveScreen('screen1_home')}
              onSelectScreen={(scr) => {
                if (scr === 'home') setActiveScreen('screen1_home');
                if (scr === 'service-detail') setActiveScreen('screen4_service_detail');
                if (scr === 'contact') setActiveScreen('screen6_contact');
              }}
              servicesExpandedDefault={true}
              showConsultationCard={false}
              onOpenModal={() => setModalOpen(true)}
            />
          )}

          {activeScreen === 'screen4_service_detail' && (
            <PhoneServiceDetailView 
              onBack={() => setActiveScreen('screen3_services')}
              onClose={() => setActiveScreen('screen1_home')}
              onOpenModal={() => setModalOpen(true)}
            />
          )}

          {activeScreen === 'screen5_consultation' && (
            <PhoneMenuDrawer 
              onClose={() => setActiveScreen('screen1_home')}
              onSelectScreen={(scr) => {
                if (scr === 'home') setActiveScreen('screen1_home');
                if (scr === 'service-detail') setActiveScreen('screen4_service_detail');
                if (scr === 'contact') setActiveScreen('screen6_contact');
              }}
              servicesExpandedDefault={false}
              showConsultationCard={true}
              onOpenModal={() => setModalOpen(true)}
            />
          )}

          {activeScreen === 'screen6_contact' && (
            <PhoneContactView 
              onBack={() => setActiveScreen('screen5_consultation')}
              onClose={() => setActiveScreen('screen1_home')}
              onOpenModal={() => setModalOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Global Project Modal */}
      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
