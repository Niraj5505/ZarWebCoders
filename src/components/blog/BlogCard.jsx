import React from 'react'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

export default function BlogCard({ article, onClick }) {
  return (
    <article
      onClick={() => onClick(article)}
      className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer h-full"
    >
      {/* Cover Image with Category Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          decoding="async"
          width={1376}
          height={768}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/assets/cs-hero.jpg'
          }}
        />
        {/* Category Pill Overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200/60 shadow-xs">
            {article.category}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Article Title */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          {/* Article Excerpt */}
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 space-y-3">
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-7 h-7 rounded-full object-cover border border-slate-200"
                loading="lazy"
                decoding="async"
                width={480}
                height={400}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/headshot-abuzar.png'
                }}
              />
              <span className="text-xs font-medium text-slate-700">
                By {article.author}
              </span>
            </div>

            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          {/* Date & Reading Time */}
          <div className="flex items-center gap-3 text-[12px] text-slate-500 font-normal">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
