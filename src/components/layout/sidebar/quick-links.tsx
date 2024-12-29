'use client';

import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { AiFillSnippets } from 'react-icons/ai';
import { IoMdPricetags } from 'react-icons/io';
import { TagsDialog } from './tags-dialog';
import { SimpleTag } from '@/types';
import { Archive, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  {
    icon: AiFillSnippets,
    label: 'All Codes',
    query: 'all',
  },
  {
    icon: Heart,
    label: 'Favorites',
    query: 'favorites',
  },
  {
    icon: Archive,
    label: 'Archive',
    query: 'archived',
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
  const router = useRouter();
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
              let activeFilterQuery = 'all';

              if (searchParams.get('filter')) {
                activeFilterQuery = searchParams.get('filter') as string;
              }

              return (
                <li key={item.label}>
                  <Button
                    variant='ghost'
                    onClick={() => {
                      const currentParams = new URLSearchParams(
                        window.location.search
                      );
                      currentParams.set('filter', item.query);
                      router.push(`/codes?${currentParams.toString()}`);
                    }}
                    className={cn(
                      'w-full flex justify-start items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent/50 hover:text-accent-foreground transition-all',
                      activeFilterQuery === item.query &&
                        'bg-accent/50 text-accent-foreground shadow-sm'
                    )}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Button>
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
