import React from 'react'
import {
  Lightbulb,
  Edit3,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
} from 'lucide-react'

const ICON_MAP = {
  Lightbulb: Lightbulb,
  Edit3: Edit3,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket,
  Headphones: Headphones,
}

export default function DevelopmentProcess({ processSteps = [] }) {
  if (!processSteps.length) return null

  return (
    <section className="py-16 md:py-24 bg-[#fbfcfb] border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Development Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A clear and transparent process to ensure your smart contract is secure, efficient, and delivered on time.
          </p>
        </div>

        {/* 6 Horizontal Steps on Desktop / Grid on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {processSteps.map((step) => {
            const IconComp = ICON_MAP[step.icon] || Lightbulb
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center space-y-3 relative group"
              >
                {/* Step Icon */}
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Number & Title */}
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-emerald-700">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
