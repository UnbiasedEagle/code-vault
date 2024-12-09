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
    <div className='flex flex-col gap-5'>
      <TopBar
        imageUrl={user.imageUrl}
        fullName={user.firstName + ' ' + user.lastName}
        email={user.emailAddresses[0].emailAddress}
      />
      <ContentArea showCode={false} />
    </div>
  );
};

export default CodesPage;
