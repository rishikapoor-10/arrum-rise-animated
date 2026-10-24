import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { 
  MapPin, Check, ChevronDown, ChevronUp, 
  ArrowRight, ShieldCheck, Compass, Sparkles
} from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { EnquiryForm } from '../components/EnquiryForm';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const project: Project | undefined = PROJECTS.find(p => p.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#071914] text-white overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover opacity-40 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071914] via-[#071914]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mb-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-[#DFBA73] font-medium">{project.name}</span>
          </div>

          <div className="inline-block px-3.5 py-1 rounded-full bg-[#163B31]/80 border border-[#C9A050]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#DFBA73]">
            {project.type}
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#FAF9F5]">
            {project.name}
          </h1>

          <p className="font-serif-luxury text-base sm:text-xl text-[#DFBA73] tracking-wide max-w-2xl mx-auto italic">
            "{project.tagline}"
          </p>

          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-300 pt-2">
            <MapPin className="w-4 h-4 text-[#C9A050]" />
            <span>{project.location}</span>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#enquiry"
              className="px-8 py-3.5 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-wider font-bold rounded shadow transition-all"
            >
              Request Brochure & Pricing
            </a>
            <a
              href="#blueprints"
              className="px-8 py-3.5 bg-transparent border border-[#C9A050]/50 hover:bg-white/5 text-[#DFBA73] hover:text-white text-xs uppercase tracking-wider font-semibold rounded transition-all"
            >
              View Floor Layouts
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & KEY HIGHLIGHTS */}
      <section className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235]">
                Project Narrative
              </span>
              <h2 className="font-serif-luxury text-3xl font-bold text-[#0E2A22]">
                Architectural Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                {project.overview}
              </p>

              {/* RERA and Collaborators Info Box */}
              <div className="p-5 bg-[#F4EFE6] rounded-lg border border-[#C9A050]/30 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#0E2A22] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#C9A050]" />
                  <span>Statutory Compliance & Team</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {project.reraStatus}
                </p>
                {project.collaborators && (
                  <div className="pt-2 border-t border-gray-200 text-xs text-gray-700 space-y-1">
                    {project.collaborators.developer && <div><strong>Developer / Promoters:</strong> {project.collaborators.developer}</div>}
                    {project.collaborators.architecture && <div><strong>Architectural Planning:</strong> {project.collaborators.architecture}</div>}
                    {project.collaborators.rccConsultancy && <div><strong>RCC Consultancy:</strong> {project.collaborators.rccConsultancy}</div>}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-[#C9A050]/30 shadow-md space-y-5">
              <h3 className="font-serif-luxury text-xl font-bold text-[#0E2A22]">
                Verified Project USPs
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                {project.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#C9A050] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONFIGURATIONS */}
      <section className="py-20 bg-[#0E2A22] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] block mb-2">
              Unit Collections
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold tracking-tight text-[#FAF9F5]">
              Documented Configurations
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light">
              Explicit carpet dimensions derived from official brochures and typical floor architectural plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.configurations.map((config, i) => (
              <div
                key={i}
                className="bg-[#071914] p-8 rounded-lg border border-[#C9A050]/30 flex flex-col justify-between hover:border-[#DFBA73] transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#DFBA73] font-semibold block">
                    Collection Type {i + 1}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    {config.type}
                  </h3>
                  <div className="inline-block bg-[#163B31] px-3 py-1 rounded text-xs font-semibold text-[#DFBA73]">
                    {config.area}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2 font-light">
                    {config.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#enquiry"
                    className="text-xs font-semibold text-[#DFBA73] hover:text-white uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Request Price Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLUEPRINTS & FLOOR PLAN GALLERY */}
      <section id="blueprints" className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235] block mb-2">
              Architectural Blueprints
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#0E2A22]">
              Floor Plans & Master Layouts
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Inspect typical floor configurations, road frontages, and cross-ventilation orientations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.blueprints.map((bp, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-[#C9A050]/30 shadow-md">
                <div className="aspect-[16/10] bg-[#071914] overflow-hidden">
                  <img
                    src={bp.url}
                    alt={bp.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="p-5 space-y-1.5 text-left">
                  <h4 className="font-serif-luxury text-base font-bold text-[#0E2A22]">{bp.title}</h4>
                  <p className="text-xs text-gray-600">{bp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AMENITIES & SPECIFICATIONS */}
      <section className="py-20 bg-[#F4EFE6] text-[#1E242B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235] block mb-2">
              Amenities & Materials
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#0E2A22]">
              Documented Specifications & Lifestyle Features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Amenities */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#C9A050]/30 shadow-sm space-y-6">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#0E2A22]">
                <Sparkles className="w-4 h-4 text-[#C9A050]" />
                <span>Documented Amenities</span>
              </div>
              {project.amenities.map((am, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-serif-luxury text-sm font-bold text-[#C9A050] uppercase tracking-wide">
                    {am.category}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {am.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#0E2A22] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#C9A050]/30 shadow-sm space-y-6">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#0E2A22]">
                <Compass className="w-4 h-4 text-[#C9A050]" />
                <span>Internal Materials & Civil Standards</span>
              </div>
              {project.specifications.map((spec, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-serif-luxury text-sm font-bold text-[#C9A050] uppercase tracking-wide">
                    {spec.category}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {spec.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#0E2A22] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECT GALLERY WITH LIGHTBOX */}
      <section className="py-20 bg-[#071914] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] block mb-2">
              Visual Archive
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold tracking-tight text-[#FAF9F5]">
              Project Gallery & Perspectives
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light">
              Click any image to launch the full-resolution architectural lightbox preview.
            </p>
          </div>

          <GalleryLightbox items={project.gallery} />
        </div>
      </section>

      {/* 7. CONNECTIVITY */}
      <section className="py-20 bg-[#FAF9F5] text-[#1E242B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A78235] block mb-2">
              Strategic Proximity
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#0E2A22]">
              Location & Connectivity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.connectivity.map((conn, i) => (
              <div key={i} className="p-5 bg-white rounded-lg border border-[#C9A050]/20 shadow-sm flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C9A050] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif-luxury font-bold text-sm text-[#0E2A22]">{conn.landmark}</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{conn.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS */}
      <section className="py-16 bg-[#F4EFE6] text-[#1E242B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif-luxury text-2xl font-bold text-[#0E2A22]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {project.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center text-sm font-semibold text-[#0E2A22] hover:text-[#C9A050] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ENQUIRY FORM */}
      <section id="enquiry" className="py-20 bg-[#071914] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73] block mb-2">
              Direct Developer Enquiry
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#FAF9F5]">
              Request Detailed Plans for {project.name}
            </h2>
          </div>

          <EnquiryForm defaultProject={project.id} sourceContext={`Project Page: ${project.name}`} />
        </div>
      </section>
    </div>
  );
};
