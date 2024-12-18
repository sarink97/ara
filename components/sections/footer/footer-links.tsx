'use client';

import Link from 'next/link';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'JAGUAR', href: '/products/jaguar' },
      { label: 'Traffic Sentinel', href: '/products/traffic-sentinel' },
      { label: 'Security Suite', href: '/products/security' },
      { label: 'Analytics', href: '/products/analytics' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Telco Solutions', href: '/solutions/telco' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'CDN Providers', href: '/solutions/cdn' },
      { label: 'Edge Computing', href: '/solutions/edge' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Patents', href: '/patents' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
] as const;

export function FooterLinks() {
  return (
    <>
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3 className="font-bold text-xl mb-6 text-primary">{section.title}</h3>
          <ul className="space-y-4">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}