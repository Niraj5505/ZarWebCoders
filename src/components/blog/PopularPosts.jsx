import React from 'react'
import { TrendingUp, Calendar } from 'lucide-react'
import { POPULAR_POSTS } from '../../data/blogData'

export default function PopularPosts({ onSelectArticle }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
        <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-700">
          <TrendingUp className="w-4 h-4" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Popular Posts</h3>
      </div>

      <div className="space-y-4">
        {POPULAR_POSTS.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectArticle(item)}
            className="group flex gap-3 items-center cursor-pointer p-1.5 -mx-1.5 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/cs-hero.jpg'
                }}
              />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <h4 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                {item.title}
              </h4>
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
