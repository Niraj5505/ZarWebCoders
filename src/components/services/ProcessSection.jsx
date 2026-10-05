import React from 'react'
import {
  Lightbulb,
  Edit3,
  Code2,
  Rocket,
  Headphones,
  ArrowRight,
  FileCode2,
  Atom,
  Zap,
  Server,
  Code,
  Globe,
  Boxes,
  Coins,
  Wrench,
} from 'lucide-react'
import { PROCESS_STEPS, TECH_STACK } from '../../data/servicesData'

const STEP_ICONS = {
  Lightbulb: Lightbulb,
  Edit3: Edit3,
  Code2: Code2,
  Rocket: Rocket,
  Headphones: Headphones,
}

const TECH_ICONS = {
  Solidity: FileCode2,
  'React.js': Atom,
  'Next.js': Zap,
  'Node.js': Server,
  'Web3.js': Code,
  IPFS: Globe,
  Polygon: Boxes,
  Ethereum: Coins,
  Hardhat: Wrench,
}

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fbfcfb] border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            OUR PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Idea to Deployment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We follow a clear and transparent process to ensure your project is delivered on time, with the highest quality standards.
          </p>
        </div>

        {/* Process Steps + Technology Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: 5 Process Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
              {PROCESS_STEPS.map((step, idx) => {
                const IconComp = STEP_ICONS[step.icon] || Lightbulb

                return (
                  <div key={step.number} className="flex flex-col items-start space-y-2.5 relative group">
                    {/* Connecting Line Arrow on Desktop */}
                    {idx < PROCESS_STEPS.length - 1 && (
                      <div className="hidden sm:block absolute top-5 left-10 w-[calc(100%-20px)] h-0.5 bg-emerald-200/60 z-0">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 absolute -right-1 -top-1.5" />
                      </div>
                    )}

                    {/* Step Icon */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200/80 flex items-center justify-center shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>

                    {/* Number & Title */}
                    <div>
                      <div className="text-[11px] font-mono font-bold text-emerald-700">
                        {step.number}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {step.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT: Technology Stack Card */}
          <div className="lg:col-span-5 bg-[#f4fbf7] rounded-3xl p-6 sm:p-7 border border-emerald-200/70 shadow-sm space-y-5">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Our Technology Stack
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                We use modern and proven technologies to build secure, scalable and high-performance Web3 solutions.
              </p>
            </div>

            {/* 3x3 Grid of White Tech Pills */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {TECH_STACK.map((tech) => {
                const IconComp = TECH_ICONS[tech.name] || FileCode2

                return (
                  <div
                    key={tech.name}
                    className="bg-white rounded-xl py-2.5 px-2 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-1.5 hover:border-emerald-300 hover:shadow-xs hover:-translate-y-0.5 transition-all text-center sm:text-left group cursor-default"
                  >
                    <IconComp className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-800">
                      {tech.name}
                    </span>
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
