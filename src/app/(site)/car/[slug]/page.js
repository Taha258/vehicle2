import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { clientFetch } from '@/src/sanity/lib/client';
import { carBySlugQuery, allCarSlugsQuery } from '@/src/sanity/lib/queries';
import CarGallery from '@/src/components/CarGallery';
import {
  ArrowLeft, Phone, Mail, MessageSquare, CheckCircle2,
  Bluetooth, Navigation, Smartphone, Camera,
  Volume2, Lightbulb, Armchair, Shield, Gauge, Fuel, Zap, Settings, Calendar, Palette, Hash
} from 'lucide-react';

export async function generateStaticParams() {
  const slugs = await clientFetch(allCarSlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}

const featureIconMap = {
  'bluetooth':      Bluetooth,
  'built-in gps':   Navigation,
  'gps':            Navigation,
  'wireless qi':    Smartphone,
  'wireless':       Smartphone,
  '360° camera':    Camera,
  'camera':         Camera,
  'sound system':   Volume2,
  'led headlight':  Lightbulb,
  'leather seats':  Armchair,
  'security':       Shield,
};

function getFeatureIcon(featureName) {
  const key = featureName.toLowerCase();
  for (const [match, Icon] of Object.entries(featureIconMap)) {
    if (key.includes(match)) return Icon;
  }
  return CheckCircle2;
}

export default async function CarDetailPage({ params }) {
  const car = await clientFetch(carBySlugQuery, { slug: params.slug });
  if (!car) notFound();

  const allImages = [car.mainImageUrl, ...(car.galleryUrls || [])].filter(Boolean);

  const specs = [
    { icon: Gauge, label: 'Mileage', value: car.mileage },
    { icon: Zap, label: 'Engine', value: car.engine },
    { icon: Fuel, label: 'Fuel Type', value: car.fuel },
    { icon: Settings, label: 'Transmission', value: car.transmission },
    { icon: Calendar, label: 'Year', value: car.year },
    { icon: Palette, label: 'Body Color', value: car.bodyColor },
    { icon: Hash, label: 'Stock ID', value: car.stockId },
    { icon: Shield, label: 'Horsepower', value: car.horsepower },
  ];

  return (
    <main className="min-h-screen bg-[#dedede] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb / Back Link */}
        <Link
          href="/showroom"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FAC104] transition-all text-xs font-bold uppercase tracking-[0.2em] mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Inventory
        </Link>

        {/* Main Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2">
            <p className="text-[#FAC104] font-bold text-xs uppercase tracking-[0.3em]">
              {car.brand} • {car.carType}
            </p>
            <h1 className="text-[#0f172a] text-2xl md:text-3xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
              {car.name}
            </h1>
          </div>
          <div className="bg-[#0f172a] text-white px-6 py-4 rounded-xl shadow-2xl">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Asking Price</p>
            <p className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{car.price}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT: MEDIA & DESCRIPTION (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            <CarGallery images={allImages} carName={car.name} />

            {/* Overview Card */}
            {car.overview && (
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-gray-50">
                <h2 className="text-[#0f172a] text-xl font-bold uppercase mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Overview
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {car.overview}
                </p>
              </div>
            )}

            {/* Features Tags */}
            {car.features && (
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-gray-50">
                <h2 className="text-[#0f172a] text-xl font-bold uppercase mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Key Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {car.features.map((feature) => {
                    const Icon = getFeatureIcon(feature);
                    return (
                      <div key={feature} className="flex flex-col items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl border border-gray-100 hover:border-[#FAC104]/30 transition-all">
                        <Icon className="w-5 h-5 text-[#FAC104]" />
                        <span className="text-[#0f172a] text-[10px] font-bold uppercase text-center tracking-widest">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: SPECS & CONTACT (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Specs Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-50">
              <h2 className="text-[#0f172a] text-sm font-bold uppercase tracking-widest mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>
                Technical Specs
              </h2>
              <div className="space-y-3">
                {specs.map((spec, i) => (
                  spec.value ? (
                    <div key={i} className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-xl border border-gray-50">
                      <div className="flex items-center gap-3">
                        <spec.icon className="w-4 h-4 text-[#FAC104]" />
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">{spec.label}</span>
                      </div>
                      <span className="text-[#0f172a] text-xs font-bold">{spec.value}</span>
                    </div>
                  ) : null
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#0f172a] rounded-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAC104]/10 rounded-full blur-3xl" />
              <h2 className="text-white text-lg font-bold uppercase mb-6 relative z-10" style={{ fontFamily: 'Syne, sans-serif' }}>
                Interessato?
              </h2>
              <div className="space-y-3 relative z-10">
                <a 
                  href={`https://wa.me/393282677366?text=${encodeURIComponent(`Hello, I am interested in the ${car.brand} ${car.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Extra Benefits */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-50">
              <h2 className="text-[#0f172a] text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center">Included Benefits</h2>
              <div className="space-y-3">
                {['Global Warranty', 'Custom Financing', 'Vehicle Insurance', 'Roadside Assist'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#f8f9fa] p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#FAC104]" />
                    <span className="text-[#0f172a] text-[10px] font-bold uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}