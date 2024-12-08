'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { UserProfile } from './user-profile';
import { SearchBar } from './search-bar';
import { CreateCodeButton } from './create-code-button';

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
          <UserProfile imageUrl={imageUrl} fullName={fullName} email={email} />
          <div className='flex items-center gap-2.5 flex-1 max-w-4xl'>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CreateCodeButton />
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
