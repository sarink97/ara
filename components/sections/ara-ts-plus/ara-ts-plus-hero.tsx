'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function AraTsPlusHero() {
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
          <Badge variant="secondary" className="mb-4">ARA-TS Plus</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            Manage and Filter Access to Web Contents
          </h1>
          <div className="space-y-4 text-muted-foreground">
            <p>• Blocking Harmful Websites for Business and Government</p>
            <p>• Support N x 10Gbps Throughput</p>
            <p>• Centralized Monitoring and Management</p>
            <p>• Blocking All Known Detours</p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button>Learn More</Button>
            <Button variant="outline">Contact Sales</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}