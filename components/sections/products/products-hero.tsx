'use client';

import { AraLogo } from '@/components/ui/ara-logo';
import { motion } from 'framer-motion';

export function ProductsHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 128, 255, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <AraLogo className="h-16 mb-8" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Products Overview
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Discover our comprehensive range of cache and visibility solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
