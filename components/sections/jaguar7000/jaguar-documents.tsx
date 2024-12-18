'use client';

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { FileDown } from "lucide-react";

export function JaguarDocuments() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Document Center"
          description="Access Product Documentation"
        />
        <div className="flex flex-col gap-4 mt-12 max-w-md mx-auto">
          <Button variant="outline" className="w-full">
            <FileDown className="mr-2 h-4 w-4" />
            DATASHEET DOWNLOAD 1
          </Button>
          <Button variant="outline" className="w-full">
            <FileDown className="mr-2 h-4 w-4" />
            DATASHEET DOWNLOAD 2
          </Button>
        </div>
      </div>
    </section>
  );
}
