import React from 'react'
import { ArrowRight, BookOpen, Code2, Sparkles, Terminal, FileCode2 } from 'lucide-react'

export default function BlogHero({ onDiscussClick, onExploreClick }) {
  const features = [
    { title: 'Expert Articles', icon: BookOpen },
    { title: 'Tech Tutorials', icon: Code2 },
    { title: 'Industry Insights', icon: Sparkles },
  ]

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#f4fbf7] border-b border-emerald-100/60 relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-200/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-200/60 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                BLOG & INSIGHTS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Latest Insights on <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700">
                Web3 Development
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Stay updated with the latest trends, tutorials, and expert insights on blockchain, Web3, smart contracts, and decentralized applications. Learn, build, and grow with ZarWebCoders.
            </p>

            {/* Three Feature Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              {features.map((feat) => {
                const IconComp = feat.icon
                return (
                  <div key={feat.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100/90 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-slate-800 font-semibold text-sm sm:text-base">
                      {feat.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Visual Graphic with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card / Mockup Wrapper */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-200/80 shadow-xl bg-white p-3 sm:p-4 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 flex items-center justify-center">
                  <img
                    src="/assets/blog-7-tools.jpg"
                    alt="Web3 Developer Workspace"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/cs-hero.jpg'
                    }}
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Visual Overlay Elements */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>solc --optimize contract.sol</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs">
                    <span className="font-mono text-emerald-300">Solidity 0.8.24</span>
                    <span className="bg-emerald-600/90 text-white px-2 py-0.5 rounded text-[11px] font-medium">Mainnet Verified</span>
                  </div>
                </div>
              </div>

              {/* Floating White Card on Right */}
              <button
                onClick={onDiscussClick}
                className="absolute -bottom-5 right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-emerald-100 shadow-xl rounded-xl p-3.5 sm:p-4 flex items-center gap-3 hover:-translate-y-1 transition-all duration-300 group cursor-pointer text-left"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:bg-emerald-700 transition-colors">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm flex items-center gap-1.5 group-hover:text-emerald-700 transition-colors">
                    <span>Build the future with Web3</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-slate-500 text-xs">Partner with ZarWebCoders</div>
                </div>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
