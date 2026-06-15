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
        
        {/* Top Section - Logo + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
          
          {/* Left: Logo + Description */}
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

          {/* Right: Newsletter */}
          <div className="lg:text-right">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              UNISCITI ALLA NOSTRA COMMUNITY!
            </h3>
            <div className="flex items-center bg-white rounded-lg overflow-hidden max-w-md lg:ml-auto">
              <input
                type="email"
                placeholder="Indirizzo Email"
                className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              />
              <button className="bg-[#FAC104] text-[#0f172a] text-sm font-bold px-6 py-3 hover:bg-[#D4A203] transition-colors uppercase tracking-wider">
                INVIA
              </button>
            </div>
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
                  <span className="text-gray-400 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    3282677366
                  </span>
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
              Copyright © 2025 WalCars
            </p>

            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Powered by <span className="text-[#FAC104]">AxisTechGroup</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
