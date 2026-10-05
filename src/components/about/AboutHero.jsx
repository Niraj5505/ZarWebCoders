import React from 'react'
import { Code2, Box, Link2, HelpCircle } from 'lucide-react'

export default function AboutHero() {
  const expertiseItems = [
    {
      title: 'Smart Contracts',
      subtitle: 'Secure & Reliable',
      icon: <Code2 className="w-4 h-4 text-emerald-700" />,
    },
    {
      title: 'dApp Development',
      subtitle: 'User-Centric',
      icon: <Box className="w-4 h-4 text-emerald-700" />,
    },
    {
      title: 'Blockchain Integration',
      subtitle: 'Seamless & Scalable',
      icon: <Link2 className="w-4 h-4 text-emerald-700" />,
    },
    {
      title: 'Technical Consulting',
      subtitle: 'Strategy & Support',
      icon: <HelpCircle className="w-4 h-4 text-emerald-700" />,
    },
  ]

  return (
    <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden">
      {/* Soft Light Green Ambient Glow matching reference */}
      <div className="absolute top-12 left-1/3 w-[600px] h-[350px] bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & 4 Horizontal Items */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small uppercase green label */}
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-3 block">
              ABOUT US
            </span>

            {/* Large Heading */}
            <h1 className="text-[38px] sm:text-[46px] lg:text-[50px] font-bold text-slate-900 tracking-tight leading-[1.12] mb-4">
              Turning Ideas into <br />
              <span className="text-slate-900">Decentralized Solutions</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-600 text-[15px] sm:text-[16px] leading-[1.65] max-w-[530px] mb-8">
              ZarWebCoders is a Web3 development agency helping businesses, startups, and enterprises build secure, scalable, and innovative blockchain solutions.
            </p>

            {/* Four small expertise items arranged horizontally */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2.5 pt-1">
              {expertiseItems.map((item) => (
                <div key={item.title} className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-100/70 border border-emerald-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200/70 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[12px] font-bold text-slate-900 leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal leading-tight mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Web3 Office Image with floating pill */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px] group">
              <div className="relative rounded-[22px] overflow-hidden border border-slate-200/80 shadow-sm transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src="/assets/about-hero-office.png"
                  alt="ZarWebCoders Web3 Development Office"
                  className="w-full h-auto object-cover select-none"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1167}
                  height={702}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
