'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLinks } from './nav-links';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ara-logo.png"
              alt="ARA Networks"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          <NavLinks className="hidden md:flex" />

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="hidden md:flex">
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </motion.nav>
  );
}