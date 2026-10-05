import React, { useState } from 'react'
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react'
import { FAQS } from '../../data/contactData'

export default function FAQSection({ onDiscussClick }) {
  const [openId, setOpenId] = useState(1) // Default first item open

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-16 md:py-24 bg-[#fbfcfb] border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-100">
          <div className="space-y-2">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Quick answers to common questions about working with us.
            </p>
          </div>

          <button
            onClick={onDiscussClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
          >
            <span>Have More Questions? Discuss With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 FAQ Items in 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 p-5 sm:p-6 bg-white ${
                  isOpen
                    ? 'border-emerald-300 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200/80 shadow-2xs hover:border-emerald-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200'
                      }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pt-3.5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fade-in pl-12">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
