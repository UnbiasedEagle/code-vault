'use client';

import { FaCode } from 'react-icons/fa';
import { Button } from '../ui/button';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <nav className='flex flex-col sm:flex-row mt-10 sm:mt-0 sm:h-20 items-center justify-between'>
      <div className='flex items-center gap-2'>
        <FaCode className='text-primary' size={32} />
        <span className='font-bold text-2xl text-primary'>CodeVault</span>
      </div>
      <div className='flex flex-col w-full sm:w-auto mt-8 sm:mt-0 sm:flex-row sm:items-center gap-4 sm:gap-2'>
        {!isSignedIn && (
          <>
            <SignInButton>
              <Button className='w-full sm:w-auto'>Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button className='w-full sm:w-auto' variant='secondary'>
                Sign Up
              </Button>
            </SignUpButton>
          </>
        )}
        {isSignedIn && (
          <Button asChild>
            <Link href='/codes'>Enter CodeVault</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
