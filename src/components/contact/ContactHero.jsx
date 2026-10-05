import React from 'react'
import { Clock, CheckCircle2, ShieldCheck, Headphones } from 'lucide-react'

export default function ContactHero() {
  const highlights = [
    {
      title: 'Quick Response',
      subtitle: 'Within 24 Hours',
      icon: Clock,
    },
    {
      title: 'Expert Consultation',
      subtitle: 'Free & No Obligation',
      icon: CheckCircle2,
    },
    {
      title: 'Confidential Discussion',
      subtitle: 'Your Ideas Are Safe',
      icon: ShieldCheck,
    },
  ]

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#f4fbf7] border-b border-emerald-100/60 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-200/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-200/60 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Let’s Build Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700">
                Web3 Project Together
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Have a question, a project idea, or need a custom solution? Our team is here to help. Reach out to us and we’ll get back to you as soon as possible.
            </p>

            {/* Three Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {highlights.map((item) => {
                const IconComp = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex sm:flex-col items-center sm:items-start gap-3 p-3 rounded-2xl bg-white/80 border border-emerald-100/90 shadow-2xs hover:border-emerald-200 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-200/90 shadow-2xl bg-slate-950 p-3 sm:p-4 group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center">
                  <img
                    src="/assets/about-hero-office.png"
                    alt="ZarWebCoders Office & Development Team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/dev-workstation.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating White Card (Upper Right) */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl p-3.5 sm:p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    We’re Here to Help
                  </div>
                  <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                    Discuss your project with <br /> our experts.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
