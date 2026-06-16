import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const navLinks = [
    { label: 'CASA', href: '/' },
    { label: 'DI', href: '/about' },
    { label: 'GARAGE', href: '/showroom' },
    { label: 'VENDERE', href: '/sell-your-car' },
    { label: 'TRASPORTO', href: '/trasporto' },
  ];

  return (
    <footer className="bg-[#0f172a] pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section - Logo */}
        <div className="mb-12">
          
          {/* Logo + Description */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/WalCars - Logo Design - 01 (1).png"
                alt="WalCars"
                width={150}
                height={150}
                className="rounded-full shadow-lg"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Specializzati nell&apos;acquisto, vendita e trasporto di veicoli usati. Valutiamo auto, furgoni e camper in qualsiasi condizione. Servizio rapido, trasparente e professionale in tutta Italia.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Pages */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                PAGINE
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 text-sm hover:text-[#FAC104] transition-colors uppercase font-medium" 
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Template Pages (Placeholder or keep minimal) */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                SERVIZI
              </h4>
              <ul className="space-y-4">
                <li className="text-gray-400 text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  VALUTAZIONE GRATUITA
                </li>
                <li className="text-gray-400 text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  RITIRO A DOMICILIO
                </li>
                <li className="text-gray-400 text-sm uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  TRASPORTO NAZIONALE
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                CONTATTI
              </h4>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span className="text-[#FAC104] text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
                  <a 
                    href="https://wa.me/393282677366" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm font-medium hover:text-[#FAC104] transition-colors" 
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    +39 328 267 7366
                  </a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#FAC104] text-[10px] font-bold uppercase tracking-widest">Email</span>
                  <span className="text-gray-400 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    walcarsit@gmail.com
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[#FAC104] text-[10px] font-bold uppercase tracking-widest">Sede</span>
                  <span className="text-gray-400 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Provincia di Ravenna, Italia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Copyright © 2026 WalCars
            </p>

            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Sito Creato da: <span className="text-[#FAC104]">Abbad Ahmed Khan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
