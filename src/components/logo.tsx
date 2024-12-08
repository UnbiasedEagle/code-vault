'use client';

import { FaCode } from 'react-icons/fa';

export const Logo = () => {
  return (
    <div className='flex items-center gap-2 px-6 h-16 border-b border-border'>
      <FaCode className='text-primary' size={24} />
      <span className='font-bold text-xl text-primary'>
        CodeVault
      </span>
    </div>
  );
};
