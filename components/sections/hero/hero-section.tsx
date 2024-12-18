'use client';

import { HeroBackground } from './hero-background';
import { HeroContent } from './hero-content';
import { HeroCarousel } from './hero-carousel';
import { AraLogo } from '@/components/ui/ara-logo';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <HeroBackground />
      <div className="container px-4 mx-auto text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <AraLogo className="h-16 mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Next Generation CDN Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Leading provider of cache visibility products and CDN solutions for telco and enterprise customers.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}