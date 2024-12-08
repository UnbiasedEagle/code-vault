import { Sidebar } from '@/components/layout/sidebar/index';
import { PropsWithChildren } from 'react';

const CodesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100'>
      <Sidebar />
      <div className='flex-1 p-6'>{children}</div>
    </div>
  );
};

export default CodesLayout;
