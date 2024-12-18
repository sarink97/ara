'use client';

import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  Icon?: LucideIcon;
}

export function SectionHeader({ title, description, Icon }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {Icon && (
        <div className="mb-2">
          <Icon className="w-10 h-10 text-primary" />
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-wider border-b-2 border-primary pb-2">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-4 max-w-2xl">{description}</p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-2" />
    </div>
  );
}
