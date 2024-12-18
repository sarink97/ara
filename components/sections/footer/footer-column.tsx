'use client';

import Link from 'next/link';

interface FooterColumnProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-bold text-xl mb-6 text-primary">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
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
  );
}