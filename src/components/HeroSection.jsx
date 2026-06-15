// src\components\HeroSection.jsx
'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { ChevronDown, Search, Car, Settings, Fuel, ArrowRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const CAR_MAKES = ['Lamborghini', 'Ferrari', 'Mercedes', 'BMW', 'Audi', 'Porsche', 'Range Rover'];
const CAR_TYPES = ['Convertible', 'Coupe', 'SUV', 'Sedan', 'Hatchback'];
const CAR_CONDITIONS = ['New', 'Used'];

function Dropdown({ label, options, value, onChange, icon: Icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative flex-1" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white/95 backdrop-blur-sm text-gray-700 px-4 py-3 rounded-xl text-sm font-medium hover:bg-white transition-all duration-300 border border-transparent hover:border-[#FAC104]/30 shadow-sm"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-[#FAC104]" />}
          <span className={value ? 'text-[#0f172a] font-bold' : 'text-gray-400 font-medium'}>
            {value || label}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180 text-[#FAC104]' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => { onChange(''); setOpen(false); }}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-400 hover:bg-gray-50 border-b border-gray-50 transition-colors"
          >
            All {label}s
          </button>
          <div className="max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200
                  ${value === opt
                    ? 'bg-[#FAC104]/10 text-[#FAC104] font-bold border-l-4 border-[#FAC104]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#0f172a]'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HeroContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [carMake, setCarMake] = useState(searchParams.get('make') || '');
  const [carType, setCarType] = useState(searchParams.get('type') || '');
  const [carCondition, setCarCondition] = useState(searchParams.get('condition') || '');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  function handleSearch() {
    const params = new URLSearchParams();
    if (carMake) params.set('make', carMake);
    if (carType) params.set('type', carType);
    if (carCondition) params.set('condition', carCondition);
    if (searchQuery.trim()) params.set('q', searchQuery.trim());

    router.push(`/showroom?${params.toString()}`);
  }

  const scrollToCars = () => {
    const element = document.getElementById('featured-cars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[680px] z-30 overflow-hidden flex items-center">
      {/* Background Image - Full Cover */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/HeroSectionimage.jpg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#0f172a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          
          {/* ========== MAIN HEADING ========== */}
          <h1
            className="uppercase tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(26px, 4.5vw, 48px)",
              fontWeight: 651,
              lineHeight: "1.15",
              color: "#fff",
            }}
          >
            COMPRIAMO, VENDIAMO E <br className="hidden md:block" />
            TRASPORTIAMO AUTO IN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">
              TUTTA ITALIA
            </span>
          </h1>

          {/* ========== SUB HEADING ========== */}
          <p className="text-base md:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Soluzioni rapide, sicure e professionali per l&apos;acquisto, 
            la vendita e il trasporto della tua auto.
          </p>

          {/* ========== CTA BUTTONS ========== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            
            {/* Button 1: Vendi la tua auto */}
            <Link
              href="/sell-your-car"
              className="group relative px-6 py-3.5 bg-[#FAC104] text-[#0f172a] rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#FBDB5C] active:scale-95 transition-all duration-300 shadow-lg shadow-[#FAC104]/25 flex items-center gap-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">VENDI LA TUA AUTO</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Button 2: Scopri le auto disponibili */}
            <button
              onClick={scrollToCars}
              className="group px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white/20 hover:border-[#FAC104] active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              SCOPRI LE AUTO DISPONIBILI
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Button 3: Richiedi un trasporto */}
            <Link
              href="/trasporto"
              className="group px-6 py-3.5 bg-transparent text-white border-2 border-[#FAC104] rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#FAC104] hover:text-[#0f172a] active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              RICHIEDI UN TRASPORTO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ========== FILTER BOX ========== */}
          <div className="mt-8 w-full bg-white/5 backdrop-blur-xl rounded-2xl p-3 md:p-5 border border-white/10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex flex-col md:flex-row gap-3 flex-[2]">
                <Dropdown
                  label="Car Make"
                  options={CAR_MAKES}
                  value={carMake}
                  onChange={setCarMake}
                  icon={Car}
                />
                <Dropdown
                  label="Car Type"
                  options={CAR_TYPES}
                  value={carType}
                  onChange={setCarType}
                  icon={Settings}
                />
                <Dropdown
                  label="Condition"
                  options={CAR_CONDITIONS}
                  value={carCondition}
                  onChange={setCarCondition}
                  icon={Fuel}
                />
              </div>

              {/* Search + Button */}
              <div className="flex gap-3 flex-[1.5]">
                <div className="relative flex-1 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FAC104] transition-colors" />
                  <input
                    type="text"
                    placeholder="Search model or brand..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full bg-white/95 backdrop-blur-sm text-[#0f172a] pl-11 pr-4 py-3 rounded-xl text-sm placeholder-gray-400 outline-none border border-transparent focus:border-[#FAC104]/50 shadow-sm transition-all"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-[#FAC104] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#D4A203] active:scale-95 transition-all duration-300 shadow-lg shadow-[#FAC104]/25 flex items-center justify-center gap-2 uppercase tracking-wider whitespace-nowrap"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <Suspense fallback={<div className="h-[600px] bg-[#0f172a]" />}>
      <HeroContent />
    </Suspense>
  );
}