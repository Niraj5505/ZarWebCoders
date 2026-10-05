import React from 'react'
import { ArrowRight, Calendar, Rocket, ShieldCheck } from 'lucide-react'

export default function AboutStory({ onBuildTogetherClick }) {
  const stats = [
    {
      icon: <Calendar className="w-4 h-4 text-emerald-600" />,
      number: '2021',
      description: 'Founded with a mission to build the decentralized future.',
    },
    {
      icon: <Rocket className="w-4 h-4 text-emerald-600" />,
      number: '50+',
      description: 'Successful projects delivered.',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
      number: '100%',
      description: 'Client-focused approach and long-term partnerships.',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Paragraphs & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-3">
              OUR STORY
            </span>

            <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-5">
              From a Vision to <br />
              <span className="text-slate-900">a Web3 Development Partner</span>
            </h2>

            <p className="text-slate-600 text-[15px] leading-[1.65] mb-4">
              ZarWebCoders started with a simple belief — blockchain technology can make the internet more open, transparent and fair. What began as a small team of passionate developers has grown into a trusted Web3 engineering partner for clients across India and beyond.
            </p>

            <p className="text-slate-600 text-[15px] leading-[1.65] mb-8">
              We combine deep technical expertise with a product-driven mindset to turn your Web3 ideas into secure, high-performance applications.
            </p>

            <button
              onClick={onBuildTogetherClick}
              className="group inline-flex items-center gap-2 bg-[#239c59] hover:bg-[#1e874c] text-white font-medium text-[13px] px-6 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Let's Build Together</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right Column: Team Photo & Vertical Statistics Card */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            
            {/* Team Image (approx 7 cols) */}
            <div className="sm:col-span-7 relative rounded-[20px] overflow-hidden border border-slate-200/80 shadow-xs bg-slate-50 group">
              <img
                src="/assets/about-story-team.png"
                alt="ZarWebCoders Team - Better Technology Brighter Future"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Vertical Statistics Card (approx 5 cols) */}
            <div className="sm:col-span-5 bg-gradient-to-b from-[#f8faf8] to-[#ffffff] border border-slate-200/80 rounded-[20px] p-6 flex flex-col justify-between text-left shadow-2xs">
              {stats.map((stat, idx) => (
                <div key={stat.number} className="relative">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {stat.icon}
                    </div>
                    <div>
                      <span className="text-[24px] font-bold text-slate-900 leading-none tracking-tight block">
                        {stat.number}
                      </span>
                      <p className="text-[12px] text-slate-600 leading-relaxed mt-1.5">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                  {idx < stats.length - 1 && (
                    <div className="my-4 border-b border-slate-100" />
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
