'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 text-xl">
        Get Started
        <ArrowRight className="ml-2 h-6 w-6" />
      </Button>
      <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-12 h-16 text-xl">
        View Demo
      </Button>
    </div>
  );
}