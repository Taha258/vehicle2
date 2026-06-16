// src\components\Testimonials.jsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Grant',
    role: 'Imprenditore',
    image: '/images/6738c1f8a220b4656b9a38e8_tom.jpg',
    rating: 5,
    text: 'MotorDeal ha ridefinito le mie aspettative. L\'acquisto della mia Huracán è stato fluido, professionale e veramente di alto livello.',
  },
  {
    id: 2,
    name: 'Sara Blake',
    role: 'Collezionista d\'Arte',
    image: '/images/6738c1f7ac831b128ccfcc33_Sara-p-500.jpg',
    rating: 5,
    text: 'Cercare uno specifico modello d\'epoca è stata una sfida finché non ho incontrato il team di MotorDeal. Le loro capacità di ricerca non hanno eguali.',
  },
  {
    id: 3,
    name: 'Jack Lee',
    role: 'Fondatore Tech',
    image: '/images/6738c1f8ccc3d328d217bf7c_Alex.jpg',
    rating: 5,
    text: 'L\'efficienza incontra il lusso. Apprezzo la trasparenza dei prezzi e la velocità con cui hanno finalizzato le pratiche per la mia Urus.',
  },
  {
    id: 4,
    name: 'Lisa Chen',
    role: 'Direttore del Design',
    image: '/images/6738c1f70036ea32826789a5_Lisa-p-500.jpg',
    rating: 5,
    text: 'L\'estetica dello showroom è superata solo dalla qualità del loro parco auto. Un\'esperienza veramente premium dall\'inizio alla fine.',
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#0f172a] py-16 px-4 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FAC104]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
          <div className="space-y-4">
            {/* Small Label */}
            <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#FAC104]" />
              Recensioni
            </div>
            
            {/* Main Heading */}
            <h2
              className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              COSA DICONO I NOSTRI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">CLIENTI</span>
            </h2>
            
            {/* Intro Text */}
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              La soddisfazione dei nostri clienti è il nostro miglior risultato.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FAC104] hover:border-[#FAC104] transition-all duration-300 group"
            >
              <ChevronLeft className="w-4 h-4 text-white group-hover:scale-110" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FAC104] hover:border-[#FAC104] transition-all duration-300 group"
            >
              <ChevronRight className="w-4 h-4 text-white group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-visible">
          <div
            ref={scrollRef}
            className="flex gap-6 scroll-smooth pb-6"
            style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-6 w-[300px] md:w-[380px] flex-shrink-0 hover:border-[#FAC104]/30 transition-all duration-500 shadow-2xl relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FAC104] text-[#FAC104]" />
                  ))}
                </div>

                {/* Review Text */}
                <p 
                  className="text-gray-300 text-sm leading-relaxed italic mb-6" 
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  &quot;{testimonial.text}&quot;
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#FAC104]/20 shadow-lg shadow-[#FAC104]/10">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48} 
                      className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-[#FAC104] text-xs font-bold uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
