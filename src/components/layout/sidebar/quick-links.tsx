'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AiFillSnippets } from 'react-icons/ai';
import { IoMdPricetags } from 'react-icons/io';
import { TagsDialog } from './tags-dialog';
import { SimpleTag } from '@/types';
import { Archive, Heart } from 'lucide-react';

const links = [
  {
    icon: AiFillSnippets,
    label: 'All Codes',
    query: 'filter=all',
  },
  {
    icon: Heart,
    label: 'Favorites',
    query: 'filter=favorites',
  },
  {
    icon: Archive,
    label: 'Archive',
    query: 'filter=archived',
  },
  {
    icon: IoMdPricetags,
    label: 'Tags',
  },
];

interface QuickLinksProps {
  tags: SimpleTag[];
}

export const QuickLinks = ({ tags }: QuickLinksProps) => {
  const searchParams = useSearchParams();

  return (
    <div className='space-y-3'>
      <span className='text-xs font-semibold text-muted-foreground px-2 uppercase tracking-wider'>
        Quick Links
      </span>
      <nav>
        <ul className='space-y-1'>
          {links.map((item) => {
            const Icon = item.icon;

            if (item.query) {
              let isActive = item.query.split('=')[1] === 'all';

              if (searchParams.get('filter')) {
                isActive =
                  item.query.split('=')[1] === searchParams.get('filter');
              }

              return (
                <li key={item.label}>
                  <Link
                    href={`/codes?${item.query}`}
                    className={cn(
                      'flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all',
                      isActive &&
                        'bg-accent/50 text-accent-foreground shadow-sm'
                    )}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            }
            return <TagsDialog tags={tags} key={item.label} />;
          })}
        </ul>
      </nav>
    </div>
  );
};
