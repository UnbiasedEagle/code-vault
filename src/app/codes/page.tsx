import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { TopBar } from './components/topbar';

const CodesPage = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect('/sign-in');
  }

  return (
    <div>
      <TopBar
        imageUrl={user.imageUrl}
        fullName={user.firstName + ' ' + user.lastName}
        email={user.emailAddresses[0].emailAddress}
      />
    </div>
  );
};

export default CodesPage;
