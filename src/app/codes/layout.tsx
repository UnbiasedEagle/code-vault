import { Sidebar } from '@/components/layout/sidebar/index';
import { PropsWithChildren } from 'react';

const CodesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen bg-background dark:bg-gradient-to-br dark:from-background dark:to-background/95'>
      <Sidebar />
      <div className='flex-1 p-6'>{children}</div>
    </div>
  );
};

export default CodesLayout;
