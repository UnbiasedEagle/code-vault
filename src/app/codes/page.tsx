import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ContentArea } from './components/content-area';
import { TopBar } from './components/topbar';

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

  if (!user) {
    return redirect('/sign-in');
  }

  return (
    <div className='h-full scrollbar-hide overflow-auto flex flex-col gap-5'>
      <TopBar
        imageUrl={user.imageUrl}
        fullName={user.firstName + ' ' + user.lastName}
        email={user.emailAddresses[0].emailAddress}
      />
      <ContentArea userId={user.id} params={params} />
    </div>
  );
};

export default CodesPage;
