'use client';

import { useState } from 'react';

const NAV = ['Images', 'Icons', 'Fonts', 'Brand Logos'];

const CirclePlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export default function LicencesPage() {
  const [active, setActive] = useState('Images');

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e5e5e5', fontFamily: 'sans-serif' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: '280px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/HeroSectionimage.jpg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.60)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full" style={{ paddingTop: '64px' }}>
          <h1
            className="text-white text-center uppercase"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '40px',
              fontWeight: 700,
              letterSpacing: '4px',
              marginBottom: '14px',
            }}
          >
            Licences
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.80)',
              fontSize: '13px',
              maxWidth: '360px',
              lineHeight: '1.7',
              textAlign: 'center',
            }}
          >
            All graphical assets in this template are licensed for personal and commercial use. If you&apos;d like to use a specific asset, please check the license below.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          padding: '52px 24px 80px',
          display: 'flex',
          gap: '28px',
          alignItems: 'flex-start',
        }}
      >
        {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
        <aside
          style={{
            width: '200px',
            flexShrink: 0,
            position: 'sticky',
            top: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px',
                borderRadius: '8px',
                border: active === item ? '1px solid #ddd' : '1px solid #ddd',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 500,
                backgroundColor: '#fff',
                color: '#222',
                transition: 'all 0.15s',
                textAlign: 'left',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }}
            >
              <span>{item}</span>
              <span style={{ color: '#555' }}>
                <CirclePlusIcon />
              </span>
            </button>
          ))}
        </aside>

        {/* ── CONTENT ──────────────────────────────────────────────────── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* IMAGES */}
          <section id="images">
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px 36px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '20px' }}>
                Images
              </h2>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.75', marginBottom: '12px' }}>
                  All images used in the MotorDeal Webflow Template are sourced from{' '}
                  <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FAC104', textDecoration: 'none' }}>Pexels</a>
                  . They are free for both personal and commercial use. You can find a link to the full license details below.
                </p>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li style={{ fontSize: '13px' }}>
                    <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer" style={{ color: '#FAC104', textDecoration: 'none' }}>
                      Pexels Licence
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ICONS */}
          <section id="icons">
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px 36px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '20px' }}>
                Icons
              </h2>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.75', marginBottom: '12px' }}>
                  All icons used in the MotorDeal Webflow Template are sourced from{' '}
                  <a href="https://phosphoricons.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FAC104', textDecoration: 'none' }}>Phosphor Icons</a>
                  . They are free for both personal and commercial use. You can find a link to the full license details below.
                </p>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li style={{ fontSize: '13px' }}>
                    <a href="https://github.com/phosphor-icons/core/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" style={{ color: '#FAC104', textDecoration: 'none' }}>
                      Phosphor Icons Licence
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FONTS */}
          <section id="fonts">
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px 36px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '20px' }}>
                Fonts
              </h2>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.75' }}>
                  The fonts used in the MotorDeal Webflow Template are{' '}
                  <a href="https://fonts.google.com/specimen/Syne" target="_blank" rel="noopener noreferrer" style={{ color: '#FAC104', textDecoration: 'none' }}>Syne</a>
                  {' '}and{' '}
                  <a href="https://fonts.google.com/specimen/Space+Grotesk" target="_blank" rel="noopener noreferrer" style={{ color: '#FAC104', textDecoration: 'none' }}>Space Grotesk</a>
                  . Both are available on{' '}
                  <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FAC104', textDecoration: 'none' }}>Google Fonts</a>
                  {' '}and are 100% free for personal and commercial use.
                </p>
              </div>
            </div>
          </section>

          {/* BRAND LOGOS */}
          <section id="brand-logos">
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px 36px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '20px' }}>
                Brand Logos
              </h2>
              <div style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '13px', color: '#444', lineHeight: '1.75' }}>
                  <strong>Disclaimer:</strong> The Car Brand Logos used in the MotorDeal Webflow Template are used solely as factual representations of the vehicles listed, not to indicate any kind of endorsement or affiliation.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
