'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <GlassCard className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-xl mb-6 text-cyan-400">Products</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Edge Cache</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cloud CDN</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Security Suite</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-cyan-400">Solutions</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">5G Edge</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Enterprise</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">IoT Platform</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">ML Optimization</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-cyan-400">Company</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-cyan-400">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>&copy; 2024 Cache Visibility Solutions. All rights reserved.</p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}