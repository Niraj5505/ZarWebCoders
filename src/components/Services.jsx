import React from 'react'
import { ArrowRight, Code2, Box, Wallet, Database } from 'lucide-react'

export default function Services({ onServiceSelect }) {
  const services = [
    {
      id: 'smart-contracts',
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
      title: 'Smart Contracts',
      description: 'Secure, efficient and audited smart contracts for your blockchain applications.',
      tags: ['Solidity', 'Security Audits', 'Gas Optimization', 'ERC Standards'],
    },
    {
      id: 'dapps',
      icon: <Box className="w-5 h-5 text-emerald-600" />,
      title: 'Decentralized Applications',
      description: 'Custom dApps with modern UI/UX and seamless blockchain integration.',
      tags: ['React', 'Next.js', 'Ethers.js', 'Viem / Wagmi'],
    },
    {
      id: 'wallet-integrations',
      icon: <Wallet className="w-5 h-5 text-emerald-600" />,
      title: 'Wallet & Web3 Integrations',
      description: 'Integrate wallets, connect to blockchains and enable seamless user experiences.',
      tags: ['MetaMask', 'WalletConnect', 'Coinbase', 'Social Logins'],
    },
    {
      id: 'infrastructure',
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      title: 'Blockchain Infrastructure',
      description: 'Node setup, APIs, indexing and infrastructure for reliable performance.',
      tags: ['RPC Nodes', 'The Graph', 'Subgraphs', 'IPFS / Arweave'],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-20 relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-2 block">
              OUR SERVICES
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18]">
              What We Build
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[14px] text-slate-500 leading-relaxed md:text-right">
              From smart contracts to complete Web3 infrastructure, we build the core technology that powers your vision.
            </p>
          </div>
        </div>

        {/* 4 Equal Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => onServiceSelect && onServiceSelect(item)}
              className="group bg-white border border-slate-200/80 hover:border-emerald-300 rounded-[18px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Green Technical Icon */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50/70 border border-emerald-100/80 flex items-center justify-center mb-5 group-hover:bg-emerald-100/60 transition-colors">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Circular Arrow Button */}
              <div className="flex items-center justify-start pt-2">
                <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
