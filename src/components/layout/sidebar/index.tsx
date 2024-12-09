import { Logo } from '@/components/logo';
import { SignOutBtn } from '@/components/signout-btn';
import { Languages } from './languages';
import { QuickLinks } from './quick-links';

export const Sidebar = () => {
  return (
    <aside className='hidden lg:flex w-80 border-r border-border flex-col h-screen bg-card'>
      <Logo />
      <div className='flex-1 flex flex-col gap-6 p-4 overflow-y-auto'>
        <QuickLinks />
        <Languages />
      </div>
      <div className='p-3 border-t border-border'>
        <SignOutBtn />
      </div>
    </aside>
  );
};
