import Image from 'next/image';
import { BRAND_IMAGES } from '@/lib/constants/images';
import { cn } from '@/lib/utils';

interface AraLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function AraLogo({ width = 140, height = 45, className }: AraLogoProps) {
  return (
    <Image
      src={BRAND_IMAGES.LOGO}
      alt="ARA Networks"
      width={width}
      height={height}
      priority
      className={cn('w-auto', className)}
    />
  );
}
