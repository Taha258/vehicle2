import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/src/lib/blogData';

export default function BlogAndCTA() {
  const displayPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-16 px-4 bg-[#dedede]">
      <div className="max-w-6xl mx-auto">
        
        {/* Blog Posts Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#FAC104]" />
              Ultimi Aggiornamenti
            </div>
            <h2 className="text-[#0f172a] text-2xl md:text-3xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
              Le Nostre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">News</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-3 text-[#0f172a] font-bold text-sm uppercase tracking-widest hover:text-[#FAC104] transition-colors"
          >
            Vedi tutti gli articoli
            <div className="w-10 h-10 rounded-full border border-[#0f172a]/20 flex items-center justify-center group-hover:border-[#FAC104] group-hover:bg-[#FAC104]/10 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              {/* Image with Category Badge */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0f172a] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 text-[#0f172a] text-[10px] font-bold uppercase tracking-widest mb-3">
                <div className="flex items-center gap-2">
                  {post.authorImage && (
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#FAC104]/30">
                      <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                    </div>
                  )}
                  <span className="opacity-70">{post.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#FAC104]" />
                <span className="opacity-70">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3
                className="text-[#0f172a] text-sm font-bold leading-tight mb-3 group-hover:text-[#FAC104] transition-colors line-clamp-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {post.title}
              </h3>

              {/* Read Post */}
              <div className="flex items-center gap-2 text-[#FAC104] text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                Leggi Articolo
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* ========== FINAL CTA SECTION ========== */}
        <div className="relative bg-[#0f172a] rounded-2xl p-10 md:p-16 overflow-hidden shadow-2xl text-center">
          {/* Decorative Blur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FAC104]/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Heading */}
            <h2
              className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              ENTRA IN CONTATTO CON <span className="text-[#FAC104]">WALCARS</span>
            </h2>
            
            {/* Text */}
            <p
              className="text-gray-400 text-base md:text-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Hai domande o desideri una valutazione gratuita? Siamo a tua disposizione.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/393282677366?text=Hello,%20I%20am%20interested%20in%20your%20cars."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FAC104] text-[#0f172a] rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#FBDB5C] active:scale-95 transition-all duration-300 shadow-lg shadow-[#FAC104]/25"
              >
                CONTATTACI
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              
              <Link
                href="/sell-your-car"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl text-sm font-bold uppercase tracking-wider hover:border-[#FAC104] hover:bg-white/5 active:scale-95 transition-all duration-300"
              >
                RICHIEDI UNA VALUTAZIONE
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
