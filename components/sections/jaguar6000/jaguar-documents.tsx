'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";

export function JaguarDocuments() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Document Center"
          description="Access Technical Documentation & Resources"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Card className="p-8 backdrop-blur-sm bg-background/50 text-center">
            <h3 className="text-xl font-semibold mb-4">Technical Documentation</h3>
            <p className="text-muted-foreground mb-6">
              Access detailed documentation, specifications, and implementation guides for JAGUAR6000.
            </p>
            <Button variant="default" size="lg">
              View Documentation
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
