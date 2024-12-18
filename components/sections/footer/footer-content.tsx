'use client';

import { FooterColumn } from './footer-column';
import { footerData } from './footer-data';
import { FooterSocial } from './footer-social';

export function FooterContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      {footerData.map((column) => (
        <FooterColumn
          key={column.title}
          title={column.title}
          links={column.links}
        />
      ))}
      <FooterSocial />
    </div>
  );
}