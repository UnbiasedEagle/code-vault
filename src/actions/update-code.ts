'use server';

import prisma from '@/lib/db';
import { CodeFormSchema } from '@/schemas/code-form';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateCode(
  prevState: unknown,
  id: string,
  formData: FormData
) {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }
  const validate = CodeFormSchema.safeParse({
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    code: formData.get('code') as string,
    language: formData.get('language') as string,
    tags: JSON.parse(formData.get('tags') as string) as string[],
  });

  if (!validate.success) {
    return {
      error: validate.error.message,
    };
  }

  const isCodeExists = await prisma.code.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!isCodeExists) {
    return {
      error: 'Code not found',
    };
  }

  await prisma.code.update({
    where: {
      id,
    },
    data: {
      title: validate.data.title,
      description: validate.data.description,
      code: validate.data.code,
      language: validate.data.language,
      tags: {
        connect: validate.data.tags.map((tagId) => ({ id: tagId })),
      },
    },
  });

  revalidatePath('/codes');

  return {
    success: true,
    message: 'Code updated successfully',
  };
}

export async function updateCodeFavorite(prevState: unknown, id: string) {
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
      error: 'Code not found',
    };
  }

  const updatedCode = await prisma.code.update({
    where: {
      id,
    },
    data: {
      favorited: !code.favorited,
    },
    include: {
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  revalidatePath('/codes');

  return {
    success: true,
    message: code.favorited ? 'Removed from favorites.' : 'Added to favorites!',
    data: updatedCode,
  };
}

export async function markCodeTrash(prevState: unknown, id: string) {
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
      error: 'Code not found',
    };
  }

  await prisma.code.update({
    where: {
      id,
    },
    data: {
      trashed: true,
    },
  });

  revalidatePath('/codes');

  return {
    success: true,
    message: 'Code moved to trash',
  };
}