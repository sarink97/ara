'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Solution } from './solutions-data';

interface SolutionCardProps {
  solution: Solution;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <GlassCard className="p-8 h-full">
      <div className="flex items-start gap-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4 rounded-2xl bg-primary/10"
        >
          <solution.icon className="w-8 h-8 text-primary" />
        </motion.div>
        <div className="flex-1">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl font-bold mb-4"
          >
            {solution.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            {solution.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {solution.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mt-8 flex items-center gap-2 text-primary hover:gap-4 transition-all cursor-pointer group"
          >
            <span className="font-semibold">Learn more</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>
      </div>
    </GlassCard>
  );
}