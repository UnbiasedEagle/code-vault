'use server';

import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteCode = async (prevState: unknown, id: string) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const code = await prisma.code.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!code) {
    return {
      error: 'Code not found!',
    };
  }

  await prisma.code.delete({
    where: {
      id,
    },
  });

  revalidatePath('/codes');

  return {
    success: true,
    message: 'Code deleted successfully!',
  };
};
