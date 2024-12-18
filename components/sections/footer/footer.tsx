'use client';

import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';
import { FooterLinks } from './footer-links';
import { FooterSocial } from './footer-social';
import { FooterCopyright } from './footer-copyright';

export function Footer() {
  return (
    <footer className="py-32 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <GlassCard className="p-16 relative">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-16 relative">
            <Image
              src="/ara-logo.png"
              alt="ARA Networks"
              width={180}
              height={60}
              className="mb-6"
            />
            <p className="text-muted-foreground text-center max-w-md">
              Pioneer and global leading provider of web, media, and mobile caching products since 1999
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <FooterLinks />
            <FooterSocial />
          </div>
          
          <FooterCopyright />
        </GlassCard>
      </div>
    </footer>
  );
}