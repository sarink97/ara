'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  Icon: LucideIcon;
  position: string;
  size: string;
  delay: string;
  floatAnimation: string;
  glowColor?: string;
}

export function FloatingIcon({ Icon, position, size, delay, floatAnimation, glowColor = 'primary' }: FloatingIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: parseFloat(delay) }}
      className={`absolute ${position} ${floatAnimation}`}
    >
      <div className={`absolute inset-0 bg-${glowColor}/20 blur-xl rounded-full ${size}`} />
      <div className={`relative ${size} p-3 rounded-full bg-background/50 backdrop-blur-sm border border-${glowColor}/20`}>
        <Icon className={`w-full h-full text-${glowColor} animate-pulse-slow`} />
      </div>
    </motion.div>
  );
}