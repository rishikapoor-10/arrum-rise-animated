import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blog';

export const BlogListingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Articles (16)' },
    { key: 'due-diligence', label: 'Due Diligence & RERA' },
    { key: 'technical', label: 'Technical & Engineering' },
    { key: 'investment', label: 'Investment & Buying' },
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPost: BlogPost = BLOG_POSTS[1]; // RERA guide

  return (
    <div className="pt-24 space-y-0">
      {/* Hero */}
      <section className="bg-[#0E2A22] text-white py-16 sm:py-20 border-b border-[#C9A050]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] mb-3">
            Real Estate Educational Library
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F5] leading-tight max-w-3xl mx-auto">
            Knowledge, Laws & Due Diligence
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            16 in-depth, objective guides covering RERA compliance, structural engineering, home loan mechanics, and micro-market analysis in Maharashtra.
          </p>
        </div>
      </section>

      {/* Featured Article Banner */}
      <section className="py-12 bg-[#F4EFE6] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-[#C9A050]/40 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C9A050]">
                <BookOpen className="w-4 h-4" />
                <span>Featured Masterclass Guide</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0E2A22] leading-snug">
                <Link to={`/blog/${featuredPost.slug}`} className="hover:text-[#C9A050] transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500 pt-2">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredPost.readTime}</span>
                </span>
                <span>•</span>
                <span>{featuredPost.publishDate}</span>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0E2A22] hover:bg-[#163B31] text-white text-xs uppercase tracking-wider font-semibold rounded shadow transition-all"
              >
                <span>Read Complete Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Controls */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search topics (e.g. RERA, carpet area, loan)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded text-xs focus:outline-none focus:border-[#C9A050] text-[#0E2A22]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
                    selectedCategory === cat.key
                      ? 'bg-[#0E2A22] text-[#DFBA73] font-semibold shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200 p-8">
              <p className="text-sm text-gray-600">No articles match your search filter "{searchTerm}".</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs text-[#C9A050] font-semibold underline"
              >
                Reset search & filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#C9A050]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span className="bg-[#EBF3F5] text-[#2A4858] font-semibold px-2.5 py-0.5 rounded">
                        {post.categoryLabel}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-base font-bold text-[#0E2A22] group-hover:text-[#C9A050] transition-colors leading-snug">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded flex items-center space-x-1">
                          <Tag className="w-2.5 h-2.5 text-gray-400" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-gray-400">{post.publishDate}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-semibold text-[#0E2A22] group-hover:text-[#C9A050] flex items-center space-x-1 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
