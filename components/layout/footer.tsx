'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/brand/ara-logo.svg"
                alt="ARA Networks"
                width={120}
                height={40}
                className="mb-6"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Leading provider of cache visibility products and CDN solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cache Visibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  CDN Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary mb-3">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Telco
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            {new Date().getFullYear()} ARA Networks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
