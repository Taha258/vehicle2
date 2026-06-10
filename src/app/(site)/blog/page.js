import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/src/lib/blogData';
import { ArrowUpRight, Clock, User } from 'lucide-react';

export const metadata = {
  title: 'Blog - MotorDeal',
  description: 'Latest automotive news, reviews, and guides',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/HeroSectionimage.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0f172a]" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
          <div className="inline-block px-4 py-1.5 bg-[#FAC104]/20 backdrop-blur-md rounded-full border border-[#FAC104]/30 mb-6">
            <span className="text-[#FAC104] text-xs font-bold tracking-[0.2em] uppercase">Motor Magazine</span>
          </div>
          <h1
            className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            LATEST <span className="text-[#FAC104]">BLOG</span> POSTS
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mt-4 font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Stay updated with the latest automotive news, reviews, and expert guides.
          </p>
        </div>
      </section>

      {/* ── BLOG GRID ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`} 
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                />
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#0f172a] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      {post.authorImage && (
                        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#FAC104]/30">
                          <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                        </div>
                      )}
                      <span>{post.author}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#FAC104]" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 
                    className="text-[#0f172a] text-xl font-bold leading-tight group-hover:text-[#FAC104] transition-colors line-clamp-2" 
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {post.title}
                  </h3>
                </div>

                <div className="pt-8 mt-auto flex items-center justify-between border-t border-gray-50">
                  <span className="text-[#FAC104] text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Read Post <ArrowUpRight className="w-3 h-3" />
                  </span>
                  <span className="text-gray-300 text-[10px] font-bold">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
