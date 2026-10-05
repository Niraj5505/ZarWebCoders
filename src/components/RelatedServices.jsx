import React from 'react'
import { ArrowRight } from 'lucide-react'
import { RELATED_SERVICES_LIST } from '../data/services'

export default function RelatedServices({ onSelectService, onViewAllServices }) {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Related Services
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Explore our other Web3 development services.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Compact Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RELATED_SERVICES_LIST.map((item) => (
            <div
              key={item.slug}
              onClick={() => onSelectService(item.slug)}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/assets/cs-hero.jpg'
                  }}
                />
              </div>

              <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
