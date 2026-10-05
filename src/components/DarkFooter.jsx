import React, { useState } from 'react'
import Logo from './Logo'

export default function DarkFooter({ onNavClick }) {
  const [email, setEmail] = useState('')

  const quickLinks = [
    { label: 'Home', page: 'home', href: '#home' },
    { label: 'Services', page: 'services', href: '#services' },
    { label: 'Case Studies', page: 'case-studies', href: '#case-studies' },
    { label: 'About', page: 'about', href: '#about' },
    { label: 'Blog', page: 'blog', href: '#blog' },
    { label: 'Contact', page: 'contact', href: '#contact' },
  ]

  const ourServices = [
    'Smart Contracts',
    'dApp Development',
    'Blockchain Integration',
    'Web3 Consulting',
    'Token Engineering',
  ]

  const handleLink = (e, item) => {
    e.preventDefault()
    if (onNavClick) onNavClick(item.page, item.href)
  }

  return (
    <footer className="pt-14 pb-8 bg-[#091b13] text-white text-left">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 pb-12">

          {/* Col 1: Logo, Slogan & Social Icons */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => handleLink(e, { page: 'home', href: '#home' })}
              className="mb-3"
            >
              <Logo dark={true} />
            </a>
            <p className="text-[13px] text-emerald-100/70 font-normal leading-relaxed mt-1 mb-5">
              Build secure, scalable, and innovative Web3 solutions for your business.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-300">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.01-3.28 1.64 1.64 0 0 0 .01 3.28m-1.4 9.74h2.8v-8.37h-2.8v8.37Z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="X">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="Telegram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-bold text-white tracking-tight mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLink(e, item)}
                    className="text-[13px] text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-bold text-white tracking-tight mb-4">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {ourServices.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    onClick={(e) => handleLink(e, { page: 'home', href: '#services' })}
                    className="text-[13px] text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get In Touch */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-bold text-white tracking-tight mb-4">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-2.5 text-[13px] text-slate-300">
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-emerald-400 flex-shrink-0" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@zarwebcoders.in" className="hover:text-emerald-400 transition-colors break-all">
                  info@zarwebcoders.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-emerald-400 flex-shrink-0" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-emerald-400 flex-shrink-0" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Ahmedabad, India</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Updated */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-bold text-white tracking-tight mb-2">
              Stay Updated
            </h4>
            <p className="text-[12px] text-slate-400 mb-4 leading-relaxed">
              Get the latest Web3 insights and updates.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail('') }}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-[12px] text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-emerald-100/60">
          <p>© 2025 ZarWebCoders. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
