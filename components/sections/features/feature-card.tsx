'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function FeatureCard({ title, description, icon: Icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <GlassCard className="p-10 h-full relative overflow-hidden group">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-16 -top-16 opacity-5 group-hover:opacity-10 transition-opacity"
        >
          <Icon size={180} />
        </motion.div>
        
        <div className="relative">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-16 h-16 text-primary mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}