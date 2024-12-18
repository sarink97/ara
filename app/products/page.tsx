import { AraLogo } from '@/components/ui/ara-logo';
import { ProductsHero } from '@/components/sections/products/products-hero';
import { CacheProducts } from '@/components/sections/products/cache-products';
import { VisibilityProducts } from '@/components/sections/products/visibility-products';
import { Metadata } from "next";

const cacheProducts = [
  {
    type: "LTE Edge Cache",
    product: "JAGUAR 7000",
    description: "LTE Mobile Operator",
  },
  {
    type: "Transparent Cache",
    product: "JAGUAR 6000",
    description: "Fixed Line Operator & MSO",
  },
  {
    type: "Proxy Cache",
    product: "JAGUAR 5000",
    description: "Fixed Line Operator & MSO & CDN Service Provider",
  },
];

const visibilityProducts = [
  {
    type: "Secure Web Gateway",
    product: "JAGUAR 5000",
    description: "Enterprise",
  },
  {
    type: "URL Filter",
    product: "ARA-TS Plus JAGUAR5000/6000",
    description: "Fixed and Wireless Operator",
  },
  {
    type: "L7 Traffic Analyzer",
    product: "ARA-TS ARA-TS6000",
    description: "Enterprise & Fixed and Wireless Operator",
  },
  {
    type: "SSL Visibility Appliance",
    product: "SSL PRISM",
    description: "Enterprise & ISP Premium Service",
  },
];

export const metadata: Metadata = {
  title: "Products Overview | ARA Networks",
  description: "Cache Product For QoE Enhancement, Bandwidth Saving and CDN, and Visibility and Control Product For Security, Filtering and Monitoring",
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 animate-grid" />
      <div className="relative">
        <ProductsHero />
        <CacheProducts />
        <VisibilityProducts />
      </div>
    </div>
  );
}
