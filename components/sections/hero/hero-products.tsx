'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowRight, Cloud, Server, Shield } from 'lucide-react';

const products = [
  {
    icon: Cloud,
    name: 'JAGUAR',
    description: 'Advanced Web Caching Platform',
    features: ['AI-Powered Optimization', 'Real-time Analytics']
  },
  {
    icon: Server,
    name: 'Traffic Sentinel',
    description: 'Intelligent Traffic Management',
    features: ['Deep Packet Inspection', 'Bandwidth Control']
  }
] as const;

export function HeroProducts() {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
      <div className="relative space-y-4">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
          >
            <GlassCard className="p-6 hover:bg-primary/5 transition-colors group cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {product.name}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex gap-4">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-primary">
                        <Shield className="w-4 h-4" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}