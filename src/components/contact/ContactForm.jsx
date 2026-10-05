import React, { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { PROJECT_TYPES } from '../../data/contactData'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Select a service',
    subject: '',
    message: '',
    agreePrivacy: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please enter your name'
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address'
    }
    if (formData.projectType === 'Select a service') {
      errs.projectType = 'Please select a project type'
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject'
    if (!formData.message.trim()) errs.message = 'Please enter your message'
    if (!formData.agreePrivacy) {
      errs.agreePrivacy = 'You must agree to the Privacy Policy & Terms of Service'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1200)
  }

  return (
    <div id="contact-form-card" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
      <div className="space-y-2 mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Send Us a Message
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Fill out the form below and our team will get back to you soon.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-fade-in my-6">
          <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <Check className="w-7 h-7 stroke-[3]" />
          </div>
          <h3 className="text-xl font-bold text-emerald-950">
            Message Sent Successfully!
          </h3>
          <p className="text-emerald-800 text-sm max-w-md mx-auto leading-relaxed">
            Thanks! Your message has been received. Our team will get back to you shortly.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false)
              setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: 'Select a service',
                subject: '',
                message: '',
                agreePrivacy: false,
              })
            }}
            className="inline-flex items-center px-5 py-2.5 bg-emerald-700 text-white rounded-full text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* ROW 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
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
                onChange={(e) => handleChange('email', e.target.value)}
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

          {/* ROW 2: Phone & Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Phone Number
              </label>
              <div className="flex items-center gap-2">
                <div className="px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-1 shrink-0">
                  <span>🇮🇳 +91</span>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => handleChange('projectType', e.target.value)}
                className={`w-full px-4 py-2.5 bg-slate-50 border ${
                  errors.projectType ? 'border-red-500' : 'border-slate-200'
                } rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all`}
              >
                {PROJECT_TYPES.map((pt) => (
                  <option key={pt} value={pt} disabled={pt === 'Select a service'}>
                    {pt}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <span className="text-[11px] text-red-500 mt-1 block">
                  {errors.projectType}
                </span>
              )}
            </div>
          </div>

          {/* ROW 3: Subject */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Subject *
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              placeholder="What's this about?"
              className={`w-full px-4 py-2.5 bg-slate-50 border ${
                errors.subject ? 'border-red-500' : 'border-slate-200'
              } rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all`}
            />
            {errors.subject && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.subject}
              </span>
            )}
          </div>

          {/* ROW 4: Message */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Your Message *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your project, requirements, or any questions..."
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

          {/* Checkbox: Privacy Policy and Terms of Service */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.agreePrivacy}
                onChange={(e) => handleChange('agreePrivacy', e.target.checked)}
                className="mt-1 w-4 h-4 rounded-sm border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I agree to the{' '}
                <a href="#privacy" className="text-emerald-700 underline hover:text-emerald-800">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#terms" className="text-emerald-700 underline hover:text-emerald-800">
                  Terms of Service
                </a>
              </span>
            </label>
            {errors.agreePrivacy && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.agreePrivacy}
              </span>
            )}
          </div>

          {/* Submit Button (Aligned Right) */}
          <div className="flex justify-end pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
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
  )
}
