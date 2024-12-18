'use client';

import { motion } from "framer-motion";

export function JaguarHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 128, 255, 0.1) 0%, transparent 50%)',
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            JAGUAR7000
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            World&apos;s First LTE Edge Cache for Traffic Optimization & Mobile CDN
          </p>
        </motion.div>
      </div>
    </section>
  );
}
