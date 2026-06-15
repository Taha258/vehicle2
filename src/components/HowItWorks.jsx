// src/components/Services.jsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: '/images/purchase-car.png',
    number: '01',
    title: 'COMPRIAMO LA TUA AUTO',
    description:
      'Valutazione rapida e gratuita. Acquistiamo auto usate di qualsiasi marca con pagamento veloce e gestione completa delle pratiche.',
    button: 'RICHIEDI UNA VALUTAZIONE',
    href: '/sell-your-car',
  },
  {
    icon: '/images/service-car-red-removebg-preview.png',
    number: '02',
    title: 'VENDITA AUTO',
    description:
      "Auto selezionate, controllate e pronte alla consegna. Qualità, affidabilità e assistenza prima e dopo l'acquisto.",
    button: 'SCOPRI LE AUTO',
    href: '/showroom',
  },
  {
    icon: '/images/transport-car.png',
    number: '03',
    title: 'TRASPORTO VEICOLI',
    description:
      'Servizio professionale di trasporto auto in tutta Italia. Ritiriamo e consegniamo veicoli in modo sicuro e puntuale.',
    button: 'RICHIEDI UN PREVENTIVO',
    href: '/trasporto',
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-[#dedede] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
            <div className="w-8 h-px bg-[#FAC104]" />
            Servizi
          </div>
          <h2
            className="text-[#0f172a] text-2xl md:text-3xl font-bold uppercase tracking-wide"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            I NOSTRI <span className="text-[#FAC104]">SERVIZI</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#FAC104]/30 transition-all duration-500 hover:shadow-xl overflow-hidden"
            >
              {/* Background Number */}
              <div
                className="absolute top-5 right-5 text-[#0f172a]/5 text-4xl font-black italic select-none"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {service.number}
              </div>

              {/* Icon Image - BIGGER */}
              <div className="w-28 h-28 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#FAC104]/10 transition-colors">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[#0f172a] text-sm font-bold mb-2 tracking-tight uppercase"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-400 text-xs leading-relaxed font-medium mb-5"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {service.description}
              </p>

              {/* Button */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 bg-[#FAC104] text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-[#D4A203] transition-all active:scale-95"
              >
                {service.button}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}