'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation Links array
  const navLinks = [
    { label: 'CASA', href: '/' },
    { label: 'DI', href: '/about' },
    { label: 'GARAGE', href: '/showroom' },
    { label: 'VENDERE', href: '/sell-your-car' },
    { label: 'TRASPORTO', href: '/trasporto' },
  ];

  // Check if a nav link is active
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navLinkStyle = (href) => ({
    fontFamily: 'Space Grotesk, sans-serif',
    color: isActive(href) ? '#FAC104' : '#fff',
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="bg-[#0f172a] border-2 border-white/20 rounded-2xl mx-auto px-6 py-3 max-w-6xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
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
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-widest hover:text-[#FAC104] transition-colors whitespace-nowrap"
                style={navLinkStyle(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="/sell-your-car"
            className="hidden md:inline-flex bg-[#FAC104] text-white text-[10px] font-bold tracking-widest px-4 py-2.5 rounded-lg hover:bg-[#D4A203] transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            VENDI LA TUA AUTO
          </Link>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-2 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-widest"
                  style={navLinkStyle(link.href)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/sell-your-car"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#FAC104] text-white text-sm font-bold tracking-widest px-5 py-2.5 rounded-lg text-center mt-2"
              >
                VENDI LA TUA AUTO
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
