'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SolutionCard } from './solution-card';
import { solutions } from './solutions-data';

export function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* Solutions Navigation */}
      <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
        {solutions.map((solution, index) => (
          <button
            key={solution.id}
            onClick={() => setActiveIndex(index)}
            className={`relative px-6 py-4 rounded-xl text-left transition-all duration-300 min-w-[200px] lg:min-w-0 ${
              activeIndex === index
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-primary/5 text-muted-foreground'
            }`}
          >
            <div className="flex items-center gap-3">
              <solution.icon className="w-6 h-6" />
              <span className="font-semibold">{solution.title}</span>
            </div>
            {activeIndex === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-xl lg:w-full lg:h-1 lg:bottom-0 lg:top-auto lg:rounded-t-xl lg:rounded-l-none"
              />
            )}
          </button>
        ))}
      </div>

      {/* Solution Details */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SolutionCard solution={solutions[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}