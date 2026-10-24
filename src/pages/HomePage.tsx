import React, { useEffect, useState } from 'react';
import { 
  Building2, Compass, ShieldCheck, MapPin, 
  ArrowRight, Sparkles, Check, Phone, FileText, ChevronRight,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { BLOG_POSTS } from '../data/blog';
import { EnquiryForm } from '../components/EnquiryForm';
import { BuildingStackInteractive } from '../components/BuildingStackInteractive';
import { BuildingComparisonShowcase } from '../components/BuildingComparisonShowcase';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const HomePage: React.FC = () => {
  const recentArticles = BLOG_POSTS.slice(0, 3);
  const [scrollY, setScrollY] = useState(0);

  // Parallax tracking for hero
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="space-y-0 selection:bg-[#C9A050] selection:text-white">
      
      {/* 1. CINEMATIC HERO SECTION WITH SMOOTH PARALLAX */}
      <section className="relative min-h-[96vh] flex items-center justify-center bg-[#071914] text-white overflow-hidden pt-24 pb-16">
        
        {/* Deep layered architectural background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/casa-bliss-facade.png"
            alt="Aurrum Rise Architecture"
            className="w-full h-full object-cover object-top opacity-30 filter brightness-75 contrast-125 will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(${1.05 + scrollY * 0.0003})`,
              transition: 'transform 0.1s cubic-bezier(0.1, 1, 0.1, 1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071914] via-[#071914]/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#071914]/50 to-[#071914]" />

          {/* Golden Ambient Atmospheric Beams */}
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#C9A050]/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#163B31]/40 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Subtle Tagline Pill */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#163B31]/90 border border-[#C9A050]/50 backdrop-blur-md mb-8 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFBA73] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A050]"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73]">
              Boutique Residences • Dronagiri, Navi Mumbai
            </span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF9F5] leading-tight sm:leading-[1.15] max-w-5xl mx-auto">
            Elevated Living Through <br />
            <span className="gold-gradient-text drop-shadow-[0_4px_25px_rgba(201,160,80,0.35)]">
              Considered Architectural Design
            </span>
          </h1>

          <p className="mt-7 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Aurrum Rise curates limited-edition residential collections in Navi Mumbai’s most strategically connected coastal corridors. Experience our monolithic G+7 structure assembling live below.
          </p>

          {/* Interactive CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#building-stack-section"
              className="w-full sm:w-auto px-8 py-4 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all shadow-[0_10px_30px_rgba(201,160,80,0.35)] hover:shadow-[0_15px_40px_rgba(201,160,80,0.5)] flex items-center justify-center space-x-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Dynamic Building</span>
              <Layers className="w-4 h-4" />
            </a>
            
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-[#C9A050]/60 hover:border-[#DFBA73] text-[#DFBA73] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all backdrop-blur-sm flex items-center justify-center space-x-2"
            >
              <span>View Residences</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Live Animated Metrics Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
            <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
              <span className="block text-2xl sm:text-3xl font-serif-luxury font-bold text-[#DFBA73]">
                <AnimatedCounter end={24} suffix=" Only" />
              </span>
              <span className="text-xs text-gray-400 mt-1 block">Exclusive Boutique Homes at Casa Bliss</span>
            </div>
            <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
              <span className="block text-2xl sm:text-3xl font-serif-luxury font-bold text-[#DFBA73]">
                G+<AnimatedCounter end={7} suffix=" Storey" />
              </span>
              <span className="text-xs text-gray-400 mt-1 block">Low-Density Serenity at Casa One</span>
            </div>
            <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
              <span className="block text-2xl sm:text-3xl font-serif-luxury font-bold text-[#DFBA73]">
                ~<AnimatedCounter end={20} suffix=" Mins" />
              </span>
              <span className="text-xs text-gray-400 mt-1 block">To South Mumbai via Atal Setu</span>
            </div>
            <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5">
              <span className="block text-2xl sm:text-3xl font-serif-luxury font-bold text-[#DFBA73]">
                <AnimatedCounter end={100} suffix="%" />
              </span>
              <span className="text-xs text-gray-400 mt-1 block">Verified RERA & Sanctioned Plans</span>
            </div>
          </div>

          {/* Dynamic Scroll Cue */}
          <div className="mt-12 flex flex-col items-center space-y-2 pointer-events-none opacity-80">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#DFBA73]">
              Scroll to trigger building assembly
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-[#DFBA73]/50 flex items-start justify-center p-1">
              <div className="w-1.5 h-2.5 rounded-full bg-[#DFBA73] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SIGNATURE KINETIC BUILDING STACK (CRAZY SCROLL ANIMATION) */}
      <BuildingStackInteractive />

      {/* 3. MONOLITHIC ELEVATION & STRATUM STUDY */}
      <BuildingComparisonShowcase />

      {/* 4. BRAND NARRATIVE & CRAFT PRINCIPLES */}
      <section className="py-24 bg-[#FAF9F5] text-[#1E242B] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#A78235]">
                <span>Brand Philosophy</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2A22]">
                Not Just Another Tower. <br />
                <span className="text-[#C9A050]">Homes Crafted with Intent.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                Aurrum Rise was founded on a simple conviction: luxury is not about towering concrete mega-blocks or overstated marketing slogans. True luxury is found in generous room dimensions, cross-ventilation, abundant sunlight, low-density exclusivity, and genuine peace of mind.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                In close collaboration with seasoned construction partners including Falcon Realty, Gagan Vives Architects, and Aaum Constructions, we create boutique residences that respect your privacy and protect your long-term capital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-[#C9A050]/20">
                  <div className="p-2.5 bg-[#EBF3F5] rounded text-[#2A4858] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury font-semibold text-sm text-[#0E2A22]">Low-Density Living</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Quiet residential communities with limited neighbors per floor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-[#C9A050]/20">
                  <div className="p-2.5 bg-[#F4EFE6] rounded text-[#A78235] shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury font-semibold text-sm text-[#0E2A22]">Vastu & Climate Intent</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Cross-ventilated living rooms and dual balconies for natural airflow.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0E2A22] hover:text-[#C9A050] border-b border-[#0E2A22] pb-0.5 hover:border-[#C9A050] transition-colors"
                >
                  <span>Read our story & principles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#C9A050]/30 aspect-[4/3] group">
                <img
                  src="/assets/casa-bliss-render.png"
                  alt="Casa Bliss Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#0E2A22] text-white p-6 rounded-lg shadow-2xl border border-[#C9A050]/40 max-w-xs backdrop-blur-md">
                <p className="font-serif-luxury text-sm text-[#DFBA73] font-semibold flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#DFBA73]" />
                  <span>Curated Convenience Retail</span>
                </p>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Casa Arcade at Casa Bliss provides daily convenience right at your doorstep with zero disturbance to living spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION */}
      <section className="py-24 bg-[#0E2A22] text-white" id="projects-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] block mb-2">
              Our Active Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9F5]">
              Boutique Residences in Dronagiri
            </h2>
            <p className="text-sm text-gray-300 mt-3 font-light">
              Explore our verified developments situated in the high-growth nodes of Navi Mumbai, directly benefiting from Atal Setu and the upcoming International Airport.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-[#071914] rounded-xl overflow-hidden border border-[#C9A050]/30 shadow-2xl flex flex-col group hover:border-[#C9A050] transition-all hover:shadow-[0_15px_35px_rgba(201,160,80,0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#0E2A22]/90 backdrop-blur px-3 py-1 rounded border border-[#C9A050]/40 text-xs font-semibold text-[#DFBA73]">
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-xs bg-black/60 backdrop-blur text-gray-200 px-2.5 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1.5 text-xs text-[#DFBA73]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#DFBA73] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[11px] uppercase tracking-wider text-[#C9A050] font-semibold block">
                        Verified Highlights:
                      </span>
                      <ul className="text-xs text-gray-300 space-y-1.5">
                        {project.keyHighlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#DFBA73] shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs uppercase tracking-wider font-semibold text-[#DFBA73] hover:text-white flex items-center space-x-1.5 transition-colors"
                    >
                      <span>Explore Residences</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to="/contact"
                      className="bg-[#163B31] hover:bg-[#C9A050] hover:text-[#071914] text-xs font-semibold text-white px-5 py-2.5 rounded transition-all shadow-md"
                    >
                      Enquire Pricing
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MACRO LOCATION & INFRASTRUCTURE */}
      <section className="py-24 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden border border-[#C9A050]/40 shadow-2xl">
                <img
                  src="/assets/dronagiri-location-aurrum.jpg"
                  alt="Dronagiri Strategic Connectivity"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[11px] text-gray-500 mt-2 text-center font-mono">
                Strategic infrastructure nexus connecting Dronagiri to South Mumbai, NMIA, and JNPT.
              </p>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235]">
                Strategic Micro-Market
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2A22]">
                What Makes Dronagiri <br />
                <span className="text-[#C9A050]">The Right Address Today?</span>
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                The right location today builds a better tomorrow. Dronagiri stands at the intersection of major national infrastructure investments that are reshaping the economic map of the Mumbai Metropolitan Region.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-lg border border-[#C9A050]/20 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Connectivity & Atal Setu</h4>
                    <p className="text-xs text-gray-600">Direct freeway transit to South Mumbai in ~20 minutes via the 21.8 km Mumbai Trans Harbour Link.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-lg border border-[#C9A050]/20 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Navi Mumbai International Airport (NMIA)</h4>
                    <p className="text-xs text-gray-600">Immediate access to the upcoming international aviation hub and aero-city trade corridors.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-lg border border-[#C9A050]/20 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Employment Hubs & Maritime Trade</h4>
                    <p className="text-xs text-gray-600">Direct adjacency to JNPT and Reliance SEZ, generating permanent rental and executive housing demand.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-lg border border-[#C9A050]/20 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#163B31] text-[#DFBA73] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-[#0E2A22]">Planned CIDCO Town Planning</h4>
                    <p className="text-xs text-gray-600">Wide 22m and 11m sector roads, designated school plots, and dedicated playgrounds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LATEST BLOG & EDUCATIONAL INSIGHTS */}
      <section className="py-24 bg-[#F4EFE6] text-[#1E242B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235] block mb-2">
                Knowledge & Transparency
              </span>
              <h2 className="font-serif-luxury text-3xl font-bold tracking-tight text-[#0E2A22]">
                Property Due Diligence & Market Insights
              </h2>
              <p className="text-xs text-gray-600 mt-2">
                Empowering home buyers with objective legal, technical, and financial clarity.
              </p>
            </div>
            <Link
              to="/blog"
              className="mt-4 md:mt-0 text-xs uppercase tracking-wider font-semibold text-[#0E2A22] hover:text-[#C9A050] flex items-center space-x-1.5 transition-colors"
            >
              <span>View all 16 articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden border border-[#C9A050]/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                    <span className="bg-[#EBF3F5] text-[#2A4858] font-semibold px-2 py-0.5 rounded">
                      {article.categoryLabel}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#0E2A22] mb-2 leading-snug line-clamp-2 group-hover:text-[#C9A050] transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400">{article.publishDate}</span>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="font-semibold text-[#C9A050] hover:text-[#0E2A22] transition-colors"
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEAD GENERATION SECTION */}
      <section className="py-24 bg-[#071914] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73]">
                Connect with Promoters
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9F5]">
                Begin Your Journey With Aurrum Rise
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Whether you are exploring a 1 BHK or 2 BHK boutique residence at CASA BLISS or CASA ONE, our advisory team provides complete floor plans, sanctioned approvals, and transparent payment structures.
              </p>

              <div className="space-y-4 pt-2 text-xs text-gray-300">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <span>Zero brokerage direct developer assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <span>Verified RERA documentation and floor plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <span>Assistance desk: <a href="tel:9867343005" className="text-[#DFBA73] underline">+91 98673 43005</a></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm defaultProject="both" sourceContext="Homepage Lead Banner" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
