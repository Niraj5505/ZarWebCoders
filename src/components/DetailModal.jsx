import React, { useEffect } from 'react'
import { X, CheckCircle2, ArrowRight } from 'lucide-react'

export default function DetailModal({ item, type, onClose, onActionClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <span className="text-[11px] font-bold text-emerald-600 tracking-wider uppercase">
              {type === 'service' ? 'Service Overview' : 'Case Study Details'}
            </span>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {item.image && (
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
          )}

          <p className="text-[14px] text-slate-600 leading-relaxed">
            {item.description}
          </p>

          {item.highlights && (
            <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-[13px] text-emerald-950 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{item.highlights}</span>
            </div>
          )}

          {item.tags && (
            <div className="pt-2">
              <p className="text-[12px] font-semibold text-slate-700 mb-2">Core Technologies:</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.client && (
            <div className="pt-2 flex items-center justify-between text-[13px] text-slate-500 border-t border-slate-100 pt-3">
              <span>Client Category: <strong className="text-slate-800">{item.client}</strong></span>
              <span>Network: <strong className="text-slate-800">{item.chain}</strong></span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="text-[13px] font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose()
              if (onActionClick) onActionClick(item)
            }}
            className="inline-flex items-center gap-2 bg-[#239c59] hover:bg-[#1e874c] text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
          >
            <span>Inquire About This</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
