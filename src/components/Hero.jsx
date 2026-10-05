import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero({ onDiscussClick, onExploreClick }) {
  return (
    <section id="home" className="relative pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-emerald-50/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-emerald-600 uppercase mb-4 px-3 py-1 bg-emerald-50/80 border border-emerald-100/70 rounded-full">
              <span>WEB3 ENGINEERING • BLOCKCHAIN SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.12] mb-5">
              Build What’s Next <br className="hidden sm:inline" />
              <span className="text-slate-900">on the Blockchain.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-[15px] sm:text-[16px] leading-[1.65] max-w-[490px] mb-8">
              We build custom smart contracts, dApps, wallet integrations and blockchain infrastructure for startups and businesses across industries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onDiscussClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#239c59] hover:bg-[#1e874c] text-white font-medium text-[14px] px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onExploreClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-[14px] px-6 py-3 rounded-full transition-all duration-200 hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-600" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual matching reference */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] transition-transform duration-500 hover:scale-[1.01]">
              {/* Reference image composition */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/hero-visual.png"
                  alt="Web3 Blockchain Infrastructure and Smart Contract Development"
                  className="w-full h-auto object-contain drop-shadow-sm select-none"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={860}
                  height={470}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
