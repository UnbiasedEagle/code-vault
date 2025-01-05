'use client';

import { Button } from '@/components/ui/button';
import { useClerk } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const SignOutBtn = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  return (
    <Button
      onClick={() => {
        signOut({ redirectUrl: '/' });
        router.push('/');
      }}
      asChild
      variant='ghost'
      className='w-full cursor-pointer justify-start text-muted-foreground hover:text-foreground'
    >
      <div className='flex items-center gap-3'>
        <LogOut size={16} />
        Sign out
      </div>
    </Button>
  );
};
