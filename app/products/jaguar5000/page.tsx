import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { JaguarHero } from "@/components/sections/jaguar5000/jaguar-hero";
import { JaguarFeatures } from "@/components/sections/jaguar5000/jaguar-features";
import { JaguarBenefits } from "@/components/sections/jaguar5000/jaguar-benefits";
import { JaguarDocuments } from "@/components/sections/jaguar5000/jaguar-documents";

export const metadata: Metadata = {
  title: "JAGUAR5000 - High Performance Proxy Cache | ARA Networks",
  description: "Performance Leader in CDN Cache with World's Best Bandwidth Saving",
};

export default function Jaguar5000Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 animate-grid" />
      
      <JaguarHero />

      {/* Introduction Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="p-8 backdrop-blur-sm bg-background/50">
            <h2 className="text-2xl font-semibold mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              JAGUAR5000 is a versatile and well-rounded proxy cache system. It provides QoE enhancement and bandwidth savings for ISP customers and CDN Service provider can use JAGUAR5000 as cache server. Last but not least, enterprise can use it for security proxy. JAGUAR5000 provides high caching performance for 10Gbps throughput with a single system resulting in 40-50% bandwidth savings on average. Field-proven platform guaranteeing stability, reliability and performance for more than 10 years in many customer sites.
            </p>
          </Card>
        </div>
      </section>

      <JaguarFeatures />
      <JaguarBenefits />
      <JaguarDocuments />
    </div>
  );
}
