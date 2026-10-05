import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Expertise({ onServicesClick }) {
  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-3">
              OUR EXPERTISE
            </span>

            <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Engineering for Real-World <br className="hidden sm:inline" />
              Web3 Products
            </h2>

            <p className="text-slate-600 text-[15px] leading-[1.65] mb-6">
              We turn ideas into secure, scalable and user-friendly blockchain applications. From smart contract development to full-stack dApps, we help you build solutions that create real value.
            </p>

            <button
              onClick={onServicesClick}
              className="group inline-flex items-center gap-2 bg-[#eaf6ee] hover:bg-[#d9efe0] text-[#1e874c] font-semibold text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Our Services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right Column: Developer At Work with floating pills */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] group">
              <div className="relative rounded-2xl overflow-hidden bg-white/50 border border-slate-200/60 shadow-xs transition-transform duration-300 group-hover:scale-[1.01]">
                <img
                  src="/assets/dev-workstation.png"
                  alt="Web3 Engineer developing smart contracts and dApps"
                  className="w-full h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
