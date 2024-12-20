import { Logo } from '@/components/logo';
import { SignOutBtn } from '@/components/signout-btn';
import { Languages } from './languages';
import { QuickLinks } from './quick-links';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import prisma from '@/lib/db';

export const Sidebar = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const tags = await prisma.tag.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  return (
    <aside className='hidden lg:flex w-80 border-r border-border flex-col h-screen bg-card'>
      <Logo />
      <div className='flex-1 flex flex-col gap-6 p-4 overflow-y-auto'>
        <QuickLinks tags={tags} />
        <Languages />
      </div>
      <div className='p-3 border-t border-border'>
        <SignOutBtn />
      </div>
    </aside>
  );
};
