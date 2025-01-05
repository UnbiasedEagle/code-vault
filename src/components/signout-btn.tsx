'use client';

import { Button } from '@/components/ui/button';
import { SignOutButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';

export const SignOutBtn = () => {
  return (
    <SignOutButton redirectUrl='/'>
      <Button
        asChild
        variant='ghost'
        className='w-full cursor-pointer justify-start text-muted-foreground hover:text-foreground'
      >
        <div className='flex items-center gap-3'>
          <LogOut size={16} />
          Sign out
        </div>
      </Button>
    </SignOutButton>
  );
};
