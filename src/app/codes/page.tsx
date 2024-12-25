import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ContentArea } from './components/content-area';
import { TopBar } from './components/topbar';
import prisma from '@/lib/db';
import { CodeFilter } from '@/types';
import { Prisma } from '@prisma/client';

interface CodePageProps {
  searchParams: Promise<{
    filter: string;
    tag: string;
  }>;
}

const CodesPage = async ({ searchParams }: CodePageProps) => {
  const params = await searchParams;
  const user = await currentUser();

  let filter: CodeFilter = 'all';
  let tagId: undefined | string;

  if (params.filter) {
    filter = params.filter as CodeFilter;
  }

  if (params.tag) {
    tagId = params.tag;
  }

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

  const query: Prisma.CodeFindManyArgs['where'] = {
    userId: user.id,
    archived: false,
  };

  if (filter === 'favorites') {
    query.favorited = true;
  }

  if (filter === 'archived') {
    query.archived = true;
  }

  if (tagId) {
    query.tags = {
      some: {
        id: tagId,
      },
    };
  }

  const codes = await prisma.code.findMany({
    where: query,
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
