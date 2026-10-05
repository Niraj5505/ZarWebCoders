import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInformation from '../components/contact/ContactInformation'
import LocationSection from '../components/contact/LocationSection'
import FAQSection from '../components/contact/FAQSection'
import ContactCTA from '../components/contact/ContactCTA'
import DarkFooter from '../components/DarkFooter'

export default function ContactPage({ onDiscussClick, onNavClick }) {
  const scrollToForm = () => {
    const el = document.getElementById('contact-form-card')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-[#fbfcfb] min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        {/* 1. Contact Hero */}
        <ContactHero />

        {/* 2. Main Contact Area: Form (Left) + Contact Information (Right) */}
        <section className="py-12 md:py-20 bg-white border-b border-slate-100">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Form Card */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Right Column: Contact Information & Direct Discussion Card */}
              <div className="lg:col-span-5">
                <ContactInformation />
              </div>

            </div>
          </div>
        </section>

        {/* 3. Location Section: Map + Details */}
        <LocationSection />

        {/* 4. Frequently Asked Questions Accordion */}
        <FAQSection onDiscussClick={scrollToForm} />

        {/* 5. Dark Green CTA Section */}
        <ContactCTA onDiscussClick={scrollToForm} />
      </main>

      {/* 6. ZarWebCoders Dark Footer */}
      <DarkFooter onNavClick={onNavClick} />
    </div>
  )
}
