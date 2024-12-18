'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { NavLinks } from './nav-links';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="h-[100dvh] max-w-full p-6 pt-20">
        <div className="flex flex-col gap-8">
          <NavLinks className="flex flex-col text-2xl gap-6" onClick={onClose} />
          <div className="flex flex-col gap-4">
            <Button variant="ghost" onClick={onClose}>
              Sign In
            </Button>
            <Button onClick={onClose}>
              Get Started
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}