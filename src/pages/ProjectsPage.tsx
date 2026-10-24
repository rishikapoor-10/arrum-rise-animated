import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 space-y-0">
      {/* Header */}
      <section className="bg-[#0E2A22] text-white py-16 sm:py-20 border-b border-[#C9A050]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] mb-3">
            Our Residential Portfolio
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F5] leading-tight max-w-3xl mx-auto">
            Boutique Residences in Dronagiri
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtfully planned developments combining low-density living, documented specifications, and prime infrastructure access in Navi Mumbai.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 bg-white rounded-xl border border-[#C9A050]/30 shadow-lg ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#0E2A22]/90 backdrop-blur px-3 py-1 rounded text-xs font-semibold text-[#DFBA73] border border-[#C9A050]/40">
                  {project.status}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#A78235] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#C9A050]" />
                  <span>{project.type}</span>
                </div>

                <h2 className="font-serif-luxury text-3xl font-bold text-[#0E2A22]">
                  {project.name}
                </h2>

                <div className="flex items-center space-x-1.5 text-xs text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A050] shrink-0" />
                  <span>{project.location}</span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  {project.overview}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[11px] uppercase tracking-wider text-[#0E2A22] font-bold block">
                    Documented Project Highlights:
                  </span>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    {project.keyHighlights.slice(0, 4).map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[#C9A050] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="px-6 py-3 bg-[#0E2A22] hover:bg-[#163B31] text-white text-xs uppercase tracking-wider font-semibold rounded shadow transition-all flex items-center space-x-2"
                  >
                    <span>View Specifications & Layouts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-wider font-semibold rounded shadow transition-all"
                  >
                    Enquire Pricing
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RERA Assurance */}
      <section className="py-12 bg-[#F4EFE6] border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0E2A22] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#C9A050]" />
            <span>MahaRERA Statutory Compliance</span>
          </div>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
            All projects are developed under strict adherence to Maharashtra Real Estate Regulatory Authority guidelines. Carpet areas, sanctions, commencement certificates, and escrow accounts are verified before customer execution.
          </p>
        </div>
      </section>
    </div>
  );
};
