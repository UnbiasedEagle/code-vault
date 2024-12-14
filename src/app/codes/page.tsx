import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ContentArea } from './components/content-area';
import { TopBar } from './components/topbar';
import prisma from '@/lib/db';

const CodesPage = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect('/sign-in');
  }

  const tags = await prisma.tag.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const codes = await prisma.code.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className='h-full overflow-auto scrollbar-hide flex flex-col gap-5'>
      <TopBar
        imageUrl={user.imageUrl}
        fullName={user.firstName + ' ' + user.lastName}
        email={user.emailAddresses[0].emailAddress}
      />
      <ContentArea codeItems={codes} tags={tags} />
    </div>
  );
};

export default CodesPage;
