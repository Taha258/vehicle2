import Image from 'next/image';

export default function AboutStory() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
                <div className="w-8 h-px bg-[#FAC104]" />
                Origins
              </div>
              <h2
                className="text-[#0f172a] text-4xl md:text-5xl font-extrabold leading-tight uppercase tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                COSTRUITI SULLA FIDUCIA, <br />
                <span className="text-[#FAC104]">GUIDATI DALLA PASSIONE</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p
                className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                WalCars nasce con l&apos;obiettivo di offrire un servizio affidabile e trasparente nel settore automobilistico. Nel corso degli anni abbiamo aiutato centinaia di clienti ad acquistare, vendere e trasportare i propri veicoli in totale sicurezza.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-[#0f172a] text-2xl font-bold mb-1">2012</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Year Founded</p>
              </div>
              <div>
                <h4 className="text-[#0f172a] text-2xl font-bold mb-1">Global</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Client Base</p>
              </div>
            </div>
          </div>

          {/* Right: Image with Frame */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#FAC104] rounded-[3rem] translate-x-4 translate-y-4 opacity-10" />
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/yellow-car.jpg"
                alt="About MotorDeal"
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}