import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CaseStudies({ onProjectSelect }) {
  const projects = [
    {
      id: 'smart-contract-dev',
      image: '/assets/case-1.png',
      title: 'Smart Contract Development',
      description: 'Custom smart contract system for business logic and automation.',
      client: 'DeFi Protocol',
      chain: 'Ethereum / Polygon',
      highlights: 'Gas optimization reduced transaction overhead by 34%; zero critical vulnerabilities in audit.',
    },
    {
      id: 'dapp-dev',
      image: '/assets/case-2.png',
      title: 'dApp Development',
      description: 'Decentralized application with modern UI and wallet integration.',
      client: 'Web3 Gaming Hub',
      chain: 'Arbitrum / EVM',
      highlights: 'Sub-second state synchronization with responsive Next.js frontend and RainbowKit wallet connect.',
    },
    {
      id: 'web3-integrations',
      image: '/assets/case-3.png',
      title: 'Blockchain Web3 Integrations',
      description: 'Integration with a public blockchain network for data verification.',
      client: 'Supply Chain Enterprise',
      chain: 'Base / Optimism',
      highlights: 'Tamper-proof event attestation with decentralized IPFS document indexing and verification oracle.',
    },
    {
      id: 'infrastructure-setup',
      image: '/assets/case-4.png',
      title: 'Infrastructure Setup',
      description: 'Node setup and blockchain infrastructure for reliable operations.',
      client: 'FinTech Platform',
      chain: 'Multi-chain RPC Cluster',
      highlights: 'High-availability load-balanced RPC cluster with 99.99% uptime and custom GraphQL indexing endpoints.',
    },
  ]

  return (
    <section id="case-studies" className="py-16 md:py-20 relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-2 block">
              CASE STUDIES
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18]">
              Recent Projects
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[14px] text-slate-500 leading-relaxed md:text-right">
              A few examples of how we've helped businesses build custom blockchain and Web3 solutions.
            </p>
          </div>
        </div>

        {/* 4 Horizontal Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectSelect && onProjectSelect(project)}
              className="group bg-white border border-slate-200/80 hover:border-emerald-300 rounded-[18px] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Project Image Thumbnail */}
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width={612}
                    height={522}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-slate-900 tracking-tight mb-2 group-hover:text-emerald-900 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              {/* Circular Green Arrow */}
              <div className="flex items-center justify-end pt-2 border-t border-slate-100">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-200">
                  <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
