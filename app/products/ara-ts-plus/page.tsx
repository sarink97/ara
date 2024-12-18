import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { AraTsPlusHero } from "@/components/sections/ara-ts-plus/ara-ts-plus-hero";
import { AraTsPlusFeatures } from "@/components/sections/ara-ts-plus/ara-ts-plus-features";
import { AraTsPlusBenefits } from "@/components/sections/ara-ts-plus/ara-ts-plus-benefits";
import { AraTsPlusDocuments } from "@/components/sections/ara-ts-plus/ara-ts-plus-documents";

export const metadata: Metadata = {
  title: "ARA-TS Plus - Web Content Management & Filtering | ARA Networks",
  description: "Manage and Filter Access to Web Contents with Advanced Security Features",
};

export default function AraTsPlusPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 animate-grid" />
      
      <AraTsPlusHero />

      {/* Introduction Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="p-8 backdrop-blur-sm bg-background/50">
            <h2 className="text-2xl font-semibold mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              ARA-TS Plus can manage and take control of harmful web contents such as pornography, gambling, offensive articles against government and corporate by updating and applying the network security policy and guidelines of government, ISPs and companies. ARA-TS Plus offers flexible filtering scheme by integrating with 3rd party filtering DB such as McAfee SmartFilter™ which provides 90 categories and 25 million URLs. The filtering DB provides user-defined category based on log analysis and statistics. Also, the keyword search allows easy finding of the target subject using blocking list.
            </p>
          </Card>
        </div>
      </section>

      <AraTsPlusFeatures />
      <AraTsPlusBenefits />
      <AraTsPlusDocuments />
    </div>
  );
}
