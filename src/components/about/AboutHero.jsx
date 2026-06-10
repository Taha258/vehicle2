export default function AboutHero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/images/HeroSectionimage.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0f172a]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
        <div className="inline-block px-4 py-1.5 bg-[#FAC104]/20 backdrop-blur-md rounded-full border border-[#FAC104]/30 mb-4 animate-pulse">
          <span className="text-[#FAC104] text-xs font-bold tracking-[0.2em] uppercase">Legacy of Excellence</span>
        </div>
        <h1
          className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          LA NOSTRA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">STORIA</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Professionalità, passione e trasparenza al servizio degli automobilisti.
        </p>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}