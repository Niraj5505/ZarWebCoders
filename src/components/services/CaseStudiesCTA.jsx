import React from 'react'
import { ArrowRight, Layers } from 'lucide-react'

export default function CaseStudiesCTA({ onCaseStudiesClick }) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#092219] via-[#0b2d22] to-[#061811] p-8 sm:p-12 text-white shadow-2xl border border-emerald-900/60">
          
          {/* Background Decorative Blockchain Grid & Glow */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Heading & White Pill Button */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-emerald-500/30">
                REAL PROJECTS. REAL IMPACT.
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                See Our Work in Action
              </h2>

              <p className="text-emerald-100/70 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
                Explore our case studies to see how we've helped businesses build and scale with Web3 technology.
              </p>

              <div className="pt-2">
                <button
                  onClick={onCaseStudiesClick}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-xl hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Web3 Product Screenshot Collage & Floating Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Collage Wrapper */}
                <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-950 p-2 sm:p-3">
                  <img
                    src="/assets/projects-all.png"
                    alt="Web3 Project Case Studies Collage"
                    className="w-full h-auto rounded-xl object-cover"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/cs-hero.jpg'
                    }}
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge on Right */}
                <div className="absolute -bottom-4 right-2 sm:-right-4 bg-[#092219]/90 backdrop-blur-md border border-emerald-500/40 shadow-xl px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-semibold text-white">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-emerald-300">+12 </span>
                    <span className="text-slate-300">More Projects</span>
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
