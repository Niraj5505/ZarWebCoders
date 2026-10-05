import React from 'react'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'

export default function Footer({ onDiscussClick, onNavClick }) {
  const quickLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  const serviceLinks = [
    { label: 'Smart Contracts', href: '#services' },
    { label: 'dApp Development', href: '#services' },
    { label: 'Wallet Integrations', href: '#services' },
    { label: 'Blockchain Infrastructure', href: '#services' },
  ]

  const handleLink = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="pt-16 pb-8 bg-white border-t border-slate-200/80 text-left">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <a href="#home" onClick={(e) => handleLink(e, '#home')} className="mb-4">
              <Logo />
            </a>
            <p className="text-[13px] text-slate-500 leading-relaxed max-w-[220px]">
              Engineering secure smart contracts, dApps, and blockchain infrastructure for the next generation of the web.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-bold text-slate-900 tracking-tight mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLink(e, item.href)}
                    className="text-[13px] text-slate-500 hover:text-emerald-700 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-bold text-slate-900 tracking-tight mb-4">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLink(e, item.href)}
                    className="text-[13px] text-slate-500 hover:text-emerald-700 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get In Touch */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-bold text-slate-900 tracking-tight mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3 mb-5">
              <a
                href="mailto:hello@zarwebcoders.in"
                className="flex items-center gap-2 text-[13px] text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>hello@zarwebcoders.in</span>
              </a>
              <div className="flex items-center gap-2 text-[13px] text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>India (Remote &amp; On-site)</span>
              </div>
            </div>

            <button
              onClick={onDiscussClick}
              className="inline-flex items-center gap-2 bg-[#eaf6ee] hover:bg-[#d9efe0] text-[#1e874c] font-semibold text-[13px] px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Col 5: Right CTA message */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <p className="text-[14px] font-medium text-slate-800 leading-snug mb-3">
              Let's build your <br />
              <span className="font-semibold text-slate-900">Web3 product together.</span>
            </p>
            <div className="w-10 h-1 bg-emerald-500 rounded-full" />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-400">
          <p>© 2025 ZarWebCoders. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
