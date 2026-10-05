import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BlogPagination({ currentPage = 1, totalPages = 10, onPageChange }) {
  const pages = [1, 2, 3, 4, 5, '...', 10]

  return (
    <nav className="flex items-center justify-center gap-1.5 pt-8 pb-4">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-emerald-300 disabled:opacity-40 disabled:hover:text-slate-600 disabled:hover:border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {pages.map((p, idx) => {
        if (p === '...') {
          return (
            <span key={`dots-${idx}`} className="w-9 h-9 flex items-center justify-center text-slate-400 text-xs font-semibold">
              ...
            </span>
          )
        }

        const isActive = currentPage === p

        return (
          <button
            key={p}
            onClick={() => onPageChange && onPageChange(p)}
            className={`w-9 h-9 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
            }`}
          >
            {p}
          </button>
        )
      })}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-emerald-300 disabled:opacity-40 flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  )
}
