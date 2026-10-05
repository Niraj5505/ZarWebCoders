import React from 'react'
import { Check } from 'lucide-react'
import FeatureGrid from './FeatureGrid'

export default function ServiceOverview({ service }) {
  if (!service) return null

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Overview & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Service Overview
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {service.overview}
            </p>

            {/* Green Checklist */}
            {service.checklist && (
              <ul className="space-y-3 pt-2">
                {service.checklist.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: 2x3 Feature Grid */}
          <div className="lg:col-span-6">
            <FeatureGrid features={service.features} />
          </div>

        </div>
      </div>
    </section>
  )
}
