import Image from 'next/image';

export default function TrasportoPage() {
  return (
    <main className="bg-[#0f172a] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/gallary-car2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0f172a]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#FAC104]/20 backdrop-blur-md rounded-full border border-[#FAC104]/30 mb-4">
            <span className="text-[#FAC104] text-xs font-bold tracking-[0.2em] uppercase">Logistica di lusso</span>
          </div>
          <h1
            className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            TRASPORTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">E CONSEGNA</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Servizio di trasporto sicuro e affidabile per le tue auto più preziose, in tutta Italia e all&apos;estero.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1">
            <Image
              src="/images/67210d3c6c5dda52abf0e1de_lamborghini-urus-p-1600.jpg"
              alt="Transport Service"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              Sicurezza Garantita
            </h2>
            <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Il nostro servizio di trasporto è studiato per garantire la massima protezione del veicolo. Utilizziamo mezzi moderni e personale altamente qualificato per assicurarci che la tua auto arrivi a destinazione in condizioni perfette.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-[#FAC104] font-bold uppercase text-sm mb-2">Copertura Totale</h3>
                <p className="text-gray-400 text-xs">Assicurazione completa durante tutto il tragitto.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-[#FAC104] font-bold uppercase text-sm mb-2">Monitoraggio GPS</h3>
                <p className="text-gray-400 text-xs">Controlla la posizione del tuo veicolo in tempo reale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
