'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';

interface SolutionsCardProps {
  title: string;
  features: readonly string[];
}

export function SolutionsCard({ title, features }: SolutionsCardProps) {
  const midPoint = Math.ceil(features.length / 2);
  const firstColumn = features.slice(0, midPoint);
  const secondColumn = features.slice(midPoint);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <GlassCard className="p-8">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-foreground mb-6"
      >
        {title}
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {firstColumn.map((feature) => (
            <motion.p
              key={feature}
              variants={item}
              className="text-muted-foreground flex items-center space-x-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full bg-cyan-400"
              />
              <span>{feature}</span>
            </motion.p>
          ))}
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {secondColumn.map((feature) => (
            <motion.p
              key={feature}
              variants={item}
              className="text-muted-foreground flex items-center space-x-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full bg-cyan-400"
              />
              <span>{feature}</span>
            </motion.p>
          ))}
        </motion.div>
      </div>
    </GlassCard>
  );
}