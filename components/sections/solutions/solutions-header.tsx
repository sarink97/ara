'use client';

import { GradientText } from '@/components/ui/gradient-text';
import { motion } from 'framer-motion';

export function SolutionsHeader() {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Powerful <GradientText>Solutions</GradientText>
          <br />
          for Modern Business
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Discover how our enterprise-grade solutions can transform your business operations
        </p>
      </motion.div>
    </div>
  );
}