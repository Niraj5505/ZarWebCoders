import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import ServiceDetailView from './views/ServiceDetailView';
import CaseStudiesView from './views/CaseStudiesView';
import DeFiCaseStudyView from './views/DeFiCaseStudyView';
import BlogView from './views/BlogView';
import ContactView from './views/ContactView';
import AboutView from './views/AboutView';

function AppContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('smart-contract-development');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomeView onOpenModal={() => setModalOpen(true)} setSelectedService={setSelectedServiceId} />} />
          <Route path="/services" element={<ServicesView setSelectedService={setSelectedServiceId} onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/services/smart-contract-development" element={<ServiceDetailView selectedServiceId="smart-contract-development" onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/case-studies" element={<CaseStudiesView onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/case-studies/defi-lending-platform" element={<DeFiCaseStudyView onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/about" element={<AboutView onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/blog" element={<BlogView onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/contact" element={<ContactView onOpenModal={() => setModalOpen(true)} />} />
          <Route path="*" element={<HomeView onOpenModal={() => setModalOpen(true)} setSelectedService={setSelectedServiceId} />} />
        </Routes>
      </main>

      <Footer onOpenModal={() => setModalOpen(true)} />

      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
