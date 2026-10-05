import React from 'react'

export default function TechStrip() {
  const technologies = [
    {
      name: 'Solidity',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-700 group-hover:fill-emerald-600 transition-colors">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l6 3.75v3.1l-6-3.75-6 3.75v-3.1l6-3.75zm-6 8.55l5 3.12v4.88l-5-3.12v-4.88zm7 8v-4.88l5-3.12v4.88l-5 3.12z" />
        </svg>
      ),
    },
    {
      name: 'Ethereum',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-700 group-hover:fill-emerald-600 transition-colors">
          <path d="M12 1.5l-6.5 10.8L12 16.1l6.5-3.8L12 1.5zm0 15.8l-6.5-3.8L12 22.5l6.5-9-6.5 3.8z" />
        </svg>
      ),
    },
    {
      name: 'Polygon',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-700 group-hover:fill-emerald-600 transition-colors">
          <path d="M16.5 8.5l-3.5-2-3.5 2v4l3.5 2 3.5-2v-4zm-8 4.6l-3.5-2-3.5 2v4l3.5 2 3.5-2v-4zm11 0l-3.5-2-3.5 2v4l3.5 2 3.5-2v-4z" />
        </svg>
      ),
    },
    {
      name: 'EVM',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-slate-700 group-hover:stroke-emerald-600 transition-colors" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
      ),
    },
    {
      name: 'Web3.js',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-slate-700 group-hover:stroke-emerald-600 transition-colors" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      ),
    },
    {
      name: 'IPFS',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-slate-700 group-hover:stroke-emerald-600 transition-colors" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4.6v9.2l-8 4.6-8-4.6V6.6L12 2z" />
          <path d="M12 12L4 7.4M12 12l8-4.6M12 12v9.2" />
        </svg>
      ),
    },
  ]

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-16">
      <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-4 sm:px-8 sm:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
        
        {/* Label */}
        <div className="flex-shrink-0 text-left pr-4 md:border-r md:border-slate-200/80">
          <p className="text-[12px] font-semibold text-slate-700 leading-tight">
            Technologies<br />
            <span className="text-slate-500 font-normal">We Work With</span>
          </p>
        </div>

        {/* Tech list items */}
        <div className="flex-1 w-full flex items-center justify-between overflow-x-auto no-scrollbar gap-6 md:gap-4 py-1">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-2 text-slate-700 hover:text-emerald-700 cursor-default transition-all flex-shrink-0"
            >
              <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center border border-slate-200/50 group-hover:bg-emerald-50/60 group-hover:border-emerald-200/60 transition-colors">
                {tech.icon}
              </div>
              <span className="text-[13px] font-medium tracking-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
