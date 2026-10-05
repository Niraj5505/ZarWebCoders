import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items = [] }) {
  return (
    <div className="bg-[#f4fbf7] border-b border-emerald-100/60 pt-4 pb-2">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium py-1">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              {item.onClick || item.href ? (
                <button
                  onClick={item.onClick}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-emerald-800 font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}
