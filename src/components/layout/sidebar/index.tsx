import { FaCode } from 'react-icons/fa';
import { QuickLinks } from './quick-links';
import { Languages } from './languages';

export const Sidebar = () => {
  return (
    <div className='w-80 flex flex-col h-screen border-r bg-white/50 backdrop-blur-sm'>
      <div className='flex items-center gap-2 px-6 h-16 border-b'>
        <FaCode className='text-primary' size={24} />
        <span className='font-bold text-xl text-primary'>CodeVault</span>
      </div>
      <div className='flex-1 flex flex-col gap-6 p-4 overflow-y-auto'>
        <QuickLinks />
        <Languages />
      </div>
    </div>
  );
};
