'use client';

import { cn } from '@/lib/utils';
import { useQuickLinks } from '@/stores/quick-links';
import Link from 'next/link';

export const QuickLinks = () => {
  const { links } = useQuickLinks();

  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Quick Links
      </span>
      <nav>
        <ul className='space-y-1'>
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = '/codes' === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all',
                    isActive && 'bg-accent/50 text-accent-foreground shadow-sm'
                  )}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
