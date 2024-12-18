'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CarouselSlide } from './carousel/carousel-slide';
import { CarouselIndicators } from './carousel/carousel-indicators';
import { slides } from './carousel/carousel-data';

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-16 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <CarouselSlide {...slides[currentSlide]} />
          </motion.div>
        </AnimatePresence>

        <CarouselIndicators
          total={slides.length}
          current={currentSlide}
          onChange={setCurrentSlide}
        />
      </div>
    </div>
  );
}