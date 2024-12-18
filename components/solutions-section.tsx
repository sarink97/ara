'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { GradientText } from '@/components/ui/gradient-text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

export function SolutionsSection() {
  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Enterprise Solutions</GradientText>
          </h2>
          <p className="text-gray-400 text-xl">Tailored for your business needs</p>
        </motion.div>

        <Tabs defaultValue="mobile" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="mobile" className="text-lg">Mobile Solutions</TabsTrigger>
            <TabsTrigger value="enterprise" className="text-lg">Enterprise Solutions</TabsTrigger>
          </TabsList>
          <TabsContent value="mobile">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Mobile Edge Computing</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4 text-gray-300">
                  <p>• 5G-optimized content delivery</p>
                  <p>• Mobile Edge CDN infrastructure</p>
                  <p>• Real-time traffic optimization</p>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>• IoT device support</p>
                  <p>• Low-latency streaming</p>
                  <p>• Bandwidth optimization</p>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
          <TabsContent value="enterprise">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Enterprise Infrastructure</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4 text-gray-300">
                  <p>• Global load balancing</p>
                  <p>• DDoS protection</p>
                  <p>• Multi-cloud support</p>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>• API acceleration</p>
                  <p>• SSL/TLS optimization</p>
                  <p>• Custom edge rules</p>
                </div>
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}