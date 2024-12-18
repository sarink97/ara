'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function JaguarBenefits() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Benefits"
          description="Optimize Your Network Infrastructure"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Cost Reduction</h3>
            <p className="text-muted-foreground">
              Reduces CAPEX/OPEX over mid-mile network link through efficient caching
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Enhanced QoE</h3>
            <p className="text-muted-foreground">
              Guarantees Quality of Experience for last-mile users with transparent content delivery
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Proven Reliability</h3>
            <p className="text-muted-foreground">
              Built on 10+ years of experience with proven stability worldwide
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Versatile Performance</h3>
            <p className="text-muted-foreground">
              High-performance caching optimized for both small web objects and large video content
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
