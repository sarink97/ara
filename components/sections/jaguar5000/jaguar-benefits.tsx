'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function JaguarBenefits() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Benefits"
          description="Maximize Performance and Cost Savings"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Bandwidth Savings</h3>
            <p className="text-muted-foreground">
              Achieve 40-50% bandwidth savings on average with advanced caching technology
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Versatile Usage</h3>
            <p className="text-muted-foreground">
              Suitable for ISP customers, CDN service providers, and enterprise security proxy
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Proven Reliability</h3>
            <p className="text-muted-foreground">
              Field-proven platform with over 10 years of stability and performance
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">ROI & TCO Benefits</h3>
            <p className="text-muted-foreground">
              Significant return on investment and reduced total cost of ownership
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
