import { LucideIcon, Globe2, Shield, Box } from 'lucide-react';

export interface Solution {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  features: string[];
}

export const solutions: Solution[] = [
  {
    id: 'mobile-fixed-line',
    title: 'Mobile and Fixed Line Operator',
    icon: Box,
    features: [
      'Optimizing Mobile Gateway',
      'Optimizing Mobile EPC and Backhaul',
      'Mobile Edge CDN',
      'Optimizing IX/Transit Traffic',
      'Next Generation Telco CDN',
      'L7 Traffic Analyzing and Control (URL Filtering)'
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    icon: Shield,
    features: [
      'Secure Gateway Proxy'
    ]
  }
];