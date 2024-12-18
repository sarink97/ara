'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SolutionsCard } from './solutions-card';
import { mobileSolutions, enterpriseSolutions } from './solutions-data';

export function SolutionsTabs() {
  return (
    <Tabs defaultValue="mobile" className="max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="mobile" className="text-lg">
          Mobile Solutions
        </TabsTrigger>
        <TabsTrigger value="enterprise" className="text-lg">
          Enterprise Solutions
        </TabsTrigger>
      </TabsList>
      <TabsContent value="mobile">
        <SolutionsCard
          title="Mobile Edge Computing"
          features={mobileSolutions}
        />
      </TabsContent>
      <TabsContent value="enterprise">
        <SolutionsCard
          title="Enterprise Infrastructure"
          features={enterpriseSolutions}
        />
      </TabsContent>
    </Tabs>
  );
}