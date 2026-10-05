import React, { useState } from 'react'
import { Send, Mail, MapPin, CheckCircle2, Clock } from 'lucide-react'

export default function ContactSection({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: selectedService || 'Smart Contract Development',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Smart Contract Development',
      message: '',
    })
    setStatus('idle')
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-200/90 rounded-[22px] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Heading and Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase mb-2 block">
                  LET'S CONNECT
                </span>
                <h2 className="text-[32px] sm:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-4">
                  Discuss a Project
                </h2>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-8">
                  Have an idea for a Web3 product or need custom blockchain engineering? Share your project details and our team will get back to you within 24 hours.
                </p>

                {/* Direct info items */}
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Direct Inquiries</p>
                      <a href="mailto:hello@zarwebcoders.in" className="text-[14px] font-semibold hover:text-emerald-600 transition-colors">
                        hello@zarwebcoders.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Headquarters</p>
                      <p className="text-[14px] font-semibold">India (Remote &amp; On-site Worldwide)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Fast Turnaround</p>
                      <p className="text-[14px] font-semibold">Initial estimate within 24–48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Tag */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-[12px] text-slate-500">
                🔒 We respect intellectual property. All project discussions are covered by mutual NDA upon request.
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center p-8 bg-emerald-50/40 rounded-2xl border border-emerald-200/70">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-[14px] text-slate-600 max-w-md mb-6">
                    Thank you for reaching out to ZarWebCoders. Our blockchain solutions team is reviewing your project details and will be in touch shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-[13px] font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1.5" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-[14px] text-slate-800 transition-all bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1.5" htmlFor="email">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-[14px] text-slate-800 transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1.5" htmlFor="company">
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nexus Labs"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-[14px] text-slate-800 transition-all bg-white"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-[12px] font-semibold text-slate-700 mb-1.5" htmlFor="projectType">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-[14px] text-slate-800 transition-all bg-white"
                      >
                        <option value="Smart Contract Development">Smart Contract Development</option>
                        <option value="Full-Stack dApp Development">Full-Stack dApp Development</option>
                        <option value="Wallet & Web3 Integration">Wallet & Web3 Integration</option>
                        <option value="Blockchain Infrastructure">Blockchain Infrastructure</option>
                        <option value="Smart Contract Security Audit">Security Audit & Code Review</option>
                        <option value="Other Web3 Engineering">Other Web3 Engineering</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[12px] font-semibold text-slate-700 mb-1.5" htmlFor="message">
                      Project Overview &amp; Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your target blockchain, timeline, features, or architecture requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-[14px] text-slate-800 transition-all bg-white resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#239c59] hover:bg-[#1e874c] text-white font-medium text-[14px] px-8 py-3 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
                    >
                      <span>{status === 'submitting' ? 'Sending Details...' : 'Send Project Inquiry'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
