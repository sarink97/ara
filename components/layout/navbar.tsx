'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AraLogo } from '@/components/ui/ara-logo';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const productItems = [
    { name: 'Products Overview', href: '/products' },
    { name: 'JAGUAR7000', href: '/products/jaguar7000' },
    { name: 'JAGUAR6000', href: '/products/jaguar6000' },
    { name: 'JAGUAR5000', href: '/products/jaguar5000' },
    { name: 'ARA TS-Plus', href: '/products/ara-ts-plus' },
    { name: 'ARA TS', href: '/products/ara-ts' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <AraLogo className="h-10" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productsOpen && (
                <div className="absolute top-full left-0 w-48 py-2 mt-1 bg-background border border-border rounded-md shadow-lg">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/company" className="text-muted-foreground hover:text-primary transition-colors">
              Company
            </Link>
            <Link href="/patents" className="text-muted-foreground hover:text-primary transition-colors">
              Patents
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

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

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <div className="text-lg font-medium">Products</div>
                  <div className="pl-4 space-y-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/solutions" className="text-lg font-medium">Solutions</Link>
                <Link href="/company" className="text-lg font-medium">Company</Link>
                <Link href="/patents" className="text-lg font-medium">Patents</Link>
                <Link href="/contact" className="text-lg font-medium">Contact</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Button>
                <Button onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
