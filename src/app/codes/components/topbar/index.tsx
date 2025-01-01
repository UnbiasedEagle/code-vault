'use client';

import { LanguagesSection } from '@/components/layout/sidebar/languages-section';
import { QuickLinks } from '@/components/layout/sidebar/quick-links';
import { Logo } from '@/components/logo';
import { SignOutBtn } from '@/components/signout-btn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { CreateCodeButton } from './create-code-button';
import { SearchBar } from './search-bar';
import { UserProfile } from './user-profile';
import { SimpleTag } from '@/types';

interface TopBarProps {
  imageUrl: string;
  fullName: string;
  email: string;
  tags: SimpleTag[];
  languageCounts: {
    name: string;
    count: number;
    icon: JSX.Element;
  }[];
}

export const TopBar = ({
  imageUrl,
  fullName,
  email,
  tags,
  languageCounts,
}: TopBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Card>
      <CardContent className='p-4'>
        <div className='flex items-center justify-between gap-6'>
          <div className='hidden sm:block'>
            <UserProfile
              imageUrl={imageUrl}
              fullName={fullName}
              email={email}
            />
          </div>
          <div className='flex items-center gap-2.5 flex-1 max-w-4xl'>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CreateCodeButton />
          </div>
          <div className='flex items-center gap-2'>
            <ThemeSwitch />
            <div className='md:hidden'>
              <Sheet>
                <VisuallyHidden.Root>
                  <SheetTitle>Menu</SheetTitle>
                </VisuallyHidden.Root>
                <SheetTrigger asChild>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='h-10 w-10 px-0 border border-border'
                  >
                    <Menu className='h-5 w-5' />
                    <span className='sr-only'>Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side='left' className='w-80 p-0 bg-card'>
                  <div className='flex flex-col h-full'>
                    <Logo />
                    <div className='flex-1 flex flex-col gap-6 p-6 overflow-y-auto'>
                      <QuickLinks tags={tags} />
                      <LanguagesSection languageCounts={languageCounts} />
                    </div>
                    <div className='p-4 border-t border-border bg-card/50'>
                      <SignOutBtn />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
