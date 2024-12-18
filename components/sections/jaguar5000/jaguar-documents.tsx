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
          description="Access Product Documentation & Specifications"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Card className="p-8 backdrop-blur-sm bg-background/50 text-center">
            <h3 className="text-xl font-semibold mb-4">Product Documentation</h3>
            <p className="text-muted-foreground mb-6">
              Access detailed product specifications, operating system details, and capacity information.
            </p>
            <div className="space-x-4">
              <Button variant="default" size="lg">
                View Documentation
              </Button>
              <Button variant="outline" size="lg">
                Download Specifications
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
