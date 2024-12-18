import { Shield, Globe2, Box } from 'lucide-react';

export const features = [
  {
    title: 'LTE Edge Cache',
    description: 'Optimize mobile data delivery',
    icon: Box,
    features: [
      'Fast content delivery',
      'Reduced latency',
      'Mobile optimization'
    ]
  },
  {
    title: 'Transparent Cache',
    description: 'Seamless content caching',
    icon: Box,
    features: [
      'Automatic caching',
      'Improved performance',
      'Resource optimization'
    ]
  },
  {
    title: 'Proxy Cache',
    description: 'Advanced proxy caching',
    icon: Box,
    features: [
      'Content caching',
      'Traffic optimization',
      'Bandwidth saving'
    ]
  },
  {
    title: 'SSL(Secure) Proxy',
    description: 'Secure connection handling',
    icon: Shield,
    features: [
      'SSL/TLS encryption',
      'Secure communication',
      'Certificate management'
    ]
  },
  {
    title: 'WEB(URL) Filter',
    description: 'Content filtering solution',
    icon: Globe2,
    features: [
      'URL filtering',
      'Content control',
      'Access management'
    ]
  },
  {
    title: 'DPI (Traffic Monitoring)',
    description: 'Deep packet inspection',
    icon: Box,
    features: [
      'Traffic analysis',
      'Protocol inspection',
      'Network monitoring'
    ]
  }
] as const;