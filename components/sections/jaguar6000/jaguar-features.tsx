'use client';

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export function JaguarFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Features"
          description="World's Best Performance Transparent Cache"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Transparent Caching</h3>
            <p className="text-muted-foreground">
              Fully transparent caching service that maintains content provider's business logic
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Dual Object Support</h3>
            <p className="text-muted-foreground">
              Optimized for both small web objects and large video contents with proprietary technology
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Content Sharing</h3>
            <p className="text-muted-foreground">
              Efficient content sharing among JAGUAR6000 instances for improved performance
            </p>
          </Card>
          <Card className="p-6 backdrop-blur-sm bg-background/50">
            <h3 className="text-xl font-semibold mb-4">Future Ready</h3>
            <p className="text-muted-foreground">
              IPv6 ready and compliant with DMCA and E-commerce Directive 2000
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
