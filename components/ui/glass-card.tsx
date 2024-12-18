'use client';

import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl',
        className
      )}
      {...props}
    />
  );
}