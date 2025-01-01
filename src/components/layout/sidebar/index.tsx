import { Logo } from '@/components/logo';
import { SignOutBtn } from '@/components/signout-btn';
import { LanguagesSection } from './languages-section';
import { QuickLinks } from './quick-links';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import prisma from '@/lib/db';
import { Languages } from '@/lib/utils';

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

  const codesByLanguage = await prisma.code.groupBy({
    by: ['language'],
    _count: {
      language: true,
    },
  });

  const languageCounts = codesByLanguage.map((language) => {
    const foundLanguage = Languages.find(
      (lang) => lang.label === language.language
    )!;
    return {
      icon: <foundLanguage.icon className='text-lg opacity-75' />,
      name: foundLanguage.name,
      count: language._count.language,
    };
  });

  return (
    <aside className='hidden lg:flex w-80 border-r border-border flex-col h-screen bg-card'>
      <Logo />
      <div className='flex-1 flex flex-col gap-6 p-4 overflow-y-auto'>
        <QuickLinks tags={tags} />
        <LanguagesSection languageCounts={languageCounts} />
      </div>
      <div className='p-3 border-t border-border'>
        <SignOutBtn />
      </div>
    </aside>
  );
};
