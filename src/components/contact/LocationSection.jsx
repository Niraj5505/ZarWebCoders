import React from 'react'
import { MapPin, Clock, ArrowRight, Navigation } from 'lucide-react'
import { CONTACT_INFO } from '../../data/contactData'

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map Card */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md aspect-[16/10] sm:aspect-auto min-h-[340px] bg-slate-100">
            {/* Embedded Google Maps View (Ahmedabad, Gujarat, India) */}
            <iframe
              title="ZarWebCoders Office Location - Ahmedabad, India"
              src="https://maps.google.com/maps?q=Ahmedabad%2C%20Gujarat%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Overlay Marker Card */}
            <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 leading-tight">
                  ZarWebCoders
                </div>
                <div className="text-xs text-slate-500 font-normal leading-tight mt-0.5">
                  Ahmedabad, Gujarat, India
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Location Info Card */}
          <div className="lg:col-span-5 bg-[#f4fbf7] rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider rounded-full border border-emerald-200/60">
                OFFICE HEADQUARTERS
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Location
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We’re based in Ahmedabad, Gujarat, and work with clients worldwide. Visit us for an in-person meeting or schedule a virtual call.
              </p>

              <div className="space-y-3 pt-2">
                {/* Location item */}
                <div className="flex items-start gap-3 p-3 bg-white/80 rounded-2xl border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Ahmedabad, Gujarat, India
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Corporate Technology Hub
                    </div>
                  </div>
                </div>

                {/* Working hours item */}
                <div className="flex items-start gap-3 p-3 bg-white/80 rounded-2xl border border-emerald-100/80 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Operating Hours
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Mon - Sat: 9:00 AM - 7:00 PM (IST)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href={CONTACT_INFO.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md hover:-translate-y-0.5 cursor-pointer group"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
