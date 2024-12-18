'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function JaguarFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Features"
          description="High Performance Proxy Cache System"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Operating System</h3>
            <p className="text-muted-foreground">
              Enterprise-grade operating system optimized for high-performance caching
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">High Capacity</h3>
            <p className="text-muted-foreground">
              10Gbps throughput with a single system for efficient content delivery
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Scalability</h3>
            <p className="text-muted-foreground">
              Flexible scaling options to meet growing bandwidth demands
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Advanced Specifications</h3>
            <p className="text-muted-foreground">
              Comprehensive feature set for enterprise and CDN requirements
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
