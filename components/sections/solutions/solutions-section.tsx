'use client';

import { LightbulbIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { solutions } from './solutions-data';
import { SectionHeader } from '@/components/ui/section-header';
import { ContentCard } from '@/components/ui/content-card';

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
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
          <SectionHeader title="SOLUTIONS" Icon={LightbulbIcon} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <ContentCard
              key={solution.id}
              title={solution.title}
              icon={solution.icon}
              features={solution.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}