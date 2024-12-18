'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function JaguarFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Features"
          description="World's First Mobile Edge Cache in LTE Network"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Traffic Optimization</h3>
            <p className="text-muted-foreground">
              Over 30% Traffic Reduction in LTE Network with Traffic Optimization Technology
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">QoE Enhancement</h3>
            <p className="text-muted-foreground">
              Over 150% QoE enhancement regardless of LTE network congestion by applying Mobile Edge Caching Technology
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
