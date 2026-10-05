import React from 'react'
import {
  FileCode2,
  Box,
  Network,
  Server,
  ShieldCheck,
  Settings,
  Check,
  ArrowRight,
  Code2,
  Wallet,
  Database,
  Shield,
  TrendingUp,
  Layers,
} from 'lucide-react'
import { SERVICES_DATA } from '../../data/servicesData'

const ICON_MAP = {
  FileCode2: FileCode2,
  Box: Box,
  Link: Network,
  Server: Server,
  ShieldCheck: ShieldCheck,
  Settings: Settings,
}

const WATERMARK_MAP = {
  Code2: Code2,
  Wallet: Wallet,
  Network: Network,
  Database: Database,
  Shield: Shield,
  TrendingUp: TrendingUp,
}

export default function ServicesGrid({ onSelectService }) {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 3. CORE SERVICES INTRO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-4 border-b border-slate-100">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              OUR CORE SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Web3 Development <br className="hidden sm:inline" />
              Services
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              We offer a comprehensive range of Web3 development services tailored to your business needs. Whether you're launching a new product or integrating blockchain into your existing platform, we've got you covered.
            </p>
          </div>
        </div>

        {/* 4. SERVICES 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const MainIcon = ICON_MAP[service.iconName] || FileCode2
            const WatermarkIcon = WATERMARK_MAP[service.watermarkIcon] || Code2

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
              >
                {/* Background Faint Watermark Icon in Lower Right */}
                <div className="absolute -bottom-3 -right-3 text-emerald-100/70 group-hover:text-emerald-200/90 transition-colors pointer-events-none">
                  <WatermarkIcon className="w-24 h-24 stroke-[1]" />
                </div>

                <div className="relative z-10 space-y-5">
                  {/* Top Circular Pale-Green Icon */}
                  <div className="w-12 h-12 rounded-full bg-emerald-100/90 border border-emerald-200/70 flex items-center justify-center text-emerald-700 shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <MainIcon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* 3 Checklist Features */}
                  <ul className="space-y-2 pt-1">
                    {service.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <div className="relative z-10 pt-6 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
