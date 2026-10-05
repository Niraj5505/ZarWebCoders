import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceHero from '../components/ServiceHero'
import ServiceOverview from '../components/ServiceOverview'
import DevelopmentProcess from '../components/DevelopmentProcess'
import TechnologyStack from '../components/TechnologyStack'
import UseCases from '../components/UseCases'
import ConsultationForm from '../components/ConsultationForm'
import RelatedServices from '../components/RelatedServices'
import DarkFooter from '../components/DarkFooter'
import { SERVICES } from '../data/services'

export default function ServiceDetail({
  slug = 'smart-contract-development',
  onBack,
  onDiscussClick,
  onNavClick,
  onCaseStudiesClick,
  onSelectService,
}) {
  const service =
    SERVICES.find((s) => s.slug === slug) ||
    SERVICES[0]

  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavClick('home', '#home') },
    { label: 'Services', onClick: () => onNavClick('services', '#services') },
    { label: service.title },
  ]

  const scrollToForm = () => {
    const el = document.getElementById('consultation-form')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-[#fbfcfb] min-h-screen pt-20">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* 2. Service Hero */}
      <ServiceHero
        service={service}
        onDiscussClick={scrollToForm}
        onCaseStudiesClick={onCaseStudiesClick}
      />

      {/* 3. Service Overview & 2x3 Feature Grid */}
      <ServiceOverview service={service} />

      {/* 4. Development Process */}
      <DevelopmentProcess processSteps={service.process} />

      {/* 5. Technology Stack & Use Cases */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6">
              <TechnologyStack technologies={service.technologies} />
            </div>
            <div className="lg:col-span-6">
              <UseCases useCases={service.useCases} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Consultation + Contact Form */}
      <ConsultationForm defaultProjectType={service.title} />

      {/* 7. Related Services */}
      <RelatedServices
        onSelectService={onSelectService}
        onViewAllServices={() => onNavClick('services', '#services')}
      />

      {/* 8. Footer */}
      <DarkFooter onNavClick={onNavClick} />
    </div>
  )
}
