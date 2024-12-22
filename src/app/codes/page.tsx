import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ContentArea } from './components/content-area';
import { TopBar } from './components/topbar';
import prisma from '@/lib/db';
import { CodeFilter } from '@/types';

interface CodePageProps {
  searchParams: Promise<{
    filter: string;
  }>;
}

const CodesPage = async ({ searchParams }: CodePageProps) => {
  const params = await searchParams;
  const user = await currentUser();

  if (!user) {
    return redirect('/sign-in');
  }

  const tags = await prisma.tag.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  const codes = await prisma.code.findMany({
    where: {
      userId: user.id,
      trashed: false,
    },
    include: {
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  let filter: CodeFilter = 'all';

  if (params.filter) {
    filter = params.filter as CodeFilter;
  }

  return (
    <div className='h-full scrollbar-hide overflow-auto flex flex-col gap-5'>
      <TopBar
        tags={tags}
        imageUrl={user.imageUrl}
        fullName={user.firstName + ' ' + user.lastName}
        email={user.emailAddresses[0].emailAddress}
      />
      <ContentArea filter={filter} codeItems={codes} tags={tags} />
    </div>
  );
};

export default CodesPage;
