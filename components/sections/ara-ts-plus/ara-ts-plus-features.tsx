'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function AraTsPlusFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Features"
          description="Advanced Web Content Filtering and Management"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Flexible Filtering</h3>
            <p className="text-muted-foreground">
              Integration with McAfee SmartFilter™ providing 90 categories and 25 million URLs
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">High Performance</h3>
            <p className="text-muted-foreground">
              Support for N x 10Gbps throughput with efficient content filtering
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Custom Categories</h3>
            <p className="text-muted-foreground">
              User-defined categories based on log analysis and statistics
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Protection</h3>
            <p className="text-muted-foreground">
              Blocking of harmful content and known detours for complete security
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
