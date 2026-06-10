import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Founder Image with Artistic Frame */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#0f172a] rounded-[4rem] translate-x-6 translate-y-6 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
            <div className="relative h-[650px] rounded-[4rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/men.jpg"
                alt="Founder"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>

          {/* Right: Founder Info */}
          <div className="space-y-12 relative z-20">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
                <div className="w-8 h-px bg-[#FAC104]" />
                Leadership
              </div>
              <h2
                className="text-[#0f172a] text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                LA VISIONE <br />
                <span className="text-[#FAC104]">DIETRO WALCARS</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -left-8 text-8xl text-[#FAC104]/10 leading-none">&quot;</div>
              <p
                className="text-gray-500 text-xl font-medium leading-relaxed italic pl-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                La nostra missione è rendere ogni operazione semplice, veloce e sicura. Crediamo che fiducia, trasparenza e professionalità siano gli elementi fondamentali per costruire relazioni durature con i nostri clienti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}