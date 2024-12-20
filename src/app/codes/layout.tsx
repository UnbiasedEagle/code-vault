import { Sidebar } from '@/components/layout/sidebar';
import { PropsWithChildren } from 'react';

const CodesLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen bg-background dark:bg-gradient-to-br dark:from-background dark:to-background/95'>
      <Sidebar />
      <div className='flex-1 p-6 h-screen overflow-hidden'>{children}</div>
    </div>
  );
};

export default CodesLayout;
