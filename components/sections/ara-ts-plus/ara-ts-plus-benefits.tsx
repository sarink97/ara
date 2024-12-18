'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function AraTsPlusBenefits() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Benefits"
          description="Comprehensive Web Content Management Solution"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
            <p className="text-muted-foreground">
              Protection against harmful web content including pornography, gambling, and offensive materials
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Centralized Control</h3>
            <p className="text-muted-foreground">
              Unified monitoring and management of network security policies
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Flexible Configuration</h3>
            <p className="text-muted-foreground">
              Customizable filtering schemes and user-defined categories for specific needs
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Enterprise Grade</h3>
            <p className="text-muted-foreground">
              Suitable for government, ISPs, and corporate environments with high-throughput requirements
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
