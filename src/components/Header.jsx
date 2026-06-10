'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

const megaMenuCols = [
  {
    links: [
      { label: 'VENDERE', href: '/vendere' },
      { label: 'TRASPORTO', href: '/trasporto' },
      { label: 'SELL YOUR CAR', href: '/sell-your-car' },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Check if a nav link is active
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Check if any "Pages" link is active, excluding main navigation routes
  const isPagesActive = megaMenuCols
    .flatMap((col) => col.links)
    .some((link) => {
      const mainRoutes = ['/', '/about', '/showroom', '/blog', '/contact-us'];
      if (mainRoutes.includes(pathname)) return false;
      return pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
    });

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPagesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinkStyle = (href) => ({
    fontFamily: 'Space Grotesk, sans-serif',
    color: isActive(href) ? '#FAC104' : '#fff',
  });

  return (
    <header className="absolute top-4 left-0 right-0 z-50 px-4">
      <div className="bg-[#0f172a] border-2 border-white/20 rounded-2xl mx-auto px-6 py-3 max-w-5xl">
        <div className="flex items-center justify-between">

          {/* Logo - SIZE BADHA DIYA GAYA HAI */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/WalCars - Logo Design - 01 (1).png"
              alt="WalCars Logo"
              width={100}
              height={100}
              className="rounded-full object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold tracking-widest hover:text-[#FAC104] transition-colors"
              style={navLinkStyle('/')}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold tracking-widest hover:text-[#FAC104] transition-colors"
              style={navLinkStyle('/about')}
            >
              ABOUT
            </Link>
            <Link
              href="/showroom"
              className="text-sm font-semibold tracking-widest hover:text-[#FAC104] transition-colors"
              style={navLinkStyle('/showroom')}
            >
              SHOWROOM
            </Link>

            {/* PAGES mega dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className="flex items-center gap-1 text-sm font-semibold tracking-widest transition-colors hover:text-[#FAC104]"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: pagesDropdownOpen || isPagesActive ? '#FAC104' : '#fff',
                }}
              >
                PAGES
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: pagesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {/* Mega Menu Panel */}
              {pagesDropdownOpen && (
                <div
                  className="absolute mt-4 z-50"
                  style={{
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    minWidth: '200px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {megaMenuCols[0].links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setPagesDropdownOpen(false)}
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: '12px',
                          fontWeight: 600,
                          letterSpacing: '1.5px',
                          color: isActive(link.href) ? '#FAC104' : '#fff',
                          textDecoration: 'none',
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#FAC104')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = isActive(link.href) ? '#FAC104' : '#fff')}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <Link
            href="/showroom"
            className="hidden md:inline-flex bg-[#FAC104] text-white text-sm font-bold tracking-widest px-5 py-2.5 rounded-lg hover:bg-[#D4A203] transition-colors"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            EXPLORE FLEET
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-widest"
                style={{ color: isActive('/') ? '#FAC104' : '#fff' }}
              >
                HOME
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-widest"
                style={{ color: isActive('/about') ? '#FAC104' : '#fff' }}
              >
                ABOUT
              </Link>
              <Link
                href="/showroom"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-widest"
                style={{ color: isActive('/showroom') ? '#FAC104' : '#fff' }}
              >
                SHOWROOM
              </Link>

              {/* Mobile PAGES toggle */}
              <button
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="flex items-center gap-1 text-sm font-semibold tracking-widest text-left"
                style={{ color: isPagesActive || mobilePagesOpen ? '#FAC104' : '#fff' }}
              >
                PAGES
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePagesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobilePagesOpen && (
                <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                  {megaMenuCols.flatMap((col) => col.links).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-semibold tracking-widest hover:text-[#FAC104]"
                      style={{ color: isActive(link.href) ? '#FAC104' : '#9ca3af' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/showroom"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#FAC104] text-white text-sm font-bold tracking-widest px-5 py-2.5 rounded-lg text-center mt-2"
              >
                EXPLORE FLEET
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
