import React, { useState } from 'react'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Copy,
  Check,
  Tag,
  ArrowRight,
} from 'lucide-react'
import { BLOG_ARTICLES } from '../../data/blogData'
import BlogCard from './BlogCard'
import DarkFooter from '../DarkFooter'

export default function ArticleDetailPage({ article, onBack, onSelectArticle, onDiscussClick, onNavClick }) {
  const [copied, setCopied] = useState(false)

  if (!article) return null

  // Find related articles (same category or next ones)
  const relatedArticles = BLOG_ARTICLES.filter(
    (a) => a.id !== article.id
  ).slice(0, 3)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Format markdown-like content blocks safely into formatted components
  const renderContent = (contentStr) => {
    if (!contentStr) return null

    const paragraphs = contentStr.trim().split('\n\n')

    return paragraphs.map((para, idx) => {
      const trimmed = para.trim()

      if (trimmed.startsWith('### ')) {
        return (
          <h3
            key={idx}
            className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-4 tracking-tight"
          >
            {trimmed.replace('### ', '')}
          </h3>
        )
      }

      if (trimmed.startsWith('```')) {
        const lines = trimmed.split('\n')
        const lang = lines[0].replace('```', '') || 'code'
        const codeText = lines.slice(1, -1).join('\n')

        return (
          <div key={idx} className="my-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg">
            <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800">
              <span className="uppercase text-emerald-400 font-semibold">{lang}</span>
              <span>ZarWebCoders Snippet</span>
            </div>
            <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-emerald-300 overflow-x-auto leading-relaxed">
              <code>{codeText}</code>
            </pre>
          </div>
        )
      }

      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map((item) => item.replace('- ', ''))
        return (
          <ul key={idx} className="my-4 space-y-2 text-slate-700 text-base leading-relaxed pl-5 list-disc marker:text-emerald-600">
            {items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        )
      }

      if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ')) {
        const items = trimmed.split('\n')
        return (
          <ol key={idx} className="my-4 space-y-2 text-slate-700 text-base leading-relaxed pl-5 list-decimal marker:text-emerald-700 font-medium">
            {items.map((it, i) => (
              <li key={i}>{it.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        )
      }

      return (
        <p key={idx} className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
          {trimmed}
        </p>
      )
    })
  }

  return (
    <div className="bg-[#fbfcfb] min-h-screen pt-24 pb-12">
      {/* Top Header / Breadcrumb */}
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/60 px-4 py-2 rounded-full transition-all cursor-pointer mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog & Insights</span>
        </button>

        {/* Category & Meta */}
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full border border-emerald-200">
            <Tag className="w-3.5 h-3.5" />
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {article.title}
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author & Date Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/30 shadow-xs"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/portrait-abuzar.png'
                }}
              />
              <div>
                <div className="text-slate-900 font-bold text-sm sm:text-base">
                  {article.author}
                </div>
                <div className="text-slate-500 text-xs font-medium">
                  {article.authorRole || 'Web3 Engineering Team'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Cover Image */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[21/9] bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = '/assets/cs-hero.jpg'
            }}
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="prose prose-emerald max-w-none">
          {renderContent(article.content)}
        </div>

        {/* Share & Social Links */}
        <div className="my-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <Share2 className="w-4 h-4 text-emerald-600" />
            <span>Share this article:</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on X (Twitter)"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-700 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?title=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-700 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="p-6 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl flex items-start gap-4 my-8">
          <img
            src={article.authorImage}
            alt={article.author}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = '/assets/portrait-abuzar.png'
            }}
          />
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">
              Written by {article.author}
            </h4>
            <p className="text-xs text-emerald-800 font-medium">
              {article.authorRole} at ZarWebCoders
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
              Building next-generation Web3 protocols, audited smart contracts, and decentralized enterprise applications for global clients.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((item) => (
            <BlogCard key={item.id} article={item} onClick={onSelectArticle} />
          ))}
        </div>
      </div>

      {/* Article Page Bottom CTA */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#0d3b2e] via-[#092920] to-[#051a14] p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="px-3.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider border border-emerald-500/30">
              WE BUILD WEB3 SOLUTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ready to Launch Your Web3 Project?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From smart contract auditing to custom dApp engineering, ZarWebCoders delivers secure, scalable Web3 software solutions.
            </p>
            <button
              onClick={onDiscussClick}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-xl hover:shadow-emerald-500/20 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Dark Footer */}
      <DarkFooter onNavClick={onNavClick} />
    </div>
  )
}
