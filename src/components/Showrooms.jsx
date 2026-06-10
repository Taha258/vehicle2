import Image from 'next/image';
import { MapPin, Navigation } from 'lucide-react';

const showrooms = [
  {
    id: 1,
    name: 'Dubai Showroom',
    city: 'Dubai, UAE',
    address: '123 Sheikh Zayed Road, Al Quoz Industrial Area 3, Near Mall of the Emirates',
    image: '/images/yellow-car.jpg',
    mapLink: 'https://www.google.com/maps/search/123+Sheikh+Zayed+Road,+Al+Quoz+Industrial+Area+3,+Near+Mall+of+the+Emirates,+Dubai,+UAE',
  },
  {
    id: 2,
    name: 'Abu Dhabi Showroom',
    city: 'Abu Dhabi, UAE',
    address: 'Yas Marina Circuit Area, Yas Island, Abu Dhabi, UAE',
    image: '/images/Black-car.jpg',
    mapLink: 'https://www.google.com/maps/search/Yas+Marina+Circuit+Area,+Yas+Island,+Abu+Dhahbi,+UAE',
  },
];

export default function Showrooms() {
  return (
    <section className="py-16 px-4 bg-[#dedede]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#FAC104]" />
              Visit Us
            </div>
            <h2
              className="text-[#0f172a] text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              OPERIAMO IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">TUTTA ITALIA</span>
            </h2>
          </div>
          <p
            className="text-gray-500 text-base font-medium leading-relaxed max-w-md"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Forniamo servizi di acquisto, vendita e trasporto di veicoli su tutto il territorio nazionale.
          </p>
        </div>

        {/* Showrooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showrooms.map((showroom) => (
            <div
              key={showroom.id}
              className="group relative bg-[#0f172a] rounded-xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={showroom.image}
                  alt={showroom.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-90" />
                
                {/* City Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-[#FAC104] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#FAC104]/20">
                    {showroom.city}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <h3
                    className="text-white text-xl font-bold uppercase tracking-tight"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {showroom.name}
                  </h3>
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-[#FAC104] shrink-0 mt-1" />
                    <p className="text-sm font-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {showroom.address}
                    </p>
                  </div>
                </div>

                <a
                  href={showroom.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FAC104] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#D4A203] transition-all duration-300 shadow-lg active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}