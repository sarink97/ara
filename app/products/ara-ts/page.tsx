import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AraTsHero } from "@/components/sections/ara-ts/ara-ts-hero";

export const metadata: Metadata = {
  title: "ARA-TS - Advanced Traffic Security | ARA Networks",
  description: "L7 Analysis and Traffic Security Management Solution",
};

export default function AraTsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 animate-grid" />
      
      <AraTsHero />

      {/* Introduction Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="p-8 backdrop-blur-sm bg-background/50">
            <h2 className="text-2xl font-semibold mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conventional security products such as Firewall are not capable of detecting and blocking protocols that use random ports and proxies. As a result, demand for more advanced security products to deal with these types of challenges have grown. ARA&apos;s security management tool, ARA-TS(ARA Traffic Sentinel), uses L7 analysis to identify traffic. The ARA-TS & ARA-TS Plus command is designed for enterprises who are concerned with the risk of privileged information being leaked and for those who are looking to provide Internet filtering services to their end customers creating potential new revenue streams. ARA&apos;s ARA-TS provides detailed traffic reporting, web logging analysis and abnormal traffic detection to help the administrator recognize potential harmful attacks and illegal Internet access. The administrator can then implement plans of action to prevent costly and irreversible damage.
            </p>
          </Card>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <Card className="p-8 backdrop-blur-sm bg-background/50">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#overview" className="text-blue-500 hover:underline">Overview</Link>
                  </li>
                  <li>
                    <Link href="#p2p-control" className="text-blue-500 hover:underline">P2P Control</Link>
                  </li>
                  <li>
                    <Link href="#monitor" className="text-blue-500 hover:underline">Monitor</Link>
                  </li>
                  <li>
                    <Link href="#utility" className="text-blue-500 hover:underline">Utility</Link>
                  </li>
                  <li>
                    <Link href="#specifications" className="text-blue-500 hover:underline">Specifications</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Deployment</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#model" className="text-blue-500 hover:underline">Model</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
