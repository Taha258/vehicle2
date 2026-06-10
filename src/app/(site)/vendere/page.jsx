import Image from 'next/image';

export default function VenderePage() {
  return (
    <main className="bg-[#0f172a] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/gallary-car1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0f172a]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#FAC104]/20 backdrop-blur-md rounded-full border border-[#FAC104]/30 mb-4">
            <span className="text-[#FAC104] text-xs font-bold tracking-[0.2em] uppercase">Vendi la tua auto</span>
          </div>
          <h1
            className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            VENDERE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">CON NOI</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Offriamo il miglior servizio per vendere la tua auto di lusso in modo rapido e sicuro.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              Perché scegliere i nostri servizi?
            </h2>
            <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Siamo specializzati nella compravendita di auto di prestigio. La nostra rete di collezionisti e appassionati garantisce che la tua auto trovi la casa giusta al giusto prezzo. Ci occupiamo di tutto il processo, dalla valutazione alla vendita finale.
            </p>
            <ul className="space-y-4">
              {['Valutazione Professionale', 'Marketing Strategico', 'Assistenza Burocratica', 'Pagamenti Sicuri'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-[#FAC104] rounded-full" />
                  <span className="text-sm font-semibold tracking-wide uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/6721090e80357065a7b49a4d_ferrari-488-gtb-p-800.jpg"
              alt="Luxury Car"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
