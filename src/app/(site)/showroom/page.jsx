// src/app/(site)/showroom/page.jsx
import HeroSection from '@/src/components/showroom/HeroSection';
import ShowroomCars from '@/src/components/showroom/FeaturedCars';

export default async function ShowroomPage({ searchParams }) {
  const make      = (await searchParams)?.make      || '';
  const type      = (await searchParams)?.type      || '';
  const condition = (await searchParams)?.condition || '';
  const q         = (await searchParams)?.q         || '';

  return (
    <div>
      <HeroSection />
      <ShowroomCars searchParams={{ make, type, condition, q }} />
    </div>
  );
}