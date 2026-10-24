import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  url: string;
  title: string;
  category?: string;
  desc?: string;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#071914] border border-[#C9A050]/20 aspect-[4/3] shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div className="absolute top-3 right-3 p-2 bg-[#0E2A22]/80 backdrop-blur rounded-full text-[#DFBA73] opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>

            <div className="absolute bottom-3 left-4 right-4 text-left">
              {item.category && (
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#C9A050] block mb-1">
                  {item.category}
                </span>
              )}
              <h4 className="text-white text-sm font-serif-luxury font-medium line-clamp-1">
                {item.title}
              </h4>
              {item.desc && (
                <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close preview"
            className="absolute top-6 right-6 p-2 text-white hover:text-[#C9A050] transition-colors rounded-full bg-white/10 hover:bg-white/20 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#C9A050] transition-colors rounded-full bg-white/10 hover:bg-white/20 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[selectedIndex].url}
              alt={items[selectedIndex].title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded border border-[#C9A050]/30 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-serif-luxury text-lg tracking-wide">
                {items[selectedIndex].title}
              </h3>
              {items[selectedIndex].desc && (
                <p className="text-gray-300 text-xs mt-1 max-w-xl mx-auto">
                  {items[selectedIndex].desc}
                </p>
              )}
              <span className="text-[11px] text-[#C9A050] mt-1 block">
                {selectedIndex + 1} of {items.length}
              </span>
            </div>
          </div>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#C9A050] transition-colors rounded-full bg-white/10 hover:bg-white/20 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
