'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { motion } from 'framer-motion';
import { Cpu, Globe2, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Edge Computing',
    description: 'AI-powered edge caching with sub-millisecond response time',
    icon: Cpu,
  },
  {
    title: 'Quantum Security',
    description: 'Next-gen encryption for unbreakable content protection',
    icon: Shield,
  },
  {
    title: 'Global Network',
    description: 'Distributed nodes across 150+ countries for instant delivery',
    icon: Globe2,
  },
  {
    title: 'Smart Analytics',
    description: 'Real-time insights with predictive ML algorithms',
    icon: Zap,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}