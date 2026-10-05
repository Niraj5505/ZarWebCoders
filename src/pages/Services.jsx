import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesGrid from '../components/services/ServicesGrid'
import ProcessSection from '../components/services/ProcessSection'
import CaseStudiesCTA from '../components/services/CaseStudiesCTA'
import DarkFooter from '../components/DarkFooter'

export default function Services({ onDiscussClick, onNavClick, onCaseStudiesClick, onSelectService }) {
  return (
    <div className="bg-[#fbfcfb] min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        {/* 1. Services Hero */}
        <ServicesHero onDiscussClick={onDiscussClick} />

        {/* 2. Core Services Grid */}
        <ServicesGrid onSelectService={onSelectService} />

        {/* 3. Process & Technology Stack */}
        <ProcessSection />

        {/* 4. Real Projects Case Studies CTA */}
        <CaseStudiesCTA onCaseStudiesClick={onCaseStudiesClick} />
      </main>

      {/* 5. ZarWebCoders Dark Footer */}
      <DarkFooter onNavClick={onNavClick} />
    </div>
  )
}
