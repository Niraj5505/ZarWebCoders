import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function ProjectProcess() {
  const steps = [
    {
      step: '1',
      title: 'Discover',
      description: 'Understand your goals, define requirements and plan the approach.',
    },
    {
      step: '2',
      title: 'Design',
      description: 'Create architecture, UI/UX and technical plan.',
    },
    {
      step: '3',
      title: 'Build',
      description: 'Develop, integrate and keep you updated at every stage.',
    },
    {
      step: '4',
      title: 'Test & Deliver',
      description: 'Ensure quality, security and smooth deployment.',
    },
  ]

  return (
    <section id="process" className="py-16 md:py-20 relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-2 block">
              OUR PROCESS
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18]">
              Project Process
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[14px] text-slate-500 leading-relaxed md:text-right">
              A clear and collaborative process to turn your idea into a secure and scalable Web3 product.
            </p>
          </div>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {steps.map((item, index) => (
            <div key={item.step} className="relative flex items-center">
              <div className="w-full bg-white border border-slate-200/80 rounded-[18px] p-6 hover:border-emerald-300/80 transition-all duration-300 hover:shadow-md hover:shadow-emerald-900/5 hover:-translate-y-0.5">
                {/* Step Number Circle */}
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100/90 text-emerald-700 font-bold text-[13px] flex items-center justify-center mb-4">
                  {item.step}
                </div>

                {/* Step Title */}
                <h3 className="text-[16px] font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Connecting arrow for desktop between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-400 items-center justify-center shadow-2xs">
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
