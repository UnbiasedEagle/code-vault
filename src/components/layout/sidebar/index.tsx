import { Logo } from '@/components/logo';
import { SignOutBtn } from '@/components/signout-btn';
import { LanguagesSection } from './languages-section';
import { QuickLinks } from './quick-links';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const Sidebar = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  return (
    <aside className='hidden lg:flex w-80 border-r border-border flex-col h-screen bg-card'>
      <Logo />
      <div className='flex-1 flex flex-col gap-6 p-4 overflow-y-auto'>
        <QuickLinks />
        <LanguagesSection />
      </div>
      <div className='p-3 border-t border-border'>
        <SignOutBtn />
      </div>
    </aside>
  );
};
