// src\app\page.js
import HeroSection from '@/src/components/HeroSection';
import AboutUs from '@/src/components/AboutUs';
import FeaturedCars from '@/src/components/FeaturedCars';
import HowItWorks from '@/src/components/HowItWorks';
import Testimonials from '@/src/components/Testimonials';
import Showrooms from '@/src/components/Showrooms';
import BlogAndCTA from '@/src/components/BlogAndCTA';
import CTASection from '@/src/components/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutUs/>
       <FeaturedCars />
       <HowItWorks/>
       <Testimonials/>
       <Showrooms/>
       <CTASection/>
       <BlogAndCTA/>
    </main>
  );
}