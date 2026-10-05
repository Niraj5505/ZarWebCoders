import React, { useState, useMemo, useEffect } from 'react'
import BlogHero from '../components/blog/BlogHero'
import BlogFilterBar from '../components/blog/BlogFilterBar'
import BlogCard from '../components/blog/BlogCard'
import PopularPosts from '../components/blog/PopularPosts'
import CategoriesSidebar from '../components/blog/CategoriesSidebar'
import NewsletterCard from '../components/blog/NewsletterCard'
import BlogCTA from '../components/blog/BlogCTA'
import BlogPagination from '../components/blog/BlogPagination'
import ArticleDetailPage from '../components/blog/ArticleDetailPage'
import DarkFooter from '../components/DarkFooter'
import { BLOG_ARTICLES } from '../data/blogData'
import { SearchX } from 'lucide-react'

export default function BlogPage({ onDiscussClick, onNavClick }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedArticle, setSelectedArticle] = useState(null)

  // Listen to hash change for deep linking to individual articles or back to blog
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#/blog/')) {
        const slug = hash.replace('#/blog/', '')
        const found = BLOG_ARTICLES.find((a) => a.slug === slug)
        if (found) {
          setSelectedArticle(found)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else if (hash === '#/blog' || hash === '#blog') {
        setSelectedArticle(null)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        activeCategory === 'All' || article.category === activeCategory

      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.author.toLowerCase().includes(q)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  const handleSearchChange = (q) => {
    setSearchQuery(q)
    setCurrentPage(1)
  }

  const handleOpenArticle = (article) => {
    setSelectedArticle(article)
    window.location.hash = `/blog/${article.slug}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToBlog = () => {
    setSelectedArticle(null)
    window.location.hash = '/blog'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // If viewing an article detail page
  if (selectedArticle) {
    return (
      <ArticleDetailPage
        article={selectedArticle}
        onBack={handleBackToBlog}
        onSelectArticle={handleOpenArticle}
        onDiscussClick={onDiscussClick}
        onNavClick={onNavClick}
      />
    )
  }

  return (
    <div className="bg-[#fbfcfb] min-h-screen flex flex-col justify-between">
      <div>
        {/* 1. Blog Hero Section */}
        <BlogHero onDiscussClick={onDiscussClick} />

        {/* 2. Blog Category Filter & Search Bar */}
        <BlogFilterBar
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        {/* 3. Main Content: 3-column Grid (Left ~75%) + Sidebar (Right ~25%) */}
        <main className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT AREA: Article Cards Grid (75% on desktop = col-span-8 or col-span-9) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Category Title & Count Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
                </h2>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
                </span>
              </div>

              {/* Grid of Cards */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <BlogCard
                      key={article.id}
                      article={article}
                      onClick={handleOpenArticle}
                    />
                  ))}
                </div>
              ) : (
                /* Clean Empty State */
                <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center space-y-4 my-8 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                    <SearchX className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">
                    We couldn't find any articles matching "{searchQuery}". Try searching with another keyword or reset filters.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('All')
                      setSearchQuery('')
                    }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}

              {/* Functional Pagination */}
              {filteredArticles.length > 0 && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              )}
            </div>

            {/* RIGHT AREA: Sidebar (25% on desktop = col-span-4) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Sidebar Card 1: Popular Posts */}
              <PopularPosts onSelectArticle={handleOpenArticle} />

              {/* Sidebar Card 2: Categories */}
              <CategoriesSidebar
                activeCategory={activeCategory}
                onSelectCategory={handleSelectCategory}
              />

              {/* Sidebar Card 3: Newsletter */}
              <NewsletterCard />

              {/* Sidebar Card 4: Sidebar CTA */}
              <BlogCTA onDiscussClick={onDiscussClick} />
            </aside>

          </div>
        </main>
      </div>

      {/* Footer */}
      <DarkFooter onNavClick={onNavClick} />
    </div>
  )
}
