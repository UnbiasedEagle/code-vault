import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ContentArea } from './components/content-area';
import { TopBar } from './components/topbar';

const CodesPage = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect('/sign-in');
  }

  return (
    <div className='h-full overflow-auto scrollbar-hide flex flex-col gap-5'>
      <TopBar
        imageUrl={user.imageUrl}
        fullName={user.firstName + ' ' + user.lastName}
        email={user.emailAddresses[0].emailAddress}
      />
      <ContentArea />
    </div>
  );
};

export default CodesPage;
