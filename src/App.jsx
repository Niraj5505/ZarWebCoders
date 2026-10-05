import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import Expertise from './components/Expertise'
import FeatureCards from './components/FeatureCards'
import ProcessQuality from './components/ProcessQuality'
import Services from './components/Services'
import ProjectProcess from './components/ProjectProcess'
import Team from './components/Team'
import CaseStudies from './components/CaseStudies'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import DarkFooter from './components/DarkFooter'
import DetailModal from './components/DetailModal'
import AboutPage from './pages/AboutPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import BlogPage from './pages/BlogPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [modalData, setModalData] = useState({
    isOpen: false,
    item: null,
    type: 'service', // 'service' | 'project'
  })
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#/home' || hash === '#home') {
      setCurrentPage('home')
    } else if (hash === '#/about' || hash === '#about') {
      setCurrentPage('about')
    } else if (hash === '#/case-studies' || hash === '#case-studies') {
      setCurrentPage('case-studies')
    } else if (hash.startsWith('#/blog') || hash === '#blog') {
      setCurrentPage('blog')
    } else if (hash.startsWith('#/services') || hash === '#services') {
      setCurrentPage('services')
    } else if (hash === '#/contact' || hash === '#contact') {
      setCurrentPage('contact')
    } else {
      setCurrentPage('home')
    }

    const handleHashChange = () => {
      const h = window.location.hash
      if (h === '#/home' || h === '#home') {
        setCurrentPage('home')
      } else if (h === '#/about' || h === '#about') {
        setCurrentPage('about')
      } else if (h === '#/case-studies' || h === '#case-studies') {
        setCurrentPage('case-studies')
      } else if (h.startsWith('#/blog') || h === '#blog') {
        setCurrentPage('blog')
      } else if (h.startsWith('#/services') || h === '#services') {
        setCurrentPage('services')
      } else if (h === '#/contact' || h === '#contact') {
        setCurrentPage('contact')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    if (page === 'about') window.location.hash = '/about'
    else if (page === 'case-studies') window.location.hash = '/case-studies'
    else if (page === 'blog') window.location.hash = '/blog'
    else if (page === 'services') window.location.hash = '/services'
    else if (page === 'contact') window.location.hash = '/contact'
    else window.location.hash = '/home'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToContact = (prefillService = '') => {
    if (prefillService) setSelectedServiceForContact(prefillService)

    if (currentPage !== 'contact') {
      setCurrentPage('contact')
      window.location.hash = '/contact'
      setTimeout(() => {
        const el = document.getElementById('contact-form-card') || document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      const el = document.getElementById('contact-form-card') || document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToServices = () => {
    if (currentPage !== 'services') {
      handlePageChange('services')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleOpenServiceModal = (service) => {
    setModalData({ isOpen: true, item: service, type: 'service' })
  }

  const handleOpenProjectModal = (project) => {
    setModalData({ isOpen: true, item: project, type: 'project' })
  }

  const handleCloseModal = () => {
    setModalData({ isOpen: false, item: null, type: 'service' })
  }

  const darkFooterNavClick = (page, href) => {
    if (page === 'about') {
      handlePageChange('about')
    } else if (page === 'case-studies') {
      handlePageChange('case-studies')
    } else if (page === 'blog') {
      handlePageChange('blog')
    } else if (page === 'services') {
      handlePageChange('services')
    } else if (page === 'contact') {
      handlePageChange('contact')
    } else {
      handlePageChange('home')
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <div className="min-h-screen bg-[#fbfcfb] text-slate-800 antialiased flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onDiscussClick={() => scrollToContact()}
      />

      {currentPage === 'about' ? (
        /* ================= ABOUT US PAGE ================= */
        <>
          <main className="flex-grow">
            <AboutPage
              onDiscussClick={() => scrollToContact()}
              onNavigateHome={() => handlePageChange('home')}
            />
          </main>
          <DarkFooter onNavClick={darkFooterNavClick} />
        </>
      ) : currentPage === 'case-studies' ? (
        /* ================= CASE STUDIES PAGE ================= */
        <main className="flex-grow">
          <CaseStudiesPage
            onDiscussClick={() => scrollToContact()}
            onNavClick={darkFooterNavClick}
          />
        </main>
      ) : currentPage === 'blog' ? (
        /* ================= BLOG / WEB3 INSIGHTS PAGE ================= */
        <main className="flex-grow">
          <BlogPage
            onDiscussClick={() => scrollToContact()}
            onNavClick={darkFooterNavClick}
          />
        </main>
      ) : currentPage === 'services' ? (
        /* ================= SERVICES PAGE ================= */
        <main className="flex-grow">
          <ServicesPage
            onDiscussClick={(serviceTitle) => scrollToContact(serviceTitle)}
            onNavClick={darkFooterNavClick}
            onCaseStudiesClick={() => handlePageChange('case-studies')}
          />
        </main>
      ) : currentPage === 'contact' ? (
        /* ================= CONTACT PAGE ================= */
        <main className="flex-grow">
          <ContactPage
            onDiscussClick={() => scrollToContact()}
            onNavClick={darkFooterNavClick}
          />
        </main>
      ) : (
        /* ================= HOMEPAGE ================= */
        <>
          <main className="flex-grow">
            <Hero
              onDiscussClick={() => scrollToContact()}
              onExploreClick={scrollToServices}
            />
            <TechStrip />
            <Expertise onServicesClick={scrollToServices} />
            <FeatureCards onCardClick={(card) => handleOpenServiceModal(card)} />
            <ProcessQuality />
            <Services onServiceSelect={handleOpenServiceModal} />
            <ProjectProcess />
            <Team />
            <CaseStudies onProjectSelect={handleOpenProjectModal} />
            <ContactSection selectedService={selectedServiceForContact} />
          </main>
          <Footer onDiscussClick={() => scrollToContact()} />
        </>
      )}

      {/* Interactive Detail Modal for Services & Projects */}
      {modalData.isOpen && (
        <DetailModal
          item={modalData.item}
          type={modalData.type}
          onClose={handleCloseModal}
          onActionClick={(item) => scrollToContact(item.title)}
        />
      )}
    </div>
  )
}
