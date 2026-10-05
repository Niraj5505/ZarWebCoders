import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function ContactCTA({ onDiscussClick }) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#07241b] via-[#0b3327] to-[#051c15] p-8 sm:p-12 text-white shadow-2xl border border-emerald-900/60">
          
          {/* Subtle Blockchain Network Background Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Heading, Subtitle & Action */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-emerald-500/30">
                READY TO BUILD?
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Turn Your Idea into a <br className="hidden sm:inline" />
                Real Web3 Product
              </h2>

              <p className="text-emerald-100/70 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
                Whether it's a smart contract, dApp, or full platform, we're here to help you build secure, scalable, and innovative solutions.
              </p>

              <div className="pt-2">
                <button
                  onClick={onDiscussClick}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-xl hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Glowing Blockchain Cube Artwork with Connected Lines */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">
                {/* Glowing Circles */}
                <div className="absolute w-48 h-48 rounded-full bg-emerald-500/20 blur-2xl animate-pulse" />
                <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl p-4 bg-slate-950/70 backdrop-blur-md">
                  <img
                    src="/assets/hero-blockchain.png"
                    alt="Blockchain network cube"
                    className="w-full h-auto object-contain opacity-90 hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/about-values-cubes.png'
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
