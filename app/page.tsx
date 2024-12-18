'use client';

import { HeroSection } from '@/components/sections/hero/hero-section';
import { FeaturesSection } from '@/components/sections/features/features-section';
import { SolutionsSection } from '@/components/sections/solutions/solutions-section';
import { NetworksSection } from '@/components/sections/networks/networks-section';
import { Footer } from '@/components/sections/footer/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <NetworksSection />
      <Footer />
    </main>
  );
}