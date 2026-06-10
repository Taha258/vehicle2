'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CarGallery({ images, carName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-10">
      {/* Main Image View */}
      <div 
        className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100 cursor-zoom-in"
        onClick={() => openLightbox(mainImageIndex)}
      >
        <Image 
          src={images[mainImageIndex]} 
          alt={carName} 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
      </div>

      {/* Gallery Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 4).map((img, i) => (
            <div 
              key={i} 
              className={`relative h-24 md:h-32 rounded-[1.5rem] overflow-hidden border-2 transition-all cursor-pointer shadow-sm
                ${mainImageIndex === i ? 'border-[#FAC104] scale-95' : 'border-transparent hover:border-[#FAC104]/50'}`}
              onClick={() => {
                setMainImageIndex(i);
                openLightbox(i);
              }}
            >
              <Image src={img} alt={`${carName} ${i}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <X className="w-10 h-10" />
          </button>

          <button 
            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 hover:bg-white/10 p-4 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={images[currentIndex]} 
              alt={`${carName} ${currentIndex}`}
              fill
              className="object-contain animate-in zoom-in-95 duration-500"
            />
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto p-4 max-w-full">
            {images.map((img, i) => (
              <div 
                key={i}
                className={`relative w-16 h-12 md:w-20 md:h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0
                  ${currentIndex === i ? 'border-[#FAC104] scale-110' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
              >
                <Image src={img} alt="thumbnail" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
