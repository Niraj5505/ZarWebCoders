import React, { useState, useMemo } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  TrendingUp,
  ChevronDown,
  Shield,
  Globe2,
  Users,
} from 'lucide-react'
import { CASE_STUDIES, CATEGORIES, SORT_OPTIONS } from '../data/caseStudiesData'
import DarkFooter from '../components/DarkFooter'
import CaseStudyDetail from '../components/case-study/CaseStudyDetail'

/* ─────────────────────────────────────────────── */
/*  Helper: Category badge colours                 */
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

/* ─────────────────────────────────────────────── */
/*  Tech pill                                      */
/* ─────────────────────────────────────────────── */
function TechPill({ label }) {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block flex-shrink-0" />
      {label}
    </span>
  )
}

/* ─────────────────────────────────────────────── */
/*  Single Case Study Card                         */
/* ─────────────────────────────────────────────── */
function CaseStudyCard({ study, onSelect }) {
  return (
    <div
      onClick={() => onSelect(study)}
      className="group bg-white border border-slate-200 hover:border-emerald-300 rounded-[18px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase ${categoryBadgeClass(
            study.category
          )}`}
        >
          {study.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[15px] font-bold text-slate-900 tracking-tight mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
          {study.title}
        </h3>
        <p className="text-[12.5px] text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {study.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            {study.techs.map((t) => (
              <TechPill key={t} label={t} />
            ))}
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
              <Clock className="w-3 h-3" />
              {study.duration}
            </span>
          </div>
          <span className="text-[11.5px] font-semibold text-emerald-600 hover:text-emerald-700 whitespace-nowrap flex items-center gap-1 transition-colors">
            View Case Study
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────── */
/*  Hero Section                                   */
/* ─────────────────────────────────────────────── */
function CaseStudiesHero() {
  return (
    <section className="pt-28 pb-0 relative overflow-hidden bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="py-8 lg:py-12">
            <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-600 uppercase mb-4 block">
              Case Studies
            </span>
            <h1 className="text-[42px] sm:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Real Solutions.<br />
              Real Impact.
            </h1>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-8 max-w-[420px]">
              Explore how we've helped businesses, startups, and innovators
              build secure, scalable, and high-performance Web3 solutions.
              Each project reflects our commitment to quality, innovation,
              and long-term success.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[17px] font-extrabold text-slate-900 leading-none">12+</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Successful Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[17px] font-extrabold text-slate-900 leading-none">8+</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[17px] font-extrabold text-slate-900 leading-none">3+</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Blockchain Networks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex items-end justify-end h-full">
            <div className="relative w-full max-w-[560px]">
              <img
                src="/assets/cs-hero.jpg"
                alt="ZarWebCoders Web3 Development"
                className="w-full h-[340px] object-cover object-center rounded-t-2xl shadow-xl"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-700">Smart Contracts</span>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-[11px] font-semibold text-slate-700">dApps</span>
              </div>
              <div className="absolute top-[44%] right-4 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[11px] font-semibold text-slate-700">Web3 Integration</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-emerald-600 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
                <span className="text-[11px] font-semibold text-white">From Concept to Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────── */
/*  Filter + Sort Bar                              */
/* ─────────────────────────────────────────────── */
function FilterBar({ activeCategory, setActiveCategory, sortBy, setSortBy }) {
  const [sortOpen, setSortOpen] = useState(false)
  const currentSort = SORT_OPTIONS.find((o) => o.value === sortBy)

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[12.5px] font-semibold px-4 py-2 rounded-full border transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="relative flex-shrink-0">
        <div className="flex items-center gap-2 text-[12.5px] text-slate-500">
          <span className="font-medium text-slate-400">Sort by</span>
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-1.5 text-slate-700 font-semibold border border-slate-200 rounded-full px-3 py-1.5 bg-white hover:border-slate-300 transition-colors cursor-pointer"
          >
            {currentSort?.label}
            <ChevronDown
              className={`w-3.5 h-3.5 text-slate-400 transition-transform ${sortOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {sortOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-100 rounded-xl shadow-xl z-10 overflow-hidden">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setSortBy(opt.value); setSortOpen(false) }}
                className={`w-full text-left px-4 py-2.5 text-[12.5px] font-medium transition-colors cursor-pointer ${
                  sortBy === opt.value ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────── */
/*  Featured Case Study Banner                     */
/* ─────────────────────────────────────────────── */
function FeaturedCaseStudy({ study, onViewFeatured }) {
  if (!study) return null

  return (
    <div className="mt-12 rounded-[22px] border border-slate-200 overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-2 relative min-h-[240px]">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              Featured Case Study
            </span>
          </div>
          <button
            onClick={() => onViewFeatured()}
            className="absolute bottom-5 right-5 bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg">
            View Full Case Study
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="lg:col-span-3 p-7 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryBadgeClass(study.category)}`}>
              {study.category}
            </span>
            <span className="text-slate-300 text-xs">•</span>
            {study.techs.map((t) => (
              <span key={t} className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{t}</span>
            ))}
            <span className="text-slate-300 text-xs">•</span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{study.duration}</span>
          </div>

          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {study.title}
          </h2>

          <p className="text-[14px] text-slate-500 leading-relaxed mb-8 max-w-[480px]">
            {study.featuredDescription}
          </p>

          {study.stats && (
            <div className="flex flex-wrap items-center gap-8">
              {study.stats.map((stat, i) => {
                const icons = [
                  <Shield key="s" className="w-5 h-5 text-emerald-500" />,
                  <Zap key="z" className="w-5 h-5 text-emerald-500" />,
                  <TrendingUp key="t" className="w-5 h-5 text-emerald-500" />,
                ]
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      {icons[i % icons.length]}
                    </div>
                    <div>
                      <p className="text-[20px] font-extrabold text-slate-900 leading-none">{stat.value}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────── */
/*  CTA Section                                    */
/* ─────────────────────────────────────────────── */
function CaseStudiesCTA({ onDiscussClick }) {
  return (
    <section className="my-16">
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
              Whether you need a smart contract, dApp, or full Web3 integration,
              we're here to help. Let's turn your idea into a secure and scalable solution.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={onDiscussClick}
              className="group inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-emerald-50 text-[13px] font-bold px-5 py-3 rounded-full transition-all duration-200 shadow-lg cursor-pointer"
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
/*  Main Page                                      */
/* ─────────────────────────────────────────────── */
export default function CaseStudiesPage({ onDiscussClick, onNavClick }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedStudy, setSelectedStudy] = useState(null)

  const featured = useMemo(() => CASE_STUDIES.find((s) => s.featured) || null, [])

  const filtered = useMemo(() => {
    let list =
      activeCategory === 'All'
        ? [...CASE_STUDIES]
        : CASE_STUDIES.filter((s) => s.category === activeCategory)

    if (sortBy === 'newest') list.sort((a, b) => new Date(b.date) - new Date(a.date))
    else if (sortBy === 'oldest') list.sort((a, b) => new Date(a.date) - new Date(b.date))
    else if (sortBy === 'name') list.sort((a, b) => a.title.localeCompare(b.title))

    return list
  }, [activeCategory, sortBy])

  const handleSelectStudy = (study) => {
    setSelectedStudy(study)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setSelectedStudy(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ── Detail view ──────────────────────────────────────────────
  if (selectedStudy) {
    return (
      <CaseStudyDetail
        study={selectedStudy}
        onBack={handleBack}
        onDiscussClick={onDiscussClick}
        onNavClick={onNavClick}
        onViewCaseStudy={handleSelectStudy}
      />
    )
  }

  // ── Grid view ────────────────────────────────────────────────
  return (
    <>
      <CaseStudiesHero />

      <section className="py-12 bg-[#f9fafb]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-100 mb-8" />
          <FilterBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((study) => (
                <CaseStudyCard key={study.id} study={study} onSelect={handleSelectStudy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-slate-400 text-[15px]">No case studies found for this category.</p>
            </div>
          )}

          {activeCategory === 'All' && (
            <FeaturedCaseStudy study={featured} onViewFeatured={() => featured && handleSelectStudy(featured)} />
          )}
        </div>
      </section>

      <CaseStudiesCTA onDiscussClick={onDiscussClick} />
      <DarkFooter onNavClick={onNavClick} />
    </>
  )
}
