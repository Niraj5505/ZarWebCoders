import React, { useState } from 'react'
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Globe,
  ArrowRight,
  Shield,
  Box,
  Network,
  Search,
  Headphones,
  Lightbulb,
  Edit3,
  Code2,
  Rocket,
  FileCode2,
  Wrench,
  Layers,
  Coins,
  Boxes,
  Flame,
  Check,
  TrendingUp,
  Image,
  Users,
  Wallet,
  Cpu,
  Mail,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  Loader2,
} from 'lucide-react'
import DarkFooter from '../DarkFooter'

export default function ServiceDetailPage({
  service,
  onBack,
  onDiscussClick,
  onNavClick,
  onCaseStudiesClick,
  onSelectService,
}) {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Smart Contract Development',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  // If no service provided, default fallback
  const serviceTitle = service?.title || 'Smart Contract Development'

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.email.trim()) newErrors.email = 'Please enter your email'
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number'
    if (!formData.message.trim()) newErrors.message = 'Please share your project details'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 1200)
  }

  const scrollToForm = () => {
    const el = document.getElementById('consultation-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // 4 Service Highlights in Hero
  const heroHighlights = [
    { title: 'Secure Code', subtitle: 'Audited & Tested', icon: ShieldCheck },
    { title: 'Gas Optimized', subtitle: 'Cost Efficient', icon: Zap },
    { title: 'Custom Logic', subtitle: 'Tailored to Your Needs', icon: CheckCircle2 },
    { title: 'Multi-Chain', subtitle: 'Ethereum, BSC, Polygon +', icon: Globe },
  ]

  // 2x3 Feature Cards in Overview
  const featureCards = [
    {
      title: 'Security First',
      desc: 'We follow secure coding standards and industry best practices.',
      icon: Shield,
    },
    {
      title: 'Custom Solutions',
      desc: 'Tailored smart contracts as per your business logic and goals.',
      icon: Box,
    },
    {
      title: 'Multi-Chain Support',
      desc: 'Ethereum, BSC, Polygon, Avalanche, Tron and more.',
      icon: Network,
    },
    {
      title: 'Gas Optimized',
      desc: 'Efficient code to reduce transaction costs.',
      icon: Zap,
    },
    {
      title: 'Audit Integration',
      desc: 'Optional third-party audits for extra security.',
      icon: Search,
    },
    {
      title: 'Ongoing Support',
      desc: 'Post-deployment support and updates.',
      icon: Headphones,
    },
  ]

  // 6 Development Process Steps
  const processSteps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      desc: 'Understand your goals, use case and technical requirements.',
      icon: Lightbulb,
    },
    {
      number: '02',
      title: 'Architecture & Design',
      desc: 'Design the contract structure and logic.',
      icon: Edit3,
    },
    {
      number: '03',
      title: 'Development',
      desc: 'Write clean, secure and gas-optimized smart contract code.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Testing',
      desc: 'Internal testing, security checks and optional third-party audit.',
      icon: ShieldCheck,
    },
    {
      number: '05',
      title: 'Deployment',
      desc: 'Deploy on mainnet or testnet and verify on block explorer.',
      icon: Rocket,
    },
    {
      number: '06',
      title: 'Support',
      desc: 'Ongoing maintenance and future updates.',
      icon: Headphones,
    },
  ]

  // Tech Stack Grid Items (Left Card)
  const techStackItems = [
    { name: 'Solidity', icon: FileCode2 },
    { name: 'Hardhat', icon: Wrench },
    { name: 'OpenZeppelin', icon: ShieldCheck },
    { name: 'Ethereum', icon: Coins },
    { name: 'BNB Chain', icon: Layers },
    { name: 'Polygon', icon: Boxes },
    { name: 'Tron', icon: Network },
    { name: 'Avalanche', icon: Flame },
    { name: 'Arbitrum', icon: Cpu },
  ]

  // Use Cases Grid Items (Right Card)
  const useCaseItems = [
    {
      title: 'Token Development',
      desc: 'ERC-20, BEP-20, TRC-20 and custom tokens.',
      icon: Coins,
    },
    {
      title: 'DeFi Protocols',
      desc: 'Staking, Farming, Lending & Liquidity Pools.',
      icon: TrendingUp,
    },
    {
      title: 'NFT Platforms',
      desc: 'Minting, Marketplace and NFT utilities.',
      icon: Image,
    },
    {
      title: 'DAO & Governance',
      desc: 'Voting, Treasury and Governance Logic.',
      icon: Users,
    },
    {
      title: 'Wallet Integration',
      desc: 'Multi-chain wallet interaction and permissions.',
      icon: Wallet,
    },
    {
      title: 'Custom Web3 Logic',
      desc: 'Any custom smart contract as per your business needs.',
      icon: Code2,
    },
  ]

  // Related Services (4 Compact Cards)
  const relatedServices = [
    {
      slug: 'dapp-development',
      title: 'dApp Development',
      desc: 'Build decentralized applications with modern tech stack.',
      image: '/assets/blog-2-dapp.jpg',
    },
    {
      slug: 'token-development',
      title: 'Token Development',
      desc: 'Create custom tokens for your blockchain project.',
      image: '/assets/cs-token-vesting.jpg',
    },
    {
      slug: 'blockchain-integration',
      title: 'Blockchain Integration',
      desc: 'Integrate blockchain into your existing systems.',
      image: '/assets/cs-enterprise-blockchain.jpg',
    },
    {
      slug: 'web3-consulting',
      title: 'Web3 Consulting',
      desc: 'Get expert guidance for your Web3 product roadmap.',
      image: '/assets/cs-consulting.jpg',
    },
  ]

  return (
    <div className="bg-[#fbfcfb] min-h-screen pt-20">
      
      {/* 1. BREADCRUMB HEADER */}
      <div className="bg-[#f4fbf7] border-b border-emerald-100/60 pt-4 pb-2">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium py-1">
            <button
              onClick={() => onNavClick('home', '#home')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => onNavClick('services', '#services')}
              className="hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-emerald-800 font-semibold">
              {serviceTitle}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. SERVICE HERO SECTION */}
      <section className="pt-8 pb-16 md:pt-10 md:pb-20 bg-[#f4fbf7] border-b border-emerald-100/60 relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-200/60 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  OUR SERVICE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Smart Contract <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700">
                  Development
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Secure, efficient, and audit-ready smart contracts for your Web3 projects. We build custom smart contracts with best practices, security, and scalability in mind.
              </p>

              {/* Four Service Highlights (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                {heroHighlights.map((item) => {
                  const IconComp = item.icon
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 border border-emerald-100 shadow-2xs"
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

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onCaseStudiesClick}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column Visual Graphic */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Visual Image Card */}
                <div className="relative rounded-3xl overflow-hidden border border-emerald-200/90 shadow-2xl bg-slate-950 p-3 sm:p-4 group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center">
                    <img
                      src="/assets/blog-1-solidity.jpg"
                      alt="Smart Contract Solidity Visual"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = '/assets/cs-hero.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating White Overlay Cards */}
                {/* Card 1 Top Left */}
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileCode2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Solidity</div>
                    <div className="text-[10px] text-slate-500">Smart Contracts</div>
                  </div>
                </div>

                {/* Card 2 Top Right */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Audit Ready</div>
                    <div className="text-[10px] text-slate-500">Secure & Reliable</div>
                  </div>
                </div>

                {/* Card 3 Bottom Right */}
                <div className="absolute bottom-6 right-4 z-20 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Network className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Multi-Chain</div>
                    <div className="text-[10px] text-slate-500">Ethereum, BSC, Polygon</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Overview & Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Service Overview
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We develop secure, scalable, and cost-efficient smart contracts for startups, businesses, and blockchain projects. Whether it's a token, DeFi protocol, NFT marketplace, staking platform, or custom Web3 logic — we turn your idea into reliable smart contracts with clean code, industry best practices, and optional third-party audits.
              </p>

              {/* Green Checklist */}
              <ul className="space-y-3 pt-2">
                {[
                  'Custom smart contract development',
                  'Token development (ERC-20, BEP-20, TRC-20, etc.)',
                  'DeFi & DAO smart contracts',
                  'NFT & marketplace contracts',
                  'Upgradeable and modular architecture',
                  'Testing, deployment and post-launch support',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: 2x3 Feature Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureCards.map((card) => {
                const IconComp = card.icon
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
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. DEVELOPMENT PROCESS SECTION */}
      <section className="py-16 md:py-24 bg-[#fbfcfb] border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Development Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A clear and transparent process to ensure your smart contract is secure, efficient, and delivered on time.
            </p>
          </div>

          {/* 6 Horizontal Steps on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center text-center space-y-3 relative group">
                  
                  {/* Step Icon */}
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Number & Title */}
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-emerald-700">
                      {step.number}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 5. TECHNOLOGY STACK & USE CASES */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Technology Stack */}
            <div className="lg:col-span-6 bg-[#f4fbf7] rounded-3xl p-6 sm:p-8 border border-emerald-200/70 shadow-2xs space-y-6 flex flex-col justify-between">
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
                {techStackItems.map((tech) => {
                  const IconComp = tech.icon
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

            {/* Right Card: Use Cases */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6 flex flex-col justify-between">
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
                {useCaseItems.map((uc) => {
                  const IconComp = uc.icon
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
                          {uc.desc}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CONSULTATION + CONTACT FORM SECTION */}
      <section id="consultation-form" className="py-16 md:py-24 bg-[#fbfcfb] border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Panel: Dark Green Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#07241b] via-[#0b3327] to-[#051c15] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-emerald-900/80">
              {/* Background Network Graphic Overlay */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-emerald-500/30">
                  GET A FREE CONSULTATION
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Have a Smart Contract <br />
                  Idea in Mind?
                </h2>

                <p className="text-emerald-100/70 text-xs sm:text-sm leading-relaxed">
                  Tell us about your project and our experts will get back to you with the best solution, timeline and cost estimate.
                </p>
              </div>

              {/* Three Trust Indicators */}
              <div className="relative z-10 pt-8 border-t border-emerald-800/60 space-y-3">
                {[
                  'Free Consultation',
                  'No Obligation',
                  'Confidential Discussion',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-medium text-emerald-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: White Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 my-4 animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">
                    Message Received!
                  </h3>
                  <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
                    Thanks! Your project details have been received. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Smart Contract Development',
                        message: '',
                      })
                    }}
                    className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-full text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your name"
                        className={`w-full px-4 py-2.5 bg-slate-50 border ${
                          errors.name ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-2.5 bg-slate-50 border ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-1 shrink-0">
                          <span>🇮🇳 +91</span>
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          className={`w-full px-4 py-2.5 bg-slate-50 border ${
                            errors.phone ? 'border-red-500' : 'border-slate-200'
                          } rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                      >
                        <option value="Smart Contract Development">Smart Contract Development</option>
                        <option value="dApp Development">dApp Development</option>
                        <option value="Blockchain Integration">Blockchain Integration</option>
                        <option value="Web3 Infrastructure">Web3 Infrastructure</option>
                        <option value="Security & Auditing">Security & Auditing</option>
                        <option value="Consulting & Strategy">Consulting & Strategy</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Tell us about your project *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Share your requirements, use case, or any questions..."
                      className={`w-full px-4 py-2.5 bg-slate-50 border ${
                        errors.message ? 'border-red-500' : 'border-slate-200'
                      } rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all resize-none`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full transition-all shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 7. RELATED SERVICES SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-100">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Related Services
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Explore our other Web3 development services.
              </p>
            </div>

            <button
              onClick={() => onNavClick('services', '#services')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Compact Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((item) => (
              <div
                key={item.slug}
                onClick={() => {
                  window.location.hash = `/services/${item.slug}`
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/assets/cs-hero.jpg'
                    }}
                  />
                </div>

                <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <DarkFooter onNavClick={onNavClick} />
    </div>
  )
}
