import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Clock, User, ArrowRight, BookOpen, Send, 
  ChevronLeft, ChevronRight, FileText, Lightbulb, Compass, 
  Rocket, Flame, Folder, CheckCircle
} from 'lucide-react';

export default function BlogView({ onOpenModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    'All', 
    'Smart Contracts', 
    'dApps', 
    'Blockchain', 
    'Web3 Development', 
    'DeFi', 
    'Tutorials', 
    'Industry News'
  ];

  const categoryCounts = [
    { name: 'Smart Contracts', count: 12 },
    { name: 'dApps', count: 10 },
    { name: 'Blockchain', count: 8 },
    { name: 'Web3 Development', count: 15 },
    { name: 'DeFi', count: 6 },
    { name: 'Tutorials', count: 9 },
    { name: 'Industry News', count: 7 }
  ];

  const allPosts = [
    {
      id: 'deploy-smart-contract-solidity',
      title: 'How to Write and Deploy a Smart Contract in Solidity',
      category: 'Smart Contracts',
      excerpt: 'A step-by-step guide to writing your first smart contract in Solidity, testing it locally, and deploying it to the Ethereum network.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80',
      author: 'By Abuzar Munshi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      date: 'Apr 28, 2025',
      readTime: '8 min read'
    },
    {
      id: 'building-web3-dapp-react-ethers',
      title: 'Building a Web3 dApp with React and Ethers.js',
      category: 'dApps',
      excerpt: 'Learn how to connect your React application to the blockchain using Ethers.js and integrate a MetaMask wallet for seamless user experience.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      author: 'By Rizwana Khan',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      date: 'Apr 20, 2025',
      readTime: '6 min read'
    },
    {
      id: 'what-is-defi-changing-finance',
      title: 'What is DeFi? How It’s Changing the Financial World',
      category: 'DeFi',
      excerpt: 'Explore the basics of decentralized finance, its key components, and how it’s creating new opportunities in the global economy.',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?auto=format&fit=crop&w=600&q=80',
      author: 'By Tufail Ahmed',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      date: 'Apr 12, 2025',
      readTime: '7 min read'
    },
    {
      id: 'nfts-beyond-art-use-cases',
      title: 'NFTs Beyond Art: Real World Use Cases',
      category: 'NFTs',
      excerpt: 'From gaming to identity, NFTs are unlocking new possibilities beyond digital art. Here are some real-world applications you should know.',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=600&q=80',
      author: 'By Sameer Shaikh',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      date: 'Mar 30, 2025',
      readTime: '5 min read'
    },
    {
      id: 'web3-wallet-integration-steps',
      title: 'Web3 Wallet Integration in 5 Simple Steps',
      category: 'Tutorials',
      excerpt: 'Learn how to integrate a crypto wallet into your dApp, connect with MetaMask, and handle transactions securely.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
      author: 'By Ahsan Ali',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      date: 'Mar 18, 2025',
      readTime: '7 min read'
    },
    {
      id: 'blockchain-security-best-practices',
      title: 'Blockchain Security Best Practices for Developers',
      category: 'Blockchain',
      excerpt: 'Discover essential security tips to keep your smart contracts, dApps, and blockchain applications safe and reliable.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      author: 'By Faizan Khan',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      date: 'Mar 10, 2025',
      readTime: '6 min read'
    },
    {
      id: 'top-web3-tools-2025',
      title: 'Top 5 Web3 Development Tools in 2025',
      category: 'Web3 Development',
      excerpt: 'Explore the best tools and frameworks that make Web3 development faster, easier, and more efficient in 2025.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      author: 'By Abuzar Munshi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      date: 'Apr 02, 2025',
      readTime: '5 min read'
    },
    {
      id: 'future-web3-india',
      title: 'The Future of Web3 in India: Opportunities and Challenges',
      category: 'Industry News',
      excerpt: 'How India\'s Web3 ecosystem is evolving, what\'s driving growth, and what challenges still need to be solved.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
      author: 'By Rizwana Khan',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      date: 'Feb 22, 2025',
      readTime: '6 min read'
    },
    {
      id: 'smart-contract-common-mistakes',
      title: 'Common Mistakes to Avoid in Smart Contract Development',
      category: 'Smart Contracts',
      excerpt: 'Learn about the most common smart contract mistakes and how to prevent them before deployment.',
      image: '/images/case_study_defi.jpg',
      author: 'By Tufail Ahmed',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      date: 'Feb 18, 2025',
      readTime: '5 min read'
    }
  ];

  const popularPosts = allPosts.slice(0, 5);

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-section" style={{ paddingBottom: '70px' }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <div className="hero-eyebrow">
                <span className="hero-tag-text">BLOG &amp; INSIGHTS</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: '3.3rem', lineHeight: '1.15', marginBottom: '18px' }}>
                Latest Insights on<br />
                <span className="hero-title-accent">Web3 Development</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.02rem', marginBottom: '24px', maxWidth: '520px' }}>
                Stay updated with the latest trends, tutorials, and expert insights on blockchain, Web3, smart contracts, and decentralized applications. Learn, build, and grow with ZarWebCoders.
              </p>

              {/* 3 Badges in a Row */}
              <div className="blog-hero-badges">
                <div className="blog-hero-badge-item">
                  <FileText size={16} />
                  <span>Expert Articles</span>
                </div>
                <div className="blog-hero-badge-item">
                  <Lightbulb size={16} />
                  <span>Tech Tutorials</span>
                </div>
                <div className="blog-hero-badge-item">
                  <Compass size={16} />
                  <span>Industry Insights</span>
                </div>
              </div>
            </div>

            {/* Right Graphic */}
            <div style={{ position: 'relative' }}>
              <div className="hero-image-wrapper">
                <img
                  src="/images/hero_laptop.jpg"
                  alt="ZarWebCoders Web3 Development Laptop"
                  className="hero-image"
                />
              </div>

              {/* Floating Pill Button on Top Right matching wireframe */}
              <div 
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#ffffff',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  color: '#0d1526',
                  border: '1px solid #e8edf5',
                  zIndex: 4,
                  cursor: 'pointer'
                }}
                onClick={onOpenModal}
              >
                <span>Build the future with Web3</span>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#05091a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={12} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: FILTER PILLS & SEARCH BAR
          ═══════════════════════════════════════════════════════ */}
      <section className="section section-bg-white" style={{ paddingTop: '40px', paddingBottom: '90px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            {/* Filter Pills */}
            <div className="filter-bar" style={{ marginBottom: 0, overflowX: 'auto', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                  style={{
                    background: activeCategory === cat ? '#05091a' : '#ffffff',
                    color: activeCategory === cat ? '#ffffff' : '#475569',
                    border: '1px solid #e8edf5',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.86rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div style={{ position: 'relative', width: '280px' }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 16px 9px 38px',
                  borderRadius: '9999px',
                  border: '1px solid #e8edf5',
                  outline: 'none',
                  fontSize: '0.86rem',
                  color: '#0d1526',
                  background: '#ffffff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              />
              <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              SECTION 3: MAIN BLOG AREA (9 CARDS LEFT + SIDEBAR RIGHT)
              ═══════════════════════════════════════════════════════ */}
          <div className="blog-layout-grid">
            {/* Left: 3x3 Grid of 9 Cards */}
            <div>
              <div className="blog-cards-3x3">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="blog-card-wireframe">
                    {/* Thumbnail Image + Floating Tag */}
                    <div className="blog-card-img-wrap">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="blog-card-img" 
                      />
                      <div className="blog-card-tag">
                        {post.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="blog-card-content">
                      <h3 className="blog-card-title">
                        {post.title}
                      </h3>
                      <p className="blog-card-desc">
                        {post.excerpt}
                      </p>

                      {/* Author Meta Row */}
                      <div className="blog-card-meta">
                        <img 
                          src={post.avatar} 
                          alt={post.author} 
                          className="blog-card-avatar" 
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="blog-card-author">{post.author}</div>
                          <div className="blog-card-date-read">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Bar matching wireframe */}
              <div className="blog-pagination-row">
                <button className="page-btn" aria-label="Previous page">
                  <ChevronLeft size={16} />
                </button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
                <span className="page-ellipsis">...</span>
                <button className="page-btn">10</button>
                <button className="page-btn" aria-label="Next page">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right: Sidebar Widgets */}
            <div>
              {/* Widget 1: Popular Posts */}
              <div className="sidebar-widget-card">
                <div className="sidebar-widget-title">
                  <Flame size={18} color="#1a7aff" />
                  <span>Popular Posts</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {popularPosts.map((p) => (
                    <div key={p.id} className="popular-item">
                      <img src={p.image} alt={p.title} className="popular-thumb" />
                      <div>
                        <div className="popular-title">{p.title}</div>
                        <div className="popular-date">{p.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 2: Categories */}
              <div className="sidebar-widget-card">
                <div className="sidebar-widget-title">
                  <Folder size={18} color="#1a7aff" />
                  <span>Categories</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {categoryCounts.map((cat, idx) => (
                    <div 
                      key={idx} 
                      className="category-row-item"
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#1a7aff', fontSize: '0.8rem' }}>•</span>
                        <span>{cat.name}</span>
                      </div>
                      <span className="category-count-badge">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 3: Newsletter */}
              <div className="sidebar-widget-card">
                <div className="sidebar-widget-title">
                  <span>Newsletter</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: '1.55' }}>
                  Get the latest Web3 insights and updates straight to your inbox.
                </p>

                {subscribed ? (
                  <div style={{ marginTop: '14px', color: '#10b981', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={16} /> You're subscribed!
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="blog-newsletter-input-wrap">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="blog-newsletter-input"
                    />
                    <button type="submit" className="blog-newsletter-submit-btn" aria-label="Subscribe">
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>

              {/* Widget 4: Have a Project in Mind? (Dark CTA Card) */}
              <div className="sidebar-cta-dark">
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 212, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Rocket size={20} color="#00d4ff" />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>
                  Have a Project in Mind?
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
                  Let's turn your idea into a secure and scalable Web3 solution.
                </p>
                <button
                  onClick={onOpenModal}
                  style={{
                    background: '#ffffff',
                    color: '#0d1526',
                    padding: '9px 20px',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                  }}
                >
                  Discuss a Project <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
