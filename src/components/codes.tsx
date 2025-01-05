import { CodeFilter } from '@/types';
import { CodeList } from './code-list';
import prisma from '@/lib/db';
import { Prisma } from '@prisma/client';

interface CodeProps {
  showCode?: boolean;
  userId: string;
  params: {
    filter: string;
    tag: string;
    language: string;
    q: string;
  };
}

export const Codes = async ({ showCode = true, params, userId }: CodeProps) => {
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

  const query: Prisma.CodeFindManyArgs['where'] = {
    userId,
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

  return <CodeList filter={filter} codeItems={codes} showCode={showCode} />;
};
