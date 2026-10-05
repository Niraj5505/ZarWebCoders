import React from 'react'
import { ArrowRight, Lightbulb, ShieldCheck, Users, Target } from 'lucide-react'

export default function OurValues({ onValuesClick }) {
  const values = [
    {
      icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to stay ahead.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Integrity',
      description: 'We build trust through honesty and transparency.',
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      title: 'Collaboration',
      description: 'Great results come from strong partnerships.',
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      title: 'Impact',
      description: "We're focused on creating real value for our clients and the Web3 community.",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Panel: Dark Web3 Visual Panel */}
          <div className="lg:col-span-6 bg-[#0c1e16] rounded-[22px] p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-md">
            
            {/* Ambient green glow background */}
            <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Glowing 3D cubes visual blended into right side */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-[45%] opacity-90 pointer-events-none mix-blend-screen flex items-center justify-end">
              <img
                src="/assets/about-values-cubes.png"
                alt="Web3 Blockchain Glowing Cubes"
                className="h-full w-auto object-cover object-left"
              />
            </div>

            {/* Content Area */}
            <div className="relative z-10 text-left max-w-xs sm:max-w-sm">
              <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase mb-3 block">
                OUR VALUES
              </span>

              <h2 className="text-[30px] sm:text-[36px] font-bold text-white tracking-tight leading-[1.18] mb-4">
                Principles That <br />
                Guide Us
              </h2>

              <p className="text-emerald-100/75 text-[14px] leading-relaxed mb-8">
                Our work is driven by a set of core values that help us build better products, stronger partnerships and a more open Web3 ecosystem.
              </p>
            </div>

            {/* Button */}
            <div className="relative z-10 text-left pt-2">
              <button
                onClick={onValuesClick}
                className="group inline-flex items-center gap-2 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-medium text-[13px] px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Our Values</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

          </div>

          {/* Right Panel: Light Green 2x2 Values Grid */}
          <div className="lg:col-span-6 bg-[#f0f7f2] border border-emerald-100/70 rounded-[22px] p-8 sm:p-10 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col items-start group">
                  <div className="w-9 h-9 rounded-xl bg-white border border-emerald-200/60 flex items-center justify-center mb-3.5 shadow-2xs group-hover:bg-emerald-50 transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 tracking-tight mb-1.5 group-hover:text-emerald-900 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
