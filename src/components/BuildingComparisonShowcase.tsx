import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles
} from 'lucide-react';

export const BuildingComparisonShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<'casa-one' | 'casa-bliss'>('casa-one');

  return (
    <section className="py-24 bg-[#071914] text-white relative overflow-hidden" id="architecture-deep-dive">
      {/* Background Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#163B31]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#163B31] border border-[#C9A050]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBA73]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA73]">
              Architectural Elevation & Stratum Study
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F5] leading-tight">
            Anatomy of Our <span className="gold-gradient-text">Monolithic Elevations</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Every Aurrum Rise development is engineered with low floor-density ratios, disciplined sunpath orientation, and bespoke stone-finish textured elevations.
          </p>

          {/* Project Toggle Switch */}
          <div className="mt-8 inline-flex p-1 rounded-lg bg-[#0E2A22] border border-[#C9A050]/30">
            <button
              onClick={() => setSelectedProject('casa-one')}
              className={`px-6 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold transition-all ${
                selectedProject === 'casa-one'
                  ? 'bg-[#C9A050] text-[#071914] shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Casa One • G+7 Monolith
            </button>
            <button
              onClick={() => setSelectedProject('casa-bliss')}
              className={`px-6 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold transition-all ${
                selectedProject === 'casa-bliss'
                  ? 'bg-[#C9A050] text-[#071914] shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Casa Bliss • 24 Boutique Homes
            </button>
          </div>
        </div>

        {/* Dual Elevation Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#05130F]/80 border border-[#C9A050]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          
          {/* LEFT: Facade Visualization with Live Hotspots */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative max-w-sm sm:max-w-md w-full aspect-[4/5] flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#0E2A22]/50 to-transparent p-4 border border-white/5 group">
              
              <img
                src={selectedProject === 'casa-one' ? '/assets/casa-one-facade.png' : '/assets/casa-bliss-facade.png'}
                alt="Architectural Facade"
                className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
              />

              {/* Dynamic Overlay Floating Badges */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-[#C9A050]/40 px-3 py-1.5 rounded-md text-[11px] font-mono text-[#DFBA73]">
                {selectedProject === 'casa-one' ? 'STRUCT: G+7 STOREY' : 'STRUCT: G+4 EXCLUSIVE'}
              </div>

              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-[#C9A050]/40 px-3 py-1.5 rounded-md text-[11px] font-mono text-gray-300">
                {selectedProject === 'casa-one' ? 'CIDCO PLOT: SEC 51, DRONAGIRI' : 'CIDCO PLOT: SEC 47, DRONAGIRI'}
              </div>

              {/* Interactive Visual Scan Beam Effect */}
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBA73] to-transparent animate-pulse top-1/3 pointer-events-none opacity-50" />
            </div>

            <p className="text-[11px] font-mono text-gray-400 mt-3 text-center">
              Rendered Architectural Facade • North-East Sunpath Optimized
            </p>
          </div>

          {/* RIGHT: Detailed Architectural Matrix */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFBA73] block mb-1">
                {selectedProject === 'casa-one' ? 'Masterpiece Spec 01' : 'Masterpiece Spec 02'}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                {selectedProject === 'casa-one' 
                  ? 'Casa One: Serenity Meets Proportion' 
                  : 'Casa Bliss: Intimacy & Exclusivity'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light leading-relaxed">
                {selectedProject === 'casa-one'
                  ? 'Engineered as an iconic boutique tower with only 4 residences per floor, Casa One delivers unhindered sea breeze cross-ventilation, panoramic morning light, and acoustic boundary buffering.'
                  : 'A low-rise enclave of just 24 curated families with street-level boutique retail (Casa Arcade) that protects residents from crowded high-density living while keeping every modern amenity within reach.'}
              </p>
            </div>

            {/* Matrix Data Points */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Density Ratio</span>
                <span className="text-lg font-serif-luxury font-bold text-[#DFBA73]">
                  {selectedProject === 'casa-one' ? '4 Units / Floor' : '6 Units / Floor'}
                </span>
                <span className="text-[11px] text-gray-400 block mt-0.5">Maximum privacy & zero long corridor noise</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Transit Time</span>
                <span className="text-lg font-serif-luxury font-bold text-[#DFBA73]">~20 Mins</span>
                <span className="text-[11px] text-gray-400 block mt-0.5">To South Mumbai via Atal Setu (MTHL)</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Legal Standing</span>
                <span className="text-lg font-serif-luxury font-bold text-[#DFBA73]">CIDCO Clear Title</span>
                <span className="text-[11px] text-gray-400 block mt-0.5">100% verified documentation & approvals</span>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Configurations</span>
                <span className="text-lg font-serif-luxury font-bold text-[#DFBA73]">1 & 2 BHK Collections</span>
                <span className="text-[11px] text-gray-400 block mt-0.5">Generous balconies & efficient carpet areas</span>
              </div>
            </div>

            {/* Strategic Call to Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={selectedProject === 'casa-one' ? '/projects/casa-one' : '/projects/casa-bliss'}
                className="w-full sm:w-auto px-6 py-3 bg-[#C9A050] hover:bg-[#DFBA73] text-[#071914] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center space-x-2 transition-all shadow-lg"
              >
                <span>View Complete Plans & Sanctions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 border border-[#C9A050]/50 hover:border-[#DFBA73] text-[#DFBA73] hover:text-white text-xs uppercase tracking-wider font-semibold rounded flex items-center justify-center space-x-2 transition-all"
              >
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
