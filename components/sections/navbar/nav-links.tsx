'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

const links = [
  { href: '/products', label: 'Products', submenu: [
    { href: '/products/jaguar', label: 'JAGUAR' },
    { href: '/products/traffic-sentinel', label: 'Traffic Sentinel' },
  ]},
  { href: '/solutions', label: 'Solutions', submenu: [
    { href: '/solutions/telco', label: 'Telco Solutions' },
    { href: '/solutions/enterprise', label: 'Enterprise' },
    { href: '/solutions/cdn', label: 'CDN Providers' },
  ]},
  { href: '/company', label: 'Company' },
  { href: '/patents', label: 'Patents' },
  { href: '/contact', label: 'Contact' },
] as const;

export function NavLinks({ className, onClick }: NavLinksProps) {
  return (
    <div className={cn('items-center gap-8', className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}