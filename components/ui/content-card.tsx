'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from './glass-card';

interface ContentCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  features?: string[];
  index: number;
}

export function ContentCard({ title, description, icon: Icon, features, index }: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <GlassCard className="p-6 h-full relative overflow-hidden group">
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
            <Icon className="w-12 h-12 text-primary mb-4" />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          {description && (
            <p className="text-base text-muted-foreground mb-4">{description}</p>
          )}
          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
