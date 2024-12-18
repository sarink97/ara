import { Cloud, Shield, Zap, Globe } from 'lucide-react';

export const slides = [
  {
    icon: Cloud,
    title: 'JAGUAR Platform',
    description: 'Advanced web caching with AI-powered optimization',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Shield,
    title: 'Traffic Sentinel',
    description: 'Intelligent traffic management and deep packet inspection',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Distributed network across 40+ countries worldwide',
    gradient: 'from-violet-500/20 to-purple-500/20'
  },
  {
    icon: Zap,
    title: 'Real-time Analytics',
    description: 'ML-powered insights and predictive optimization',
    gradient: 'from-amber-500/20 to-orange-500/20'
  }
] as const;