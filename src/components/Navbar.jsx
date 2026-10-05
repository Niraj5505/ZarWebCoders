import React, { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navbar({ currentPage = 'home', onPageChange, onDiscussClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', page: 'home', href: '#home' },
    { label: 'Services', page: 'services', href: '#services' },
    { label: 'Case Studies', page: 'case-studies', href: '#case-studies' },
    { label: 'About', page: 'about', href: '#about' },
    { label: 'Blog', page: 'blog', href: '#blog' },
    { label: 'Contact', page: 'contact', href: '#contact' },
  ]

  const handleNavClick = (e, item) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (item.page === 'about') {
      if (onPageChange) onPageChange('about')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.location.hash = '/about'
      return
    }

    if (item.page === 'case-studies') {
      if (onPageChange) onPageChange('case-studies')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.location.hash = '/case-studies'
      return
    }

    if (item.page === 'blog') {
      if (onPageChange) onPageChange('blog')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.location.hash = '/blog'
      return
    }

    if (item.page === 'services') {
      if (onPageChange) onPageChange('services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.location.hash = '/services'
      return
    }

    if (item.page === 'contact') {
      if (onPageChange) onPageChange('contact')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.location.hash = '/contact'
      return
    }

    // Home or sub-sections on home
    if (currentPage !== 'home') {
      if (onPageChange) onPageChange('home')
      window.location.hash = item.href
      setTimeout(() => {
        const target = document.querySelector(item.href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 50)
    } else {
      const target = document.querySelector(item.href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-100 shadow-xs py-3.5'
          : 'bg-white/80 backdrop-blur-xs py-4 md:py-5 border-b border-slate-100/60 md:border-transparent'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, { page: 'home', href: '#home' })}
            className="focus:outline-hidden"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navItems.map((item) => {
              const isActive =
                currentPage === 'about'
                  ? item.page === 'about'
                  : currentPage === 'case-studies'
                  ? item.page === 'case-studies'
                  : currentPage === 'blog'
                  ? item.page === 'blog'
                  : currentPage === 'services'
                  ? item.page === 'services'
                  : currentPage === 'contact'
                  ? item.page === 'contact'
                  : item.label === 'Home'

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-[14px] transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-emerald-700 font-normal'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onDiscussClick}
              className="group inline-flex items-center gap-2 bg-[#171a1d] hover:bg-[#23272c] text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 text-slate-300" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-100 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                currentPage === 'about'
                  ? item.page === 'about'
                  : currentPage === 'case-studies'
                  ? item.page === 'case-studies'
                  : currentPage === 'blog'
                  ? item.page === 'blog'
                  : currentPage === 'services'
                  ? item.page === 'services'
                  : currentPage === 'contact'
                  ? item.page === 'contact'
                  : item.label === 'Home'

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`py-2 text-[15px] px-3 rounded-lg transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onDiscussClick()
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#171a1d] text-white text-[14px] font-medium py-2.5 rounded-full shadow-xs cursor-pointer"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
