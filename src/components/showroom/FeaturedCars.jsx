// src/components/showroom/FeaturedCars.jsx
import Link from 'next/link';
import Image from 'next/image';
import { clientFetch } from '@/src/sanity/lib/client';
import { allCarsQuery } from '@/src/sanity/lib/queries';
import { Fuel, Gauge, Settings, Zap, ArrowRight, FilterX, Search } from 'lucide-react';

function CarCard({ car }) {
  return (
    <div className="group relative bg-[#0f172a] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#FAC104]/30 transition-all duration-500 shadow-xl hover:shadow-[#FAC104]/10">
      {/* Badge for Condition */}
      <div className="absolute top-6 left-6 z-10">
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
          car.condition?.toLowerCase() === 'new' 
            ? 'bg-[#FAC104]/20 text-[#FAC104] border-[#FAC104]/30' 
            : 'bg-white/10 text-white border-white/20'
        }`}>
          {car.condition}
        </span>
      </div>

      {/* Car Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        {car.mainImageUrl ? (
          <Image 
            src={car.mainImageUrl} 
            alt={car.name} 
            fill 
            className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
            <span className="text-gray-500 font-medium">No Image Available</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8 pt-6 space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[#FAC104] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {car.brand} • {car.year}
            </p>
            <h3 className="text-white text-2xl font-bold uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              {car.name}
            </h3>
          </div>
          {car.brandLogoUrl && (
            <div className="w-12 h-12 bg-white/5 rounded-xl p-2 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <Image src={car.brandLogoUrl} alt={car.brand} width={32} height={32} className="object-contain" />
            </div>
          )}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Gauge, label: 'Mileage', value: car.mileage || '0 KM' },
            { icon: Zap, label: 'Engine', value: car.engine || 'N/A' },
            { icon: Fuel, label: 'Fuel', value: car.fuel || 'Petrol' },
            { icon: Settings, label: 'Transmission', value: car.transmission || 'Auto' },
          ].map((spec, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-2xl p-3 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-[#FAC104]/10 flex items-center justify-center">
                <spec.icon className="w-4 h-4 text-[#FAC104]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">{spec.label}</span>
                <span className="text-white text-xs font-semibold">{spec.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Price</span>
            {/* ✅ AED → € */}
            <span className="text-white text-xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
              {car.price?.replace('AED', '€')}
            </span>
          </div>
          <Link 
            href={`/car/${car.slug.current}`} 
            className="flex items-center gap-2 bg-[#FAC104] hover:bg-[#D4A203] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 group/btn"
          >
            DETAILS
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function ShowroomCars({ searchParams }) {
  const make      = searchParams?.make      || '';
  const type      = searchParams?.type      || '';
  const condition = searchParams?.condition || '';
  const query     = searchParams?.q         || '';

  const allCars = await clientFetch(allCarsQuery);

  // Robust Filter logic
  const filtered = allCars.filter((car) => {
    // Normalizing data for comparison
    const carBrand = (car.brand || '').toLowerCase().trim();
    const carName = (car.name || '').toLowerCase().trim();
    const carTypeStr = (car.carType || '').toLowerCase().trim();
    const carConditionStr = (car.condition || '').toLowerCase().trim();

    const selectedMake = make.toLowerCase().trim();
    const selectedType = type.toLowerCase().trim();
    const selectedCondition = condition.toLowerCase().trim();
    const searchVal = query.toLowerCase().trim();

    // Brand Match: Direct match or if the brand contains the selected value
    const matchMake = !selectedMake || carBrand === selectedMake || carBrand.includes(selectedMake) || carName.includes(selectedMake);
    
    // Type Match
    const matchType = !selectedType || carTypeStr === selectedType;
    
    // Condition Match
    const matchCondition = !selectedCondition || carConditionStr === selectedCondition;
    
    // Search Query: Check in Name, Brand, and Type
    const matchQuery = !searchVal
      || carName.includes(searchVal)
      || carBrand.includes(searchVal)
      || carTypeStr.includes(searchVal);

    return matchMake && matchType && matchCondition && matchQuery;
  });

  const activeFilters = [
    make      && `Brand: ${make}`,
    type      && `Type: ${type}`,
    condition && `Condition: ${condition}`,
    query     && `Search: "${query}"`,
  ].filter(Boolean);

  return (
    <section className="py-24 px-4 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#FAC104]" />
              Exclusive Inventory
            </div>
            <h2 className="text-[#0f172a] text-3xl md:text-5xl font-extrabold uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              {activeFilters.length > 0 ? 'Filter Results' : 'Available Collection'}
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
            <span className="text-[#0f172a] font-bold text-2xl">{filtered.length}</span>
            <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Vehicles<br/>Available</span>
          </div>
        </div>

        {/* Active Filters Bar */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mb-10 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest px-2">Active:</span>
            {activeFilters.map((f) => (
              <div key={f} className="flex items-center gap-2 bg-[#0f172a] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                {f}
              </div>
            ))}
            <Link 
              href="/showroom" 
              className="ml-auto flex items-center gap-2 text-gray-400 hover:text-red-500 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <FilterX className="w-4 h-4" />
              Reset All
            </Link>
          </div>
        )}

        {/* No results State */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-[#0f172a] text-2xl font-bold mb-2">No Matching Vehicles</h3>
            <p className="text-gray-400 max-w-md mb-8">
              We couldn&apos;t find any cars matching your current filters. Try adjusting your search or browse our full inventory.
            </p>
            <Link 
              href="/showroom" 
              className="bg-[#0f172a] text-white px-8 py-4 rounded-2xl text-sm font-bold hover:bg-[#1e293b] transition-all flex items-center gap-2"
            >
              VIEW ALL CARS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}