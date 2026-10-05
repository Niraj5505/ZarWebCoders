import React from 'react'
import { Code2, Box, Link2 } from 'lucide-react'

export default function FeatureCards({ onCardClick }) {
  const cards = [
    {
      id: 'smart-contracts',
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
      title: 'Smart Contract\nEngineering',
      description: 'Secure and efficient smart contracts for your Web3 applications.',
    },
    {
      id: 'full-stack-dapps',
      icon: <Box className="w-5 h-5 text-emerald-600" />,
      title: 'Full-Stack dApps',
      description: 'Modern, scalable and user-friendly decentralized applications.',
    },
    {
      id: 'blockchain-integrations',
      icon: <Link2 className="w-5 h-5 text-emerald-600" />,
      title: 'Blockchain Integrations',
      description: 'Seamless integration with leading blockchain networks and ecosystems.',
    },
  ]

  return (
    <section className="py-6 md:py-10">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onCardClick && onCardClick(card)}
              className="group relative bg-gradient-to-b from-[#f7faf8] to-[#ffffff] border border-slate-200/80 hover:border-emerald-300/80 rounded-[18px] p-7 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center mb-6 shadow-2xs group-hover:bg-emerald-50 transition-colors">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 tracking-tight leading-snug whitespace-pre-line mb-3 group-hover:text-emerald-950 transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Subtle bottom indicator */}
              <div className="mt-6 pt-3 flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
