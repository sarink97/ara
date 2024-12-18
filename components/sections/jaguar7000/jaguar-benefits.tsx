'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function JaguarBenefits() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Benefits for Mobile Operator"
          description="Optimize Your Network Performance"
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Cost Reduction</h3>
            <p className="text-muted-foreground">
              Significant Cost Reduction for LTE Network Expansion & Operation
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Subscriber Retention</h3>
            <p className="text-muted-foreground">
              Keep Existing Subscribers by Providing Enhanced QoE for Mobile Service
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Revenue Growth</h3>
            <p className="text-muted-foreground">
              More Revenue with High Quality Mobile CDN Service
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
