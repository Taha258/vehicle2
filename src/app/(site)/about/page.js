import AboutHero from '@/src/components/about/AboutHero';
import AboutStory from '@/src/components/about/AboutStory';
import AboutStatsGrid from '@/src/components/about/AboutStatsGrid';
import AboutCoreValues from '@/src/components/about/AboutCoreValues';


export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutStatsGrid />
      <AboutCoreValues />
    </main>
  );
}