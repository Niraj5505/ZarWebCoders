import React, { useState } from 'react'
import { Layers, TrendingUp, ShieldCheck, Clock, ChevronRight, ChevronDown } from 'lucide-react'

export default function ProcessQuality() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const items = [
    {
      icon: <Layers className="w-4 h-4 text-emerald-600" />,
      title: 'Tailored Architecture',
      summary: 'Custom technical specifications, gas-optimized contracts, and modular system design tailored specifically to your project requirements.',
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
      title: 'Scalable Development',
      summary: 'Clean, maintainable codebases built with modern frameworks and robust EVM standards designed to handle massive user volume.',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
      title: 'Testing & Code Quality',
      summary: 'Rigorous unit testing, formal verification, fuzz testing, and third-party security audits to ensure zero vulnerabilities before deployment.',
    },
    {
      icon: <Clock className="w-4 h-4 text-emerald-600" />,
      title: 'Transparent Delivery',
      summary: 'Bi-weekly sprint milestones, transparent progress tracking, staging preview environments, and dedicated post-launch support.',
    },
  ]

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx)
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Team collaboration photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white/50 border border-slate-200/80 shadow-xs group">
              <img
                src="/assets/team-collab.png"
                alt="ZarWebCoders team collaborating on Web3 architecture"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Built for Clarity Accordion List */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-3">
              BUILT FOR CLARITY
            </span>

            <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Built for Clarity. Designed for Scale.
            </h2>

            <p className="text-slate-600 text-[15px] leading-[1.65] mb-8">
              We follow a transparent, structured process to ensure your project is delivered on time, with clean code and long-term support.
            </p>

            {/* 4 Expandable-looking rows */}
            <div className="w-full flex flex-col gap-3">
              {items.map((item, index) => {
                const isExpanded = expandedIndex === index
                return (
                  <div
                    key={item.title}
                    onClick={() => toggleExpand(index)}
                    className={`w-full border rounded-xl transition-all duration-200 cursor-pointer overflow-hidden ${
                      isExpanded
                        ? 'border-emerald-300/80 bg-emerald-50/20 shadow-xs'
                        : 'border-slate-200/80 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between p-4 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isExpanded ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100/80 text-slate-700'
                        }`}>
                          {item.icon}
                        </div>
                        <span className="text-[15px] font-semibold text-slate-800">
                          {item.title}
                        </span>
                      </div>

                      <div className="text-slate-400 group-hover:text-slate-600">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {/* Expandable detail content */}
                    {isExpanded && (
                      <div className="px-5 pb-4 pt-1 border-t border-emerald-100/50">
                        <p className="text-[13px] text-slate-600 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    )}
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
