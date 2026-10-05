import React from 'react'
import {
  Coins,
  TrendingUp,
  Image,
  Users,
  Wallet,
  Code2,
  Box,
  Shield,
} from 'lucide-react'

const ICON_MAP = {
  Coins: Coins,
  TrendingUp: TrendingUp,
  Image: Image,
  Users: Users,
  Wallet: Wallet,
  Code2: Code2,
  Box: Box,
  Shield: Shield,
}

export default function UseCases({ useCases = [] }) {
  if (!useCases.length) return null

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6 flex flex-col justify-between h-full">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Use Cases
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          We build smart contracts for a wide range of Web3 applications.
        </p>
      </div>

      {/* 6 Mini Cards (2x3 Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {useCases.map((uc) => {
          const IconComp = ICON_MAP[uc.icon] || Coins
          return (
            <div
              key={uc.title}
              className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200/60 flex items-start gap-3 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <IconComp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {uc.title}
                </div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {uc.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
