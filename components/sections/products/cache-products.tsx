'use client';

import { Box } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { GlassCard } from '@/components/ui/glass-card';

const cacheProducts = [
  {
    type: "LTE Edge Cache",
    product: "JAGUAR 7000",
    description: "LTE Mobile Operator",
  },
  {
    type: "Transparent Cache",
    product: "JAGUAR 6000",
    description: "Fixed Line Operator & MSO",
  },
  {
    type: "Proxy Cache",
    product: "JAGUAR 5000",
    description: "Fixed Line Operator & MSO & CDN Service Provider",
  },
];

export function CacheProducts() {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden">
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
          <SectionHeader title="CACHE PRODUCTS" Icon={Box} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-primary/50" />
            
            {/* Products */}
            <div className="space-y-12">
              {cacheProducts.map((product, index) => (
                <motion.div
                  key={product.product}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-6 -ml-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  
                  <GlassCard className="p-6">
                    {/* Product Type Label */}
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg mb-3">
                      {product.type}
                    </div>
                    
                    {/* Product Details */}
                    <div className="mt-2">
                      <h3 className="text-2xl font-semibold text-foreground">{product.product}</h3>
                      <p className="text-lg text-muted-foreground mt-2">{product.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
