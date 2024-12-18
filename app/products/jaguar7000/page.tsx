import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { JaguarHero } from "@/components/sections/jaguar7000/jaguar-hero";
import { JaguarFeatures } from "@/components/sections/jaguar7000/jaguar-features";
import { JaguarBenefits } from "@/components/sections/jaguar7000/jaguar-benefits";
import { JaguarDocuments } from "@/components/sections/jaguar7000/jaguar-documents";

export const metadata: Metadata = {
  title: "JAGUAR7000 - LTE Edge Cache | ARA Networks",
  description: "World's First LTE Edge Cache for Traffic Optimization & Mobile CDN",
};

export default function Jaguar7000Page() {
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
              JAGUAR7000 is world&apos;s first LTE edge cache that can be deployed at eNB in close proximity to subscribers. Increase of mobile traffic have mobile ISP to face with several challenges such as service degradation by burst traffic, poor QoE by transmission delay, more infrastructure expansion and higher operation cost. Mobile operators today are facing challenges to overcome, such as service degradation from surge of mobile traffic to burst, poor QoE by transmission delay, and increased cost for network expansion and operation. With traffic optimization technology specially designed for LTE network, JAGUAR7000 reduces traffic more than 30% in LTE network to resolve congestion over LTE core/backhaul and saves huge costs for infrastructure expansion and operation. Also, it maximizes QoE by delivering contents directly from edge cache system located at eNB location close to subscribers during traffic congestion.
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
