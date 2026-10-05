import React from 'react'
import { ArrowRight, ShieldCheck, FileCode2, Network } from 'lucide-react'
import ServiceHighlights from './ServiceHighlights'

export default function ServiceHero({ service, onDiscussClick, onCaseStudiesClick }) {
  if (!service) return null

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20 bg-[#f4fbf7] border-b border-emerald-100/60 relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-200/60 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                {service.label || 'OUR SERVICE'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              {service.heroDescription || service.description}
            </p>

            {/* Service Highlights Component */}
            {service.highlights && (
              <ServiceHighlights highlights={service.highlights} />
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscussClick}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCaseStudiesClick}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Visual Card */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-200/90 shadow-2xl bg-slate-950 p-3 sm:p-4 group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center">
                  <img
                    src={service.heroImage || '/assets/blog-1-solidity.jpg'}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    fetchPriority="high"
                    decoding="async"
                    loading="eager"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/cs-hero.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating White Overlay Cards */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <FileCode2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Solidity</div>
                  <div className="text-[10px] text-slate-500">Smart Contracts</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Audit Ready</div>
                  <div className="text-[10px] text-slate-500">Secure & Reliable</div>
                </div>
              </div>

              <div className="absolute bottom-6 right-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Multi-Chain</div>
                  <div className="text-[10px] text-slate-500">Ethereum, BSC, Polygon</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
