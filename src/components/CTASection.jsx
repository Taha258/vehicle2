// src/components/CTASection.jsx
import Link from 'next/link';
import { ArrowRight, Car, Tag } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-[#dedede]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* LEFT BOX — BUYING CARS */}
          <div className="group relative bg-[#0f172a] rounded-2xl p-8 md:p-10 overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-1">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAC104]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#FAC104]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FAC104] transition-colors duration-500">
                <Car className="w-7 h-7 text-[#FAC104] group-hover:text-white transition-colors duration-500" />
              </div>
              
              {/* Heading */}
              <h3
                className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                TROVA LA TUA <span className="text-[#FAC104]">AUTO IDEALE</span>
              </h3>
              
              {/* Text */}
              <p
                className="text-gray-400 text-sm md:text-base leading-relaxed mb-8"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Scopri la nostra selezione di auto usate e garantite. Veicoli controllati, prezzi competitivi e assistenza professionale per aiutarti a trovare l&apos;auto perfetta per le tue esigenze.
              </p>
              
              {/* Button */}
              <Link
                href="/showroom"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAC104] text-[#0f172a] rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#FBDB5C] active:scale-95 transition-all duration-300 shadow-lg shadow-[#FAC104]/25 group/btn"
              >
                SCOPRI LE AUTO
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT BOX — SELLING CARS */}
          <div className="group relative bg-white rounded-2xl p-8 md:p-10 overflow-hidden border border-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-1">
            {/* Decorative Blur */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#FAC104]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FAC104] transition-colors duration-500">
                <Tag className="w-7 h-7 text-[#FAC104] group-hover:text-white transition-colors duration-500" />
              </div>
              
              {/* Heading */}
              <h3
                className="text-[#0f172a] text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                VUOI VENDERE LA TUA <span className="text-[#FAC104]">AUTO?</span>
              </h3>
              
              {/* Text */}
              <p
                className="text-gray-600 text-sm md:text-base leading-relaxed mb-8"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Ricevi una valutazione rapida e senza impegno. Acquistiamo auto di qualsiasi marca con pagamento veloce e gestione completa delle pratiche burocratiche.
              </p>
              
              {/* Button */}
              <Link
                href="/sell-your-car"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0f172a] text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1e293b] active:scale-95 transition-all duration-300 shadow-lg group/btn"
              >
                RICHIEDI UNA VALUTAZIONE
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}