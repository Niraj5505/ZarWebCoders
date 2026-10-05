import React from 'react'
import {
  ShieldCheck,
  Clock,
  HeartHandshake,
  FileCode2,
  Box,
  Network,
  Server,
} from 'lucide-react'

export default function ServicesHero({ onDiscussClick }) {
  const heroFeatures = [
    { label: 'Secure Code', icon: ShieldCheck },
    { label: 'On-Time Delivery', icon: Clock },
    { label: 'Long-Term Support', icon: HeartHandshake },
  ]

  const floatingPills = [
    {
      label: 'Smart Contracts',
      icon: FileCode2,
      pos: 'top-4 left-6 sm:top-6 sm:left-10',
    },
    {
      label: 'dApps',
      icon: Box,
      pos: 'top-8 right-4 sm:top-10 sm:right-8',
    },
    {
      label: 'Blockchain Integration',
      icon: Network,
      pos: 'bottom-20 left-2 sm:bottom-24 sm:left-4',
    },
    {
      label: 'Web3 Infrastructure',
      icon: Server,
      pos: 'bottom-8 right-2 sm:bottom-10 sm:right-6',
    },
  ]

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#f4fbf7] border-b border-emerald-100/60 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-200/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-200/60 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                OUR SERVICES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build Scalable Web3 <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700">
                Solutions for Your Business
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              From smart contracts to full-stack dApps, we provide end-to-end Web3 development services to help you innovate, automate, and grow in the decentralized world.
            </p>

            {/* Three Feature Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
              {heroFeatures.map((feat) => {
                const IconComp = feat.icon
                return (
                  <div key={feat.label} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-slate-800 font-semibold text-xs sm:text-sm">
                      {feat.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Visual Graphic with Floating White Pills */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Visual Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-200/80 shadow-2xl bg-white p-3 sm:p-4 group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center">
                  <img
                    src="/assets/dev-workstation.png"
                    alt="Web3 Development Environment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/cs-hero.jpg'
                    }}
                  />
                  {/* Subtle Green Light Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-emerald-900/10 pointer-events-none" />
                </div>
              </div>

              {/* Floating White Pill Badges */}
              {floatingPills.map((pill) => {
                const IconComp = pill.icon
                return (
                  <div
                    key={pill.label}
                    className={`absolute ${pill.pos} z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl px-3.5 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-slate-800 hover:-translate-y-1 transition-transform duration-300 pointer-events-none sm:pointer-events-auto`}
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <IconComp className="w-3 h-3" />
                    </div>
                    <span>{pill.label}</span>
                  </div>
                )
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
