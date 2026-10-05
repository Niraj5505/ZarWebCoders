import React from 'react'
import {
  FileCode2,
  Wrench,
  ShieldCheck,
  Coins,
  Layers,
  Boxes,
  Network,
  Flame,
  Cpu,
} from 'lucide-react'

const ICON_MAP = {
  FileCode2: FileCode2,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Coins: Coins,
  Layers: Layers,
  Boxes: Boxes,
  Network: Network,
  Flame: Flame,
  Cpu: Cpu,
}

export default function TechnologyStack({ technologies = [] }) {
  if (!technologies.length) return null

  return (
    <div className="bg-[#f4fbf7] rounded-3xl p-6 sm:p-8 border border-emerald-200/70 shadow-2xs space-y-6 flex flex-col justify-between h-full">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Technology Stack
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          We work with the latest blockchain technologies and tools to build high-performance smart contracts.
        </p>
      </div>

      {/* Grid of Tech Pills */}
      <div className="grid grid-cols-3 gap-3">
        {technologies.map((tech) => {
          const IconComp = ICON_MAP[tech.icon] || FileCode2
          return (
            <div
              key={tech.name}
              className="bg-white rounded-xl py-3 px-2 border border-slate-200/80 shadow-2xs flex items-center justify-center gap-2 hover:border-emerald-300 transition-colors text-center cursor-default"
            >
              <IconComp className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-800">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
