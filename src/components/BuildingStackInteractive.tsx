import React, { useEffect, useRef, useState } from 'react';
import { 
  Layers, Sparkles, CheckCircle2, 
  ArrowDownRight, Maximize2, RotateCcw
} from 'lucide-react';

interface BuildingBlock {
  id: string;
  name: string;
  tier: string;
  floorRange: string;
  units: string;
  description: string;
  features: string[];
  image: string;
  aspectRatio: string;
  yOffsetInitial: number; // starts far above/off to land dynamically
  rotateInitial: number;
}

const BUILDING_BLOCKS: BuildingBlock[] = [
  {
    id: 'crown',
    name: 'Architectural Crown & Sky Observatory',
    tier: 'Sky Deck • Pinnacle',
    floorRange: 'Top Terrace / Level 08',
    units: 'Exclusive Sky Lounge',
    description: 'Sculpted pergola crown with panoramic sea breezes, sunset decks, and private rooftop star-gazing terraces designed for quiet contemplation.',
    features: ['360° Open Horizon Views', 'Acoustic Wind Buffers', 'Star Gazing Lounge', 'Lush Planters'],
    image: '/assets/casa-one-layer-crown.png',
    aspectRatio: '557 / 220',
    yOffsetInitial: -180,
    rotateInitial: -3.5,
  },
  {
    id: 'penthouse',
    name: 'Penthouse & Signature Residences',
    tier: 'Upper Reserve • G+7',
    floorRange: 'Level 06 - 07',
    units: '4 Curated Suites',
    description: 'Duplex scale ceiling clearances, private terrace extensions, and premium master bedroom corners capturing unbroken morning light.',
    features: ['10.5 ft Floor-to-Ceiling Clearances', 'Wraparound Private Verandahs', 'Private Lift Access Zone', 'Designer Vastu Layouts'],
    image: '/assets/casa-one-layer-penthouse.png',
    aspectRatio: '557 / 180',
    yOffsetInitial: -140,
    rotateInitial: 3.2,
  },
  {
    id: 'upper-suite',
    name: 'Upper Boutique Residential Tier',
    tier: 'Executive Wings',
    floorRange: 'Level 04 - 05',
    units: '8 Premium 2 BHKs',
    description: 'Optimized acoustic quiet, high cross-ventilation, and dual full-length sit-out balconies oriented toward seasonal coastal breeze corridors.',
    features: ['Dual Balconies per Residence', 'Cross-Ventilated Living Lounges', 'Branded Italian Finish Tile Work', 'Heavy Section Anodized Windows'],
    image: '/assets/casa-one-layer-upper-suite.png',
    aspectRatio: '557 / 180',
    yOffsetInitial: -100,
    rotateInitial: -2.8,
  },
  {
    id: 'mid-suite',
    name: 'Mid-Rise Garden View Residences',
    tier: 'Core Residential',
    floorRange: 'Level 02 - 03',
    units: '8 Serene 1 & 2 BHKs',
    description: 'Intelligently planned compact luxury with minimum internal passage waste and maximum carpet efficiency for everyday family serenity.',
    features: ['Zero Dead Space Planning', 'CIDCO Clear Title Compliant', 'Concealed Copper Wiring', 'Granite Kitchen Platform'],
    image: '/assets/casa-one-layer-mid-suite.png',
    aspectRatio: '557 / 180',
    yOffsetInitial: -70,
    rotateInitial: 2.5,
  },
  {
    id: 'lower-suite',
    name: 'First Level Residential Terraces',
    tier: 'Boutique Collection',
    floorRange: 'Level 01',
    units: '4 Elevated Homes',
    description: 'Generous private deck spaces overlooking the manicured arrival courts, blending immediate accessibility with refined seclusion.',
    features: ['Oversized Private Deck', 'Quick Step Access', 'Double Soundproof Glazing', 'Video Door Phone Security'],
    image: '/assets/casa-one-layer-lower-suite.png',
    aspectRatio: '557 / 160',
    yOffsetInitial: -40,
    rotateInitial: -2.0,
  },
  {
    id: 'podium',
    name: 'Grand Double-Height Entrance & Arcade',
    tier: 'Ground Foundation',
    floorRange: 'Ground Level / Plinth',
    units: 'Casa Arcade & Lobby',
    description: 'Reinforced seismic plinth foundation, triple-height designer reception lounge, curated boutique convenience stores, and sheltered drop-off portico.',
    features: ['Seismic Zone III Compliant RCC', 'Double-Height Designer Lobby', 'Casa Arcade Convenience', 'Automated High-Speed Elevators'],
    image: '/assets/casa-one-layer-podium.png',
    aspectRatio: '557 / 204',
    yOffsetInitial: 0,
    rotateInitial: 0,
  },
];

export const BuildingStackInteractive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [isExploded, setIsExploded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track scroll position within the 300vh sticky container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Determine active highlight tier based on progress
      // 0.0 to 1.0 mapped to 6 layers (from bottom podium up to crown)
      // When scrolling down, layers assemble and lock into place
      const totalBlocks = BUILDING_BLOCKS.length;
      // reversed index for display from bottom up
      const currentStep = Math.min(
        Math.floor(progress * totalBlocks),
        totalBlocks - 1
      );
      // Let active block match the currently assembling tier
      setActiveLayerIndex(totalBlocks - 1 - currentStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle 3D mouse tilt when hovering over building
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const activeBlock = BUILDING_BLOCKS[activeLayerIndex] || BUILDING_BLOCKS[0];

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[320vh] bg-[#05130F] text-white selection:bg-[#C9A050]"
      id="building-stack-section"
    >
      {/* Dynamic Background Grid & Architectural Blueprint Lines */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#C9A050_1px,transparent_1px)] [background-size:28px_28px]" 
        />
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#163B31]/40 blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-[#C9A050]/20 blur-3xl" />

        {/* Dynamic Architectural Coordinate Watermarks */}
        <div className="absolute top-28 left-8 hidden lg:flex flex-col space-y-1 text-[11px] font-mono text-[#DFBA73]/40 tracking-wider">
          <span>LAT 18.8924° N</span>
          <span>LON 72.9510° E</span>
          <span>STRUCTURE: G+7 BOUTIQUE MONOLITH</span>
          <span>ELEVATION: +18.400 MTR MSL</span>
        </div>

        <div className="absolute top-28 right-8 hidden lg:flex flex-col space-y-1 text-right text-[11px] font-mono text-[#DFBA73]/40 tracking-wider">
          <span>RERA VERIFIED CAD / SEISMIC III</span>
          <span>CROSS-VENTILATION MATRIX: 86%</span>
          <span>EXPLODED STATE: {isExploded ? 'MANUAL OVERRIDE' : 'DYNAMIC KINETIC'}</span>
          <span>SCROLL PROGRESS: {(scrollProgress * 100).toFixed(0)}%</span>
        </div>
      </div>

      {/* Sticky Main Stage Container */}
      <div className="sticky top-0 h-screen w-full z-10 flex flex-col justify-center px-4 sm:px-6 lg:px-12 pointer-events-auto">
        {/* Top Header & Interactive Mode Bar */}
        <div className="max-w-7xl mx-auto w-full pt-4 pb-4 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 gap-3">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#163B31]/80 border border-[#C9A050]/30 backdrop-blur-md mb-2">
              <Sparkles className="w-3 h-3 text-[#DFBA73]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#DFBA73]">
                Kinetic Architectural Anatomy
              </span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF9F5]">
              Assembling <span className="gold-gradient-text">Casa One & Casa Bliss</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light mt-1 max-w-xl">
              Scroll down to watch each structural tier float in and lock into place over the architectural plinth. Hover and inspect each stratum.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsExploded(!isExploded)}
              className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-all border ${
                isExploded 
                  ? 'bg-[#C9A050] text-[#071914] border-[#DFBA73] shadow-lg shadow-[#C9A050]/20'
                  : 'bg-[#163B31]/60 text-[#DFBA73] border-[#C9A050]/40 hover:bg-[#163B31]'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isExploded ? 'Re-Assemble Monolith' : 'Exploded View'}</span>
            </button>

            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded bg-black/40 border border-white/10 text-[11px] text-gray-400 font-mono">
              <RotateCcw className="w-3 h-3 text-[#DFBA73]" />
              <span>Scroll to Build</span>
            </div>
          </div>
        </div>

        {/* Central Kinetic Workspace: Building Left/Center + Information HUD Right */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 py-4 min-h-0">
          
          {/* LEFT: 3D Kinetic Building Assembler */}
          <div 
            className="w-full lg:w-7/12 h-[52vh] sm:h-[62vh] lg:h-[70vh] flex items-center justify-center relative select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            {/* Background Ambient Glow around the building */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#C9A050]/15 to-[#163B31]/50 blur-3xl transition-transform duration-700"
                style={{
                  transform: `scale(${0.8 + scrollProgress * 0.4})`,
                }}
              />
            </div>

            {/* Ghost Blueprint Silhouette in the background */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 filter contrast-125 transition-opacity duration-500"
              style={{
                opacity: scrollProgress < 0.85 ? 0.25 : 0.05,
              }}
            >
              <img 
                src="/assets/casa-one-facade.png" 
                alt="Architectural Blueprint Frame" 
                className="max-h-[92%] w-auto object-contain filter invert hue-rotate-180 drop-shadow-[0_0_20px_rgba(201,160,80,0.3)]"
              />
            </div>

            {/* Kinetic Stack Container with Mouse 3D Tilt */}
            <div 
              className="relative flex flex-col items-center justify-end h-full max-h-[580px] w-full max-w-[420px] transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg) translateY(${isExploded ? '-10px' : '0px'})`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Render Slices from top (index 0 = Crown) down to bottom (index 5 = Podium) */}
              {BUILDING_BLOCKS.map((block, idx) => {
                // Calculate dynamic assembly progress for this block
                // index 5 (podium) arrives first (progress 0.0 -> 0.15)
                // index 0 (crown) arrives last (progress 0.75 -> 1.0)
                const reverseIdx = BUILDING_BLOCKS.length - 1 - idx; // 0 for podium, 5 for crown
                const stepStart = reverseIdx * 0.15;
                const stepEnd = stepStart + 0.25;

                // localProgress: 0 = far away, 1 = snapped into exact building position
                let localProgress = 0;
                if (isExploded) {
                  localProgress = 0.6; // exploded view freeze
                } else if (scrollProgress >= stepEnd) {
                  localProgress = 1;
                } else if (scrollProgress <= stepStart) {
                  localProgress = 0;
                } else {
                  localProgress = (scrollProgress - stepStart) / (stepEnd - stepStart);
                }

                // Smooth cubic ease out
                const easeProgress = 1 - Math.pow(1 - localProgress, 3);

                // Displacements
                const explodedExtra = isExploded ? (2.5 - idx) * 36 : 0;
                const translateY = (1 - easeProgress) * block.yOffsetInitial * 2.8 + explodedExtra;
                const rotateDeg = (1 - easeProgress) * block.rotateInitial;
                const opacity = 0.2 + easeProgress * 0.8;
                const scale = 0.88 + easeProgress * 0.12;

                const isCurrentActive = activeLayerIndex === idx;

                return (
                  <div
                    key={block.id}
                    onClick={() => setActiveLayerIndex(idx)}
                    onMouseEnter={() => setActiveLayerIndex(idx)}
                    className={`relative w-full cursor-pointer transition-all duration-300 group ${
                      isCurrentActive ? 'z-30 filter drop-shadow-[0_0_18px_rgba(201,160,80,0.6)]' : 'z-10 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]'
                    }`}
                    style={{
                      transform: `translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`,
                      opacity,
                      transformOrigin: 'center center',
                    }}
                  >
                    {/* Layer Image Cutout */}
                    <img
                      src={block.image}
                      alt={block.name}
                      className={`w-full h-auto object-contain transition-all duration-300 ${
                        isCurrentActive ? 'brightness-110 contrast-110 ring-1 ring-[#DFBA73]/60 rounded-sm' : 'brightness-95 hover:brightness-105'
                      }`}
                      style={{
                        margin: '-1px 0', // seamless vertical flush join
                      }}
                    />

                    {/* Interactive Floating Floor Tag on Right Side */}
                    <div 
                      className={`absolute right-[-10px] sm:right-[-28px] top-1/2 -translate-y-1/2 flex items-center space-x-2 pointer-events-none transition-all duration-300 ${
                        isCurrentActive ? 'opacity-100 translate-x-2' : 'opacity-0 sm:opacity-40 group-hover:opacity-100'
                      }`}
                    >
                      <div className={`h-[1px] w-6 sm:w-10 ${isCurrentActive ? 'bg-[#DFBA73]' : 'bg-white/30'}`} />
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-md ${
                        isCurrentActive 
                          ? 'bg-[#C9A050] text-[#071914] font-bold shadow-md' 
                          : 'bg-black/60 text-gray-300 border border-white/10'
                      }`}>
                        {block.tier}
                      </span>
                    </div>

                    {/* Interactive Pulse Dot on Left Side */}
                    <div 
                      className={`absolute left-[-8px] sm:left-[-16px] top-1/2 -translate-y-1/2 transition-all duration-300 ${
                        isCurrentActive ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-60 scale-75'
                      }`}
                    >
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFBA73] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9A050]"></span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Plinth Shadow & Ground Surface */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/60 blur-xl rounded-full pointer-events-none" />
          </div>

          {/* RIGHT: Live Architectural HUD / Spec Dossier */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="bg-[#071914]/90 backdrop-blur-xl border border-[#C9A050]/40 rounded-xl p-5 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-500">
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C9A050]/20 to-transparent pointer-events-none" />
              <div className="absolute top-2 right-2 text-[10px] font-mono text-[#DFBA73]/60">
                BLOCK #{6 - activeLayerIndex} OF 6
              </div>

              {/* Tier Status Badge */}
              <div className="flex items-center space-x-2 text-xs text-[#DFBA73] mb-2 font-mono">
                <Layers className="w-4 h-4" />
                <span className="uppercase tracking-[0.2em] font-semibold">{activeBlock.tier}</span>
                <span className="text-white/40">•</span>
                <span className="text-gray-300">{activeBlock.floorRange}</span>
              </div>

              {/* Title & Units */}
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                {activeBlock.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-5">
                {activeBlock.description}
              </p>

              {/* Key Architectural Specifications */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                <span className="text-[11px] uppercase tracking-wider text-[#C9A050] font-semibold flex items-center space-x-1">
                  <span>Stratum Highlights & Quality Specs:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                  {activeBlock.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-white/5 px-2.5 py-1.5 rounded border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Selector Pills to Jump Between Blocks */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {BUILDING_BLOCKS.map((b, idx) => (
                    <button
                      key={b.id}
                      onClick={() => setActiveLayerIndex(idx)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded transition-all ${
                        activeLayerIndex === idx
                          ? 'bg-[#C9A050] text-[#071914] font-bold shadow-sm'
                          : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      L0{6 - idx}
                    </button>
                  ))}
                </div>

                <a
                  href="#projects-preview"
                  className="text-xs uppercase tracking-wider font-semibold text-[#DFBA73] hover:text-white flex items-center space-x-1 transition-colors"
                >
                  <span>Floor Plans</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bottom Assembly Progress Indicator */}
            <div className="mt-4 px-2 flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span className="flex items-center space-x-2">
                <span className={`inline-block w-2 h-2 rounded-full ${scrollProgress > 0.9 ? 'bg-emerald-400' : 'bg-[#DFBA73] animate-pulse'}`} />
                <span>Status: {scrollProgress > 0.9 ? 'Structure Fully Locked' : 'Dynamic Scroll Assembly In Progress'}</span>
              </span>
              <span>{(scrollProgress * 100).toFixed(0)}% Assembled</span>
            </div>
            {/* Progress bar line */}
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-1.5">
              <div 
                className="bg-gradient-to-r from-[#DFBA73] to-[#C9A050] h-full transition-all duration-150 ease-out"
                style={{ width: `${Math.min(scrollProgress * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator Prompt at Bottom */}
        <div className="w-full text-center py-2 pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFBA73]/70 font-mono">
            {scrollProgress < 0.9 ? '↓ Scroll Down to Lock Higher Floors' : '✓ Structure Fully Assembled • Continue Down'}
          </span>
        </div>
      </div>
    </section>
  );
};
