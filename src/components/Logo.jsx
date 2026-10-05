import React from 'react'

export default function Logo({ size = 'default', showSubtitle = true, dark = false }) {
  const isSmall = size === 'small'

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Geometric Folded Cube / Origami Emblem */}
      <div className={`relative flex-shrink-0 ${isSmall ? 'w-7 h-7' : 'w-8 h-8'}`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Top polygon facet */}
          <path
            d="M20 4L34 12L20 20L6 12L20 4Z"
            fill="#22c55e"
            fillOpacity="0.85"
          />
          {/* Left polygon facet */}
          <path
            d="M6 12L20 20V36L6 28V12Z"
            fill="#15803d"
          />
          {/* Right polygon facet */}
          <path
            d="M20 20L34 12V28L20 36V20Z"
            fill="#16a34a"
          />
          {/* Inner folded core highlight */}
          <path
            d="M20 12L27 16L20 20L13 16L20 12Z"
            fill="#86efac"
            fillOpacity="0.9"
          />
          <path
            d="M13 16L20 20V28L13 24V16Z"
            fill="#14532d"
            fillOpacity="0.4"
          />
          <path
            d="M20 20L27 16V24L20 28V20Z"
            fill="#4ade80"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-bold tracking-tight font-sans ${
            isSmall ? 'text-base' : 'text-[17px]'
          } ${dark ? 'text-white' : 'text-slate-900'}`}
        >
          ZarWebCoders
        </span>
        {showSubtitle && (
          <span
            className={`text-[11px] font-normal tracking-normal ${
              dark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Web3 Development Agency
          </span>
        )}
      </div>
    </div>
  )
}
