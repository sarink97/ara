'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroContent() {
  return (
    <div className="relative z-10">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Image
            src="/ara-logo.png"
            alt="ARA Networks"
            width={200}
            height={67}
            className="mx-auto"
          />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block mb-2">Pioneering</span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient clip-text text-transparent">
              Cache Technology
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Global leader in web, media, and mobile caching solutions since 1999
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <Button 
            size="lg" 
            className="h-14 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 group text-lg"
          >
            Explore Solutions
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="h-14 px-8 border-primary text-primary hover:bg-primary/10 text-lg"
          >
            Schedule Demo
          </Button>
        </motion.div>
      </div>
    </div>
  );
}