import React, { useState } from 'react'
import { Check, ArrowRight, Loader2 } from 'lucide-react'

export default function ConsultationForm({ defaultProjectType = 'Smart Contract Development' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: defaultProjectType,
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

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

  return (
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
                      projectType: defaultProjectType,
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
  )
}
