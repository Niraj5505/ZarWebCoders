import React from 'react'
import {
  Folder,
  FileCode2,
  Layers,
  Blocks,
  Code2,
  Coins,
  BookOpen,
  Newspaper,
  ChevronRight,
} from 'lucide-react'
import { SIDEBAR_CATEGORIES } from '../../data/blogData'

const ICON_MAP = {
  FileCode: FileCode2,
  Layers: Layers,
  Blocks: Blocks,
  Code2: Code2,
  Coins: Coins,
  BookOpen: BookOpen,
  Newspaper: Newspaper,
}

export default function CategoriesSidebar({ activeCategory, onSelectCategory }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
        <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-700">
          <Folder className="w-4 h-4" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Categories</h3>
      </div>

      <div className="space-y-1">
        {SIDEBAR_CATEGORIES.map((item) => {
          const IconComp = ICON_MAP[item.icon] || Folder
          const isActive = activeCategory === item.name

          return (
            <button
              key={item.name}
              onClick={() => onSelectCategory(item.name)}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer group ${
                isActive
                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                  : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm">{item.name}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-full transition-colors ${
                    isActive
                      ? 'bg-emerald-200 text-emerald-900'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-800'
                  }`}
                >
                  {item.count}
                </span>
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform ${
                    isActive
                      ? 'text-emerald-700 translate-x-0.5'
                      : 'text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5'
                  }`}
                />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
