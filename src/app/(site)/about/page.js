import AboutHero from '@/src/components/about/AboutHero';
import AboutStory from '@/src/components/about/AboutStory';
import AboutStatsGrid from '@/src/components/about/AboutStatsGrid';
import AboutFounder from '@/src/components/about/AboutFounder';
import AboutCoreValues from '@/src/components/about/AboutCoreValues';


export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutStatsGrid />
      <AboutFounder />
      <AboutCoreValues />
    </main>
  );
}