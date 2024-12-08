import { FaCode } from 'react-icons/fa';
import { QuickLinks } from './quick-links';
import { Languages } from './languages';
import { SignOutButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Sidebar = () => {
  return (
    <aside className='w-80 flex border-r border-border flex-col h-screen bg-card'>
      <div className='flex items-center gap-2 px-6 h-16 border-b border-border'>
        <FaCode className='text-primary' size={24} />
        <span className='font-bold text-xl text-primary'>CodeVault</span>
      </div>
      <div className='flex-1 flex flex-col gap-6 p-4 overflow-y-auto'>
        <QuickLinks />
        <Languages />
      </div>
      <div className='p-3 border-t border-border'>
        <Button
          asChild
          variant='ghost'
          className='w-full justify-start text-muted-foreground hover:text-foreground'
        >
          <SignOutButton>
            <div className='flex items-center gap-3'>
              <LogOut size={16} />
              Sign out
            </div>
          </SignOutButton>
        </Button>
      </div>
    </aside>
  );
};
