'use client';

import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-300% animate-text-gradient bg-clip-text text-transparent',
        className
      )}
      {...props}
    />
  );
}