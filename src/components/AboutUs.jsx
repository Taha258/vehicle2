export default function AboutStats() {
  return (
    <section 
      className="py-16 px-4"
      style={{ backgroundColor: '#dedede' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0f172a] rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left: About Us */}
            <div>
              <p
                className="text-[#FAC104] text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                CHI SIAMO
              </p>
              <h2
                className="text-white text-xl md:text-2xl font-bold leading-tight mb-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                PASSIONE PER LE AUTO,
              </h2>
              <h2
                className="text-white text-xl md:text-2xl font-bold leading-tight mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                FIDUCIA IN OGNI TRATTATIVA
              </h2>
              <p
                className="text-gray-400 text-sm font-medium leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                WalCars è un punto di riferimento per chi desidera acquistare, vendere o trasportare un veicolo in modo semplice e sicuro. Offriamo un servizio professionale, trasparente e orientato alle esigenze del cliente, accompagnandolo in ogni fase del processo.
              </p>
            </div>

            {/* Right: Stats Grid 2x2 with Dividers */}
            <div className="grid grid-cols-2">
              
              {/* Stat 1 - Top Left */}
              <div className="text-center p-4 border-r border-b border-white/10">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  500+
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  AUTO VENDUTE
                </p>
              </div>

              {/* Stat 2 - Top Right */}
              <div className="text-center p-4 border-b border-white/10">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  300+
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  AUTO ACQUISTATE
                </p>
              </div>

              {/* Stat 3 - Bottom Left */}
              <div className="text-center p-4 border-r border-white/10">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  200+
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  TRASPORTI COMPLETATI
                </p>
              </div>

              {/* Stat 4 - Bottom Right */}
              <div className="text-center p-4">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  100%
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  CLIENTI SODDISFATTI
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}