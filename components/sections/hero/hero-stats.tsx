'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';

const stats = [
  { label: 'Years of Excellence', value: '24+' },
  { label: 'Global Patents', value: '20+' },
  { label: 'Enterprise Clients', value: '500+' },
  { label: 'Countries Served', value: '40+' },
] as const;

export function HeroStats() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <GlassCard className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}