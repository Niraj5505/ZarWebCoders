import React, { useState } from 'react'
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function NewsletterCard() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
    }, 3000)
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
        <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-700">
          <Mail className="w-4 h-4" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Newsletter</h3>
      </div>

      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
        Get the latest Web3 insights and updates straight to your inbox.
      </p>

      {subscribed ? (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-800 text-xs font-semibold animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Thank you! You've subscribed to Web3 Insights.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full pl-3.5 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              title="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-slate-400 text-center">
            No spam. Unsubscribe anytime with 1-click.
          </p>
        </form>
      )}
    </div>
  )
}
