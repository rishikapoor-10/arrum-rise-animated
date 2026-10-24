import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag, Building2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';
import { EnquiryForm } from '../components/EnquiryForm';

export const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = BLOG_POSTS.find(p => p.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (same category or next two)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== article.id && p.category === article.category)
    .slice(0, 2);

  return (
    <div className="pt-24 space-y-0">
      {/* Header & Meta */}
      <section className="bg-[#0E2A22] text-white py-14 sm:py-20 border-b border-[#C9A050]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-[#DFBA73] font-medium truncate max-w-xs">{article.categoryLabel}</span>
          </div>

          <div className="inline-block px-3 py-1 rounded bg-[#163B31] text-xs font-semibold text-[#DFBA73] mb-4 uppercase tracking-wider">
            {article.categoryLabel}
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F5] leading-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-4 border-t border-white/10">
            <span className="font-medium text-[#DFBA73]">{article.author}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-[#C9A050]" />
              <span>{article.publishDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-[#C9A050]" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-16 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main prose */}
          <article className="bg-white p-8 sm:p-12 rounded-xl border border-gray-200 shadow-sm">
            <div className="prose prose-stone max-w-none text-sm sm:text-base leading-relaxed space-y-6">
              {article.content.split('\n\n').map((block, idx) => {
                const trimmed = block.trim();
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0E2A22] pt-6 pb-2 border-b border-gray-100">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="font-serif-luxury text-xl font-bold text-[#0E2A22] pt-4">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('#### ')) {
                  return (
                    <h4 key={idx} className="font-serif-luxury text-lg font-bold text-[#A78235] pt-3">
                      {trimmed.replace('#### ', '')}
                    </h4>
                  );
                }
                if (trimmed.startsWith('> ')) {
                  return (
                    <blockquote key={idx} className="border-l-4 border-[#C9A050] pl-4 py-2 italic bg-[#F4EFE6] text-gray-800 rounded-r text-sm">
                      {trimmed.replace('> ', '')}
                    </blockquote>
                  );
                }
                if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                  return (
                    <div key={idx} className="text-gray-700 pl-4 space-y-2 text-sm leading-relaxed whitespace-pre-line">
                      {trimmed}
                    </div>
                  );
                }
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Tags and Back link */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-500 flex items-center space-x-1">
                  <Tag className="w-3 h-3" />
                  <span>Topics:</span>
                </span>
                {article.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0E2A22] hover:text-[#C9A050] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to all guides</span>
              </Link>
            </div>
          </article>

          {/* Internal Project CTA Box */}
          <div className="my-12 p-8 bg-[#0E2A22] text-white rounded-xl border border-[#C9A050]/40 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-[#DFBA73] font-semibold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Explore Transparent Residences</span>
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#FAF9F5]">
                Evaluate CASA BLISS & CASA ONE in Dronagiri
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Both projects adhere strictly to RERA mandates with documented carpet areas, approved floor layouts, and dedicated rooftop amenities.
              </p>
            </div>
            <div className="md:col-span-4 text-left md:text-right">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-wider font-bold rounded shadow transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">
                Related Educational Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <div key={rel.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-3">
                    <span className="text-[10px] uppercase font-semibold text-[#A78235] tracking-wider block">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-serif-luxury text-sm font-bold text-[#0E2A22]">
                      <Link to={`/blog/${rel.slug}`} className="hover:text-[#C9A050] transition-colors">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">{rel.excerpt}</p>
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="text-xs font-semibold text-[#0E2A22] hover:text-[#C9A050] inline-flex items-center space-x-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section className="py-16 bg-[#071914] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm sourceContext={`Blog Article: ${article.title}`} />
        </div>
      </section>
    </div>
  );
};
