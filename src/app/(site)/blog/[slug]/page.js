// src/app/blog/[slug]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, getRelatedPosts, categories } from '@/src/lib/blogData';
import { ArrowUpRight } from 'lucide-react';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - MotorDeal',
    };
  }

  return {
    title: `${post.title} - MotorDeal Blog`,
    description: post.content.intro.replace(/<[^>]*>/g, '').slice(0, 160),
  };
}

export default function BlogDetailPage({ params }) {
  // Find the post by slug
  const post = blogPosts.find((p) => p.slug === params.slug);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <main className="min-h-screen bg-[#d6d6d6] pt-24 pb-16">
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN - Article */}
          <div className="lg:col-span-2">
            
            {/* Title */}
            <h1 
              className="text-[#0f172a] text-3xl md:text-4xl font-bold uppercase leading-tight mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-[#0f172a] text-white text-xs px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>

            {/* Main Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-10">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              <p 
                className="text-[#0f172a] text-base leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: post.content.intro }}
              />

              {post.content.sections.map((section, index) => (
                <div key={index}>
                  <h2 
                    className="text-[#0f172a] text-lg font-bold uppercase tracking-wide mb-4"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {section.title}
                  </h2>
                  
                  {section.text && (
                    <p 
                      className="text-[#0f172a] text-base leading-relaxed mb-4"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      dangerouslySetInnerHTML={{ __html: section.text }} 
                    />
                  )}

                  {section.bullets && (
                    <ul className="space-y-2 mb-4">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#0f172a] text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          <span className="mt-1.5 w-1 h-1 bg-[#0f172a] rounded-full shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.numbered && (
                    <ol className="space-y-2 mb-4">
                      {section.numbered.map((item, i) => (
                        <li key={i} className="text-[#0f172a] text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {i + 1}. {item}
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.quote && (
                    <div className="bg-[#0f172a] rounded-xl p-8 my-6">
                      <p 
                        className="text-white text-center text-base leading-relaxed italic"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        &ldquo;{section.quote}&rdquo;
                      </p>
                    </div>
                  )}

                  {section.paragraphs && (
                    <div className="space-y-4">
                      {section.paragraphs.map((para, i) => (
                        <p key={i} className="text-[#0f172a] text-base leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar */}
          <div className="space-y-6">
            
            {/* Author Card */}
            <div className="bg-[#c8c8c8] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-400">
                  <Image 
                    src={post.authorImage || '/images/men.jpg'} 
                    alt={post.author} 
                    width={48} 
                    height={48} 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div>
                  <h3 className="text-[#0f172a] text-sm font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{post.author}</h3>
                  <p className="text-gray-500 text-xs">{post.authorRole}</p>
                </div>
              </div>

              {/* Related Posts */}
              <h3 
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                RELATED POSTS
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((rp) => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="flex gap-3 group">
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#0f172a] text-xs font-bold leading-snug group-hover:text-[#FAC104] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {rp.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">{rp.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-[#c8c8c8] rounded-xl p-6">
              <h3 
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                CATEGORIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span 
                    key={cat}
                    className="bg-[#0f172a] text-white text-xs px-4 py-2 rounded-lg cursor-pointer hover:bg-[#FAC104] transition-colors">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* More Blog Posts Section */}
      <section className="mt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 
              className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              MORE BLOG POSTS
            </h2>
            <Link
              href="/blog"
              className="bg-[#0f172a] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#1e293b] transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              SHOW ALL
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image 
                    src={rp.image} 
                    alt={rp.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-white text-[#0f172a] text-xs font-medium px-3 py-1 rounded-full">
                    {rp.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#0f172a] text-[10px] font-bold uppercase tracking-widest mb-3">
                  <div className="flex items-center gap-2">
                    {rp.authorImage && (
                      <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#FAC104]/30">
                        <Image src={rp.authorImage} alt={rp.author} fill className="object-cover" />
                      </div>
                    )}
                    <span className="opacity-70">{rp.author}</span>
                  </div>
                  <span className="opacity-70">•</span>
                  <span className="opacity-70">{rp.readTime}</span>
                </div>
                <h3 className="text-[#0f172a] text-sm font-bold leading-snug mb-3 group-hover:text-[#FAC104] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {rp.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[#FAC104] text-sm font-medium group-hover:underline">
                  READ POST <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}