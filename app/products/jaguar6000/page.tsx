import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { JaguarHero } from "@/components/sections/jaguar6000/jaguar-hero";
import { JaguarFeatures } from "@/components/sections/jaguar6000/jaguar-features";
import { JaguarBenefits } from "@/components/sections/jaguar6000/jaguar-benefits";
import { JaguarDocuments } from "@/components/sections/jaguar6000/jaguar-documents";

export const metadata: Metadata = {
  title: "JAGUAR6000 - Transparent Cache for ISP/Telco | ARA Networks",
  description: "World's Best Performance Transparent Cache for ISP/Telco",
};

export default function Jaguar6000Page() {
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
              JAGUAR6000 is a session-based transparent cache (TIC) designed for ISP/Telco. JAGUAR6000 keeps existing business operation logic of content provider by delivering web/video content transparently at application level. It is based on ARA's cache platform that has been proven by many customers worldwide for best performance and greater stability along with over 10 years experience. JAGUAR6000 is well suited for effectively delivering video contents in transparent way and it is also optimized for delivering small objects such as web contents by being adapted with all the advantages from JAGUAR5000 cache engine which provides efficient caching service with fast response for small web objects. JAGUAR6000 operates as network backbone/edge cache for ISP/Telco, gateway(IV link) cache for ISP/Telco. And it works as a cache that can interwork with DPI(Deep Packet Inspection) products.
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
