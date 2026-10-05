import React from 'react'
import { ShieldCheck, Zap, CheckCircle2, Globe, FileCode2 } from 'lucide-react'

const ICON_MAP = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  CheckCircle2: CheckCircle2,
  Globe: Globe,
  FileCode2: FileCode2,
}

export default function ServiceHighlights({ highlights = [] }) {
  if (!highlights.length) return null

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
      {highlights.map((item) => {
        const IconComp = ICON_MAP[item.icon] || ShieldCheck
        return (
          <div
            key={item.title}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-emerald-100 shadow-2xs hover:border-emerald-200 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <IconComp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                {item.title}
              </div>
              <div className="text-[11px] text-slate-500 font-normal">
                {item.subtitle}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
