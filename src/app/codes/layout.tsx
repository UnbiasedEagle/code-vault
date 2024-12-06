import { Sidebar } from '@/components/layout/sidebar/index';
import { PropsWithChildren } from 'react';

const CodesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default CodesLayout;
