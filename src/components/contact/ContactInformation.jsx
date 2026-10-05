import React, { useState } from 'react'
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react'
import { CONTACT_INFO } from '../../data/contactData'
import BookCallModal from './BookCallModal'

export default function ContactInformation() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md flex flex-col justify-between space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Contact Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reach us through any of the following channels.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            {/* 1. Email Us */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email Us
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors block"
                >
                  {CONTACT_INFO.email}
                </a>
                <p className="text-xs text-slate-500">
                  {CONTACT_INFO.emailSubtext}
                </p>
              </div>
            </div>

            {/* 2. Call Us */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Call Us
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors block"
                >
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-xs text-slate-500">
                  {CONTACT_INFO.phoneSubtext}
                </p>
              </div>
            </div>

            {/* 3. Our Office */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Our Office
                </div>
                <div className="text-base font-bold text-slate-900">
                  {CONTACT_INFO.office}
                </div>
                <p className="text-xs text-slate-500">
                  {CONTACT_INFO.officeSubtext}
                </p>
              </div>
            </div>

            {/* 4. Follow Us */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Follow Us
              </div>
              <div className="flex items-center gap-3">
                {CONTACT_INFO.socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full bg-slate-50 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer"
                  >
                    {s.key === 'linkedin' && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    )}
                    {s.key === 'x' && (
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {s.key === 'github' && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                    )}
                    {s.key === 'youtube' && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                    {s.key === 'telegram' && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Direct Discussion Card */}
        <div className="bg-[#f4fbf7] rounded-2xl p-5 border border-emerald-200/80 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>Prefer a Direct Discussion?</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Schedule a free consultation call with our Web3 experts.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Book Call Modal */}
      <BookCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
