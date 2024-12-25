'use server';

import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateTag(prevState: unknown, formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const name = formData.get('name') as string;
  const tagId = formData.get('tagId') as string;

  if (!name) {
    return {
      error: 'Tag name is required',
    };
  }

  const isTagExists = await prisma.tag.findFirst({
    where: {
      id: tagId,
      userId,
    },
  });

  if (!isTagExists) {
    return {
      error: 'Tag not found',
    };
  }

  const tagSlug = name.toLowerCase().trim().replace(/\s+/g, '-');

  await prisma.tag.update({
    where: {
      id: tagId,
    },
    data: {
      name,
      slug: tagSlug,
    },
  });

  revalidatePath('/codes');

  return {
    success: true,
    message: 'Tag updated successfully',
  };
}
