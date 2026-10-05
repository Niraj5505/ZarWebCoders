import React from 'react'
import {
  Shield,
  Box,
  Network,
  Zap,
  Search,
  Headphones,
  CheckCircle2,
} from 'lucide-react'

const ICON_MAP = {
  Shield: Shield,
  Box: Box,
  Network: Network,
  Zap: Zap,
  Search: Search,
  Headphones: Headphones,
  CheckCircle2: CheckCircle2,
}

export default function FeatureGrid({ features = [] }) {
  if (!features.length) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((card) => {
        const IconComp = ICON_MAP[card.icon] || Shield
        return (
          <div
            key={card.title}
            className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center">
              <IconComp className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
