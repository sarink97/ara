'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  delay?: number;
}

export function FloatingIcon({ icon: Icon, size = 24, color = 'currentColor', delay = 0 }: FloatingIconProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [-10, 10, -10],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className="absolute"
    >
      <Icon size={size} className={color} />
    </motion.div>
  );
}