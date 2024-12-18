'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

interface CarouselSlideProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function CarouselSlide({ icon: Icon, title, description, gradient }: CarouselSlideProps) {
  return (
    <GlassCard className="p-8 overflow-hidden relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20`} />
      <div className="relative flex items-center gap-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-2xl bg-primary/10"
        >
          <Icon className="w-12 h-12 text-primary" />
        </motion.div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-2"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </GlassCard>
  );
}