'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ThemeSwitch } from '@/components/ui/theme-switch';

interface TopBarProps {
  imageUrl: string;
  fullName: string;
  email: string;
}

export const TopBar = ({ imageUrl, fullName, email }: TopBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Card>
      <CardContent className='p-4'>
        <div className='flex items-center justify-between gap-6'>
          <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
              <Image
                height={48}
                width={48}
                className='rounded-full border-2 border-border/50 shadow-sm'
                src={imageUrl}
                alt='User Avatar'
              />
            </div>
            <div className='min-w-0'>
              <h3 className='text-base font-semibold text-foreground truncate'>
                {fullName}
              </h3>
              <p className='text-xs text-muted-foreground/80 mt-0.5'>{email}</p>
            </div>
          </div>
          <div className='flex items-center gap-2.5 flex-1 max-w-4xl'>
            <div className='relative flex-1'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search className='h-4 w-4 text-muted-foreground' />
              </div>
              <Input
                placeholder='Search codes...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-9 pl-9 bg-muted/50'
              />
            </div>
            <Button
              variant='default'
              size='sm'
              className='h-9 flex items-center gap-1'
            >
              <Plus className='h-4 w-4' />
              Code
            </Button>
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
