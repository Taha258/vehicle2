'use client';

import { useState } from 'react';

// ─── Inline SVG Icons ────────────────────────────────────────────────────────
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
);
const IconHeart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/></svg>
);
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);
const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
);
const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);
const IconPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const IconQuote = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
);
// Social / Neutral icons
const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const IconIG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
);
const IconFB = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconPIN = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
);
const IconYT = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
);
const IconLI = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const IconLink = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const IconShare = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
);
const IconMailN = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconPhoneN = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
// Highlight icons
const IconCheckCircle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FAC104" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
);
const IconDot = () => (
  <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="#FAC104"/></svg>
);
const IconArrowUpRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FAC104" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
);

// ─── Sidebar nav ─────────────────────────────────────────────────────────────
const NAV = ['Colors', 'Typography', 'Buttons', 'Icons'];

// ─── Plus icon for sidebar ────────────────────────────────────────────────────
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

export default function StyleGuidePage() {
  const [active, setActive] = useState('Colors');

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e5e5e5', fontFamily: 'sans-serif' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: '320px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/HeroSectionimage.jpg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.52)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full" style={{ paddingTop: '60px' }}>
          <h1
            className="text-white text-center uppercase"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '42px',
              fontWeight: 700,
              letterSpacing: '3px',
              lineHeight: '1.15',
              marginBottom: '10px',
            }}
          >
            Style Guide
          </h1>
          <p
            className="text-center"
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '13px',
              maxWidth: '240px',
              lineHeight: '1.6',
              textAlign: 'center',
            }}
          >
            Keep your website&apos;s design consistent and polished with this style guide.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '48px 24px',
          display: 'flex',
          gap: '28px',
          alignItems: 'flex-start',
        }}
      >
        {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
        <aside
          style={{
            width: '148px',
            flexShrink: 0,
            position: 'sticky',
            top: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
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
                padding: '9px 14px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: active === item ? 600 : 400,
                backgroundColor: active === item ? '#ffffff' : 'transparent',
                color: active === item ? '#111' : '#555',
                boxShadow: active === item ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.15s',
                textAlign: 'left',
              }}
            >
              <span>{item}</span>
              <PlusIcon />
            </button>
          ))}
        </aside>

        {/* ── CONTENT ──────────────────────────────────────────────────── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* ════════════════════════════════════════════════════════════
              COLORS
          ════════════════════════════════════════════════════════════ */}
          <section id="colors">
            {/* Section label outside card */}
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#222', textTransform: 'uppercase', marginBottom: '12px' }}>
              Colors
            </p>

            {/* Card */}
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '28px' }}>

              {/* Primary Colors */}
              <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '14px' }}>
                Primary Colors
              </p>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}>
                {[
                  { name: 'Emerald', hex: '#FAC104', sub: '#31 B5 6B\nRGB 49 181 107' },
                  { name: 'Forest', hex: '#1A7A45', sub: '#1A 7A 45\nRGB 26 122 69' },
                ].map((c) => (
                  <div key={c.name}>
                    <div style={{ width: '120px', height: '70px', borderRadius: '8px', backgroundColor: c.hex, marginBottom: '8px' }} />
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#222', marginBottom: '2px' }}>{c.name}</p>
                    <p style={{ fontSize: '10px', color: '#aaa', whiteSpace: 'pre-line', lineHeight: '1.5' }}>{c.sub}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: '#f0f0f0', marginBottom: '24px' }} />

              {/* Secondary Colors */}
              <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '14px' }}>
                Secondary Colors
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {[
                  { name: 'Midnight', hex: '#0D1723', sub: '#0D 17 23' },
                  { name: 'Navy', hex: '#1C2B4A', sub: '#1C 2B 4A' },
                  { name: 'Graphite', hex: '#4A4F5A', sub: '#4A 4F 5A' },
                  { name: 'Slate', hex: '#9DA8BA', sub: '#9D A8 BA' },
                  { name: 'Mint', hex: '#8FD4A8', sub: '#8F D4 A8' },
                  { name: 'Coral', hex: '#E05252', sub: '#E0 52 52' },
                  { name: 'Ash', hex: '#C8C8C8', sub: '#C8 C8 C8' },
                  { name: 'Cloud', hex: '#E2E2E2', sub: '#E2 E2 E2' },
                  { name: 'Pure', hex: '#FFFFFF', sub: '#FF FF FF', border: true },
                ].map((c) => (
                  <div key={c.name}>
                    <div style={{
                      width: '100%',
                      height: '52px',
                      borderRadius: '6px',
                      backgroundColor: c.hex,
                      marginBottom: '6px',
                      border: c.border ? '1px solid #ddd' : 'none',
                    }} />
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#222', marginBottom: '1px' }}>{c.name}</p>
                    <p style={{ fontSize: '10px', color: '#aaa' }}>{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              TYPOGRAPHY
          ════════════════════════════════════════════════════════════ */}
          <section id="typography">
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#222', textTransform: 'uppercase', marginBottom: '12px' }}>
              Typography
            </p>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* HEADINGS box */}
              <div style={{ backgroundColor: '#ebebeb', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Headings
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '52px', fontWeight: 800, lineHeight: 1.05, color: '#111' }}>HEADING 1</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '34px', fontWeight: 700, lineHeight: 1.15, color: '#111' }}>HEADING 2</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '26px', fontWeight: 700, lineHeight: 1.2, color: '#111' }}>HEADING 3</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: 1.3, color: '#111' }}>HEADING 4</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: 1.3, color: '#111' }}>HEADING 5</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', fontWeight: 600, lineHeight: 1.4, color: '#111' }}>HEADING 6</p>
                </div>
              </div>

              {/* TEXT STYLES box */}
              <div style={{ backgroundColor: '#ebebeb', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Text Styles
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', color: '#FAC104', textTransform: 'uppercase' }}>
                    SUPERHEADLINE
                  </p>
                  <p style={{ fontSize: '16px', color: '#222' }}>Text 16px</p>
                  <p style={{ fontSize: '14px', color: '#222' }}>Text 14px</p>
                  <p style={{ fontSize: '12px', color: '#222' }}>Text Nav</p>

                  <div style={{ marginTop: '8px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '4px' }}>Paragraph - Medium</p>
                    <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.75' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                  </div>

                  <div style={{ marginTop: '4px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 400, color: '#444', marginBottom: '4px' }}>Paragraph - Normal</p>
                    <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.75' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                  </div>
                </div>
              </div>

              {/* RICH TEXT box */}
              <div style={{ backgroundColor: '#ebebeb', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Rich Text
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '48px', fontWeight: 800, lineHeight: 1.05, color: '#111' }}>HEADING 1</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', fontWeight: 700, color: '#111' }}>HEADING 2</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '24px', fontWeight: 700, color: '#111' }}>HEADING 3</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 600, color: '#111' }}>HEADING 4</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 600, color: '#111' }}>HEADING 5</p>

                  <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.75', marginTop: '8px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur a.
                  </p>

                  {/* Block quote */}
                  <div style={{
                    backgroundColor: '#0D1723',
                    borderRadius: '10px',
                    padding: '36px 28px',
                    textAlign: 'center',
                    margin: '12px 0',
                  }}>
                    <p style={{ color: '#fff', fontSize: '13px', lineHeight: '1.7' }}>Block quote</p>
                  </div>

                  {/* Ordered list */}
                  <div style={{ marginTop: '4px' }}>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#aaa', textTransform: 'uppercase', marginBottom: '6px' }}>Ordered list</p>
                    <ol style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {['Item 1', 'Item 2', 'Item 3'].map((t, i) => (
                        <li key={i} style={{ fontSize: '13px', color: '#444' }}>{t}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Unordered list */}
                  <div style={{ marginTop: '10px' }}>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#aaa', textTransform: 'uppercase', marginBottom: '6px' }}>Unordered list</p>
                    <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '2px', listStyleType: 'disc' }}>
                      {['Item A', 'Item B', 'Item C'].map((t, i) => (
                        <li key={i} style={{ fontSize: '13px', color: '#444' }}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Text variants */}
                  <div style={{ marginTop: '10px' }}>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#aaa', textTransform: 'uppercase', marginBottom: '6px' }}>Text link</p>
                    <a href="#" style={{ fontSize: '13px', color: '#FAC104', textDecoration: 'underline', display: 'block', marginBottom: '3px' }}>Text link</a>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#222', marginBottom: '3px' }}>Bold text</p>
                    <p style={{ fontSize: '13px', fontStyle: 'italic', color: '#444', marginBottom: '3px' }}>Emphasis</p>
                    <p style={{ fontSize: '13px', textDecoration: 'line-through', color: '#888', marginBottom: '3px' }}>Strikeout</p>
                    <p style={{ fontSize: '11px', color: '#666', verticalAlign: 'super', lineHeight: '1' }}>Superscript</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              BUTTONS
          ════════════════════════════════════════════════════════════ */}
          <section id="buttons">
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#222', textTransform: 'uppercase', marginBottom: '12px' }}>
              Buttons
            </p>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Primary Button
                </p>
                <button style={{
                  backgroundColor: '#FAC104',
                  color: '#fff',
                  border: 'none',
                  padding: '11px 22px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}>
                  Button Text
                </button>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />

              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Secondary Button
                </p>
                <button style={{
                  backgroundColor: '#0D1723',
                  color: '#fff',
                  border: 'none',
                  padding: '11px 22px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}>
                  Button Text
                </button>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              ICONS
          ════════════════════════════════════════════════════════════ */}
          <section id="icons">
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#222', textTransform: 'uppercase', marginBottom: '12px' }}>
              Icons
            </p>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Regular */}
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Regular Icons
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: '#444' }}>
                  <IconUser /><IconHeart /><IconStar /><IconHome />
                  <IconSettings /><IconBell /><IconMail /><IconPhone />
                  <IconCalendar /><IconPin /><IconSearch /><IconQuote />
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />

              {/* Neutral */}
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Neutral Icons
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: '#666' }}>
                  <IconX /><IconIG /><IconFB /><IconPIN />
                  <IconYT /><IconLI /><IconGlobe /><IconLink />
                  <IconShare /><IconMailN /><IconPhoneN /><IconClose />
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />

              {/* Highlight */}
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Highlight Icons
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <IconCheckCircle /><IconDot /><IconArrowUpRight />
                </div>
              </div>

            </div>
          </section>

        </div>{/* end content */}
      </div>{/* end body */}
    </div>
  );
}
