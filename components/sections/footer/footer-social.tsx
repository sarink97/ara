'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
] as const;

export function FooterSocial() {
  return (
    <div>
      <h3 className="font-bold text-xl mb-6 text-primary">Connect</h3>
      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  );
}