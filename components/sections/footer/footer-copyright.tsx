'use client';

export function FooterCopyright() {
  return (
    <div className="mt-16 pt-8 border-t border-border text-center">
      <p className="text-muted-foreground">
        &copy; {new Date().getFullYear()} ARA Networks. All rights reserved.
      </p>
    </div>
  );
}