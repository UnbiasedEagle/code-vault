'use client';

import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { CardHeader } from '../ui/card';
import { useEditCode } from '@/stores/use-edit-code';

interface CodeItemHeaderProps {
  title: string;
  date: string;
}

export const CodeItemHeader = ({ title, date }: CodeItemHeaderProps) => {
  const showEditCode = useEditCode((state) => state.setShowEditCode);

  return (
    <CardHeader className='p-4 flex flex-col gap-2'>
      <div className='flex justify-between items-start gap-5'>
        <Button
          onClick={() => showEditCode(true)}
          variant='link'
          className='shrink-1 whitespace-normal text-left font-bold p-0 text-lg'
        >
          {title}
        </Button>
        <span className='cursor-pointer mt-1 hover:text-red-500 transition-colors duration-300'>
          <Heart size={20} />
        </span>
      </div>
      <div>
        <span className='text-neutral-400 font-medium text-sm'>{date}</span>
      </div>
    </CardHeader>
  );
};
