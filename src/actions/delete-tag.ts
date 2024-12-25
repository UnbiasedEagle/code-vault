'use server';

import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteTag(prevState: unknown, tagId: string) {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const tag = await prisma.tag.findFirst({
    where: {
      id: tagId,
      userId,
    },
  });

  if (!tag) {
    return {
      error: 'Tag not found!',
    };
  }

  await prisma.$transaction(async (prisma) => {
    await prisma.tag.delete({
      where: {
        id: tagId,
      },
    });

    const codesWithoutTags = await prisma.code.findMany({
      where: {
        tags: {
          none: {},
        },
      },
    });

    const codeIds = codesWithoutTags.map((code) => code.id);

    await prisma.code.deleteMany({
      where: {
        id: {
          in: codeIds,
        },
      },
    });
  });

  revalidatePath('/codes');

  return {
    success: true,
    message: 'Tag deleted successfully!',
  };
}
