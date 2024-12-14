'use server';

import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTag(prevState: unknown, formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const name = formData.get('name') as string;

  const tagSlug = name.toLowerCase().trim().replace(/\s+/g, '-');

  const isTagExists = await prisma.tag.findFirst({
    where: {
      slug: tagSlug,
      userId,
    },
  });

  if (isTagExists) {
    return {
      error: 'Tag already exists',
    };
  }

  await prisma.tag.create({
    data: {
      name,
      slug: tagSlug,
      userId,
    },
  });

  revalidatePath('/codes');

  return {
    success: true,
    message: 'Tag created successfully',
  };
}
