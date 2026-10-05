import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function BlogCTA({ onDiscussClick }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a231c] via-[#0d3b2e] to-[#081a15] p-6 text-white shadow-xl border border-emerald-900/60 group">
      {/* Decorative Network Grid Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
          <Sparkles className="w-5 h-5" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
            Have a Project <br />
            in Mind?
          </h3>
          <p className="text-emerald-100/70 text-xs sm:text-sm leading-relaxed font-normal">
            Let's turn your idea into a secure and scalable Web3 solution.
          </p>
        </div>

        <button
          onClick={onDiscussClick}
          className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm px-4 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-emerald-500/20 cursor-pointer group/btn"
        >
          <span>Discuss a Project</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
