'use client';

import { GradientText } from '@/components/ui/gradient-text';

export function HeroText() {
  return (
    <div className="text-center">
      <h1 className="text-7xl md:text-8xl font-bold mb-8">
        Next Generation
        <br />
        <GradientText>Cache Technology</GradientText>
      </h1>
      <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-16">
        Revolutionizing content delivery with AI-powered edge caching and real-time analytics
      </p>
    </div>
  );
}