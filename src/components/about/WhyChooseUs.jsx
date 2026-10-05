import React from 'react'
import { Users, ShieldCheck, Send, Clock, Briefcase, HeartHandshake } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="w-4 h-4 text-emerald-700" />,
      title: 'Expert Team',
      description: 'Skilled in Solidity, Rust, React, Node.js and more.',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-700" />,
      title: 'Security First',
      description: 'Best practices and optional third-party audits.',
    },
    {
      icon: <Send className="w-4 h-4 text-emerald-700" />,
      title: 'Transparent Process',
      description: 'Clear communication, regular updates.',
    },
    {
      icon: <Clock className="w-4 h-4 text-emerald-700" />,
      title: 'On-Time Delivery',
      description: 'We respect your time and milestones.',
    },
    {
      icon: <Briefcase className="w-4 h-4 text-emerald-700" />,
      title: 'Flexible Engagements',
      description: 'From MVPs to full-scale product development.',
    },
    {
      icon: <HeartHandshake className="w-4 h-4 text-emerald-700" />,
      title: 'Long-Term Support',
      description: "We're here beyond deployment.",
    },
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Pale Green Rounded Rectangular Section */}
        <div className="bg-[#f0f7f2] border border-emerald-200/50 rounded-[24px] p-8 sm:p-10 lg:p-12 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase mb-3">
                WHY CHOOSE US
              </span>

              <h2 className="text-[30px] sm:text-[34px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
                What Makes <br />
                <span className="text-slate-900">ZarWebCoders Different?</span>
              </h2>

              <p className="text-slate-600 text-[14px] leading-relaxed">
                We're not just coders. We're problem solvers, innovators, and long-term partners. Our team brings a unique blend of blockchain expertise, modern development practices, and a commitment to your success.
              </p>
            </div>

            {/* Right Column: 6 Features (3 cols x 2 rows) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 text-left">
              {features.map((feat) => (
                <div key={feat.title} className="flex flex-col items-start group">
                  <div className="w-8 h-8 rounded-full bg-emerald-100/90 border border-emerald-200/60 flex items-center justify-center mb-3 group-hover:bg-emerald-200/80 transition-colors">
                    {feat.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 tracking-tight mb-1.5 group-hover:text-emerald-950 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-[12px] text-slate-600 leading-relaxed">
                    {feat.description}
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
