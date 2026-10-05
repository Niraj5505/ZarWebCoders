import React, { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  Layers,
  Network,
  Users,
  Wallet,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Quote,
  ExternalLink,
} from 'lucide-react'
import { CASE_STUDIES } from '../../data/caseStudiesData'
import DarkFooter from '../DarkFooter'

/* ─────────────────────────────────────────────── */
/*  Helpers                                        */
/* ─────────────────────────────────────────────── */
function categoryBadgeClass(category) {
  const map = {
    'Smart Contracts': 'bg-emerald-700 text-white',
    'dApp Development': 'bg-violet-700 text-white',
    'Blockchain Integration': 'bg-blue-700 text-white',
    'Web3 Infrastructure': 'bg-indigo-700 text-white',
    Consulting: 'bg-amber-600 text-white',
  }
  return map[category] || 'bg-slate-700 text-white'
}

function metricIcon(icon) {
  const cls = 'w-5 h-5 text-emerald-600'
  const map = {
    shield: <Shield className={cls} />,
    zap: <Zap className={cls} />,
    clock: <Clock className={cls} />,
    layers: <Layers className={cls} />,
    trending: <TrendingUp className={cls} />,
    network: <Network className={cls} />,
    users: <Users className={cls} />,
    wallet: <Wallet className={cls} />,
    image: <ImageIcon className={cls} />,
  }
  return map[icon] || <CheckCircle2 className={cls} />
}

/* ─────────────────────────────────────────────── */
/*  Breadcrumb                                     */
/* ─────────────────────────────────────────────── */
function Breadcrumb({ study, onBack }) {
  return (
    <div className="pt-28 pb-0 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 text-[12px] text-slate-500 mb-0">
        <button
          onClick={onBack}
          className="hover:text-emerald-600 transition-colors cursor-pointer font-medium"
        >
          Case Studies
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-700 font-semibold truncate max-w-[220px]">{study.title}</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────── */
/*  Hero Section                                   */
/* ─────────────────────────────────────────────── */
function CaseStudyHero({ study, onBack }) {
  return (
    <section className="pt-6 pb-0 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="py-8 lg:py-12">
            {/* Category + meta pill row */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryBadgeClass(
                  study.category
                )}`}
              >
                {study.category}
              </span>
              {study.techs.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50"
                >
                  {t}
                </span>
              ))}
              <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {study.duration}
              </span>
            </div>

            <h1 className="text-[38px] sm:text-[48px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
              {study.title}
            </h1>

            <p className="text-[15px] text-slate-500 leading-relaxed mb-6 max-w-[480px]">
              {study.overview}
            </p>

            {/* Project meta */}
            <div className="flex flex-wrap gap-5 text-[13px] text-slate-600 border-t border-slate-100 pt-5">
              {study.client && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Client</p>
                  <p className="font-semibold text-slate-800">{study.client}</p>
                </div>
              )}
              {study.industry && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Industry</p>
                  <p className="font-semibold text-slate-800">{study.industry}</p>
                </div>
              )}
              {study.network && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Network</p>
                  <p className="font-semibold text-slate-800">{study.network}</p>
                </div>
              )}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Duration</p>
                <p className="font-semibold text-slate-800">{study.duration}</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={study.heroImage || study.image}
                alt={study.title}
                className="w-full h-[380px] object-cover object-center"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            </div>
            {/* Floating pill */}
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm border border-emerald-100 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-slate-700">{study.category}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Metrics Bar                                    */
/* ─────────────────────────────────────────────── */
function MetricsBar({ metrics }) {
  if (!metrics?.length) return null
  return (
    <section className="py-10 bg-[#f4fbf7] border-y border-emerald-100/60">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-emerald-100 flex items-center justify-center flex-shrink-0 shadow-xs">
                {metricIcon(m.icon)}
              </div>
              <div>
                <p className="text-[22px] font-extrabold text-slate-900 leading-none">{m.value}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Challenge + Solution                           */
/* ─────────────────────────────────────────────── */
function ChallengeSolution({ study }) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Challenge */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-3 block">
              The Challenge
            </span>
            <h2 className="text-[26px] sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              What We Were<br />Up Against
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-3 block">
              Our Solution
            </span>
            <h2 className="text-[26px] sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              How We Solved It
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed mb-6">{study.solution}</p>

            {/* Highlights checklist */}
            {study.highlights?.length > 0 && (
              <ul className="space-y-2.5">
                {study.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Screenshot Carousel                            */
/* ─────────────────────────────────────────────── */
function ScreenshotCarousel({ screenshots }) {
  const [current, setCurrent] = useState(0)
  if (!screenshots?.length) return null

  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length)
  const next = () => setCurrent((c) => (c + 1) % screenshots.length)

  return (
    <section className="py-14 bg-[#f9fafb]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-3 block">
            Project Screenshots
          </span>
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight">
            See It in Action
          </h2>
        </div>

        <div className="relative rounded-[20px] overflow-hidden border border-slate-200 shadow-lg bg-white">
          <img
            src={screenshots[current].src}
            alt={screenshots[current].caption}
            className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent px-6 py-5 flex items-end justify-between">
            <span className="text-white text-[13px] font-semibold">{screenshots[current].caption}</span>
            <div className="flex items-center gap-1">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    i === current ? 'bg-emerald-400 w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Prev / Next */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {screenshots.length > 1 && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  i === current ? 'border-emerald-500 shadow-md' : 'border-transparent opacity-60 hover:opacity-90'
                }`}
              >
                <img src={s.src} alt={s.caption} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Development Process                            */
/* ─────────────────────────────────────────────── */
function ProcessSection({ process }) {
  if (!process?.length) return null
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Delivered It
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+0px)] w-full h-px bg-gradient-to-r from-emerald-200 to-transparent z-0 -translate-y-1/2" />
              )}

              <div className="relative bg-white border border-slate-200 rounded-[16px] p-5 hover:border-emerald-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-[13px] font-extrabold text-emerald-700">{p.step}</span>
                </div>
                <h3 className="text-[14px] font-bold text-slate-900 mb-2 leading-snug">{p.title}</h3>
                <p className="text-[12.5px] text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Tech Stack                                     */
/* ─────────────────────────────────────────────── */
function TechStackSection({ techStack }) {
  if (!techStack?.length) return null
  return (
    <section className="py-14 bg-[#f9fafb]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-3 block">
            Technology
          </span>
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Stack Used
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {techStack.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 hover:border-emerald-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="text-[13px] font-semibold text-slate-800">{t.label}</span>
              <span className="text-[11px] text-slate-400 font-normal">/ {t.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Testimonial                                    */
/* ─────────────────────────────────────────────── */
function TestimonialSection({ testimonial }) {
  if (!testimonial) return null
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f4fbf7] border border-emerald-100 rounded-[22px] px-8 sm:px-12 py-10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-4 right-8 opacity-10">
            <Quote className="w-20 h-20 text-emerald-600" />
          </div>

          <div className="relative z-10 max-w-[680px]">
            <Quote className="w-8 h-8 text-emerald-400 mb-4" />
            <p className="text-[17px] sm:text-[20px] font-medium text-slate-800 leading-relaxed mb-7 italic">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                loading="lazy"
                decoding="async"
                width={480}
                height={400}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/headshot-abuzar.png'
                }}
              />
              <div>
                <p className="text-[14px] font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-[12px] text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Related Case Studies                           */
/* ─────────────────────────────────────────────── */
function RelatedCaseStudies({ study, onViewCaseStudy }) {
  const related = (study.relatedSlugs || [])
    .map((slug) => CASE_STUDIES.find((s) => s.slug === slug))
    .filter(Boolean)
    .slice(0, 3)

  if (!related.length) return null

  return (
    <section className="py-14 bg-[#f9fafb]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-3 block">
            More Projects
          </span>
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Related Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((s) => (
            <div
              key={s.id}
              onClick={() => onViewCaseStudy && onViewCaseStudy(s)}
              className="group bg-white border border-slate-200 hover:border-emerald-300 rounded-[18px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase ${categoryBadgeClass(
                    s.category
                  )}`}
                >
                  {s.category}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-[15px] font-bold text-slate-900 tracking-tight mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
                  {s.title}
                </h3>
                <p className="text-[12.5px] text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-2">
                  {s.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    {s.techs.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11.5px] font-semibold text-emerald-600 whitespace-nowrap flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  CTA Section                                    */
/* ─────────────────────────────────────────────── */
function CaseStudyCTA({ onDiscussClick }) {
  return (
    <section className="py-16">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[22px] bg-[#091b13] overflow-hidden px-8 sm:px-12 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            src="/assets/about-values-cubes.png"
            alt=""
            aria-hidden
            className="absolute right-0 top-0 h-full w-auto max-w-[320px] object-cover opacity-30 pointer-events-none select-none"
          />
          <div className="relative z-10 flex-1">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-3">
              Let's Build Your Web3 Solution
            </p>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-white leading-tight mb-3 tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-[14px] text-slate-300 leading-relaxed max-w-[440px]">
              Whether you need a smart contract, dApp, or full Web3 integration, we're here to help.
              Let's turn your idea into a secure and scalable solution.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={onDiscussClick}
              className="group inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-emerald-50 text-[13px] font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-lg cursor-pointer"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Main CaseStudyDetail Page                      */
/* ─────────────────────────────────────────────── */
export default function CaseStudyDetail({
  study,
  onBack,
  onDiscussClick,
  onNavClick,
  onViewCaseStudy,
}) {
  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 text-[15px] mb-4">Case study not found.</p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-[13px] cursor-pointer hover:text-emerald-700"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb study={study} onBack={onBack} />

      {/* Hero */}
      <CaseStudyHero study={study} onBack={onBack} />

      {/* Metrics Bar */}
      {study.metrics && <MetricsBar metrics={study.metrics} />}

      {/* Challenge + Solution */}
      {(study.challenge || study.solution) && <ChallengeSolution study={study} />}

      {/* Screenshots Carousel */}
      {study.screenshots?.length > 0 && <ScreenshotCarousel screenshots={study.screenshots} />}

      {/* Development Process */}
      {study.process?.length > 0 && <ProcessSection process={study.process} />}

      {/* Tech Stack */}
      {study.techStack?.length > 0 && <TechStackSection techStack={study.techStack} />}

      {/* Testimonial */}
      {study.testimonial && <TestimonialSection testimonial={study.testimonial} />}

      {/* Related Case Studies */}
      <RelatedCaseStudies study={study} onViewCaseStudy={onViewCaseStudy} />

      {/* CTA */}
      <CaseStudyCTA onDiscussClick={onDiscussClick} />

      {/* Footer */}
      <DarkFooter onNavClick={onNavClick} />
    </>
  )
}
