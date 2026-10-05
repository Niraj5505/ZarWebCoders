import React, { useState, useEffect } from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesGrid from '../components/services/ServicesGrid'
import ProcessSection from '../components/services/ProcessSection'
import CaseStudiesCTA from '../components/services/CaseStudiesCTA'
import ServiceDetailPage from '../components/services/ServiceDetailPage'
import DarkFooter from '../components/DarkFooter'
import { SERVICES_DATA } from '../data/servicesData'

export default function ServicesPage({ onDiscussClick, onNavClick, onCaseStudiesClick }) {
  const [selectedService, setSelectedService] = useState(null)

  // Support deep link hash routing to individual service pages (e.g., #/services/smart-contract-development)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#/services/')) {
        const slug = hash.replace('#/services/', '')
        const found = SERVICES_DATA.find((s) => s.slug === slug)
        if (found) {
          setSelectedService(found)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else if (hash === '#/services' || hash === '#services') {
        setSelectedService(null)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleSelectService = (service) => {
    setSelectedService(service)
    window.location.hash = `/services/${service.slug}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToServices = () => {
    setSelectedService(null)
    window.location.hash = '/services'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // If viewing an individual service detail page
  if (selectedService) {
    return (
      <ServiceDetailPage
        service={selectedService}
        onBack={handleBackToServices}
        onDiscussClick={onDiscussClick}
        onNavClick={onNavClick}
        onCaseStudiesClick={onCaseStudiesClick}
        onSelectService={handleSelectService}
      />
    )
  }

  return (
    <div className="bg-[#fbfcfb] min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        {/* 1. Services Hero Section */}
        <ServicesHero onDiscussClick={onDiscussClick} />

        {/* 2. Core Services Intro & 3-Column Grid */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 3. Process Steps & Technology Stack */}
        <ProcessSection />

        {/* 4. Real Projects Case Studies CTA */}
        <CaseStudiesCTA onCaseStudiesClick={onCaseStudiesClick} />
      </main>

      {/* 5. ZarWebCoders Dark Footer */}
      <DarkFooter onNavClick={onNavClick} />
    </div>
  )
}
