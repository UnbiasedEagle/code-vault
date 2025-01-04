import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ContentArea } from './components/content-area';
import { TopBar } from './components/topbar';
import prisma from '@/lib/db';
import { CodeFilter } from '@/types';
import { Prisma } from '@prisma/client';
import { Languages } from '@/lib/utils';

interface CodePageProps {
  searchParams: Promise<{
    filter: string;
    tag: string;
    language: string;
    q: string;
  }>;
}

const CodesPage = async ({ searchParams }: CodePageProps) => {
  const params = await searchParams;
  const user = await currentUser();

  let filter: CodeFilter = 'all';
  let tagId: undefined | string;
  let language: undefined | string;
  let q: undefined | string;

  if (params.filter) {
    filter = params.filter as CodeFilter;
  }

  if (params.tag) {
    tagId = params.tag;
  }

  if (params.language) {
    language = params.language;
  }

  if (params.q) {
    q = params.q;
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

  if (language) {
    query.language = language;
  }

  if (q) {
    query.OR = [
      {
        title: {
          contains: q,
          mode: 'insensitive',
        },
      },
    ];
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
      label: foundLanguage.label,
    };
  });

  return (
    <div className='h-full scrollbar-hide overflow-auto flex flex-col gap-5'>
      <TopBar
        tags={tags}
        imageUrl={user.imageUrl}
        fullName={user.firstName + ' ' + user.lastName}
        email={user.emailAddresses[0].emailAddress}
        languageCounts={languageCounts}
      />
      <ContentArea filter={filter} codeItems={codes} tags={tags} />
    </div>
  );
};

export default CodesPage;
