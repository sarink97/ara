'use client';

import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Globe className="w-16 h-16 mx-auto mb-8 text-cyan-400" />
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Next Generation
            <br />
            <GradientText>Cache Technology</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Revolutionizing content delivery with AI-powered edge caching and real-time analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 h-12">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-950 px-8 h-12">
              View Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}