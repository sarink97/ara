'use client';

import { Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { ContentCard } from '@/components/ui/content-card';

const networkContent = {
  title: "Global Partner Network",
  icon: Network,
  description: "Our Partners can help you find the right products and solutions for your business.",
  features: [
    "Find a Partner in Your Region and Country",
    "Access to certified solution providers",
    "Local support and expertise",
    "Customized solutions for your needs"
  ]
};

export function NetworksSection() {
  return (
    <section id="networks" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 128, 255, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <SectionHeader title="NETWORKS" Icon={Network} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentCard {...networkContent} index={0} />
          <div className="relative">
            <motion.div 
              className="w-full h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/world-map.png"
                alt="World Map"
                className="w-full h-full object-contain opacity-50"
              />
              <motion.button
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find more Partners
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
