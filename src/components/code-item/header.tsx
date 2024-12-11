'use client';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import { CardHeader } from '../ui/card';
import { useEditCode } from '@/stores/use-edit-code';
import { ICodeItem } from '@/types';

interface CodeItemHeaderProps {
  code: ICodeItem;
}

export const CodeItemHeader = ({ code }: CodeItemHeaderProps) => {
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  return (
    <CardHeader className='p-4 flex flex-col gap-2'>
      <div className='flex justify-between items-start gap-5'>
        <Button
          onClick={() => setSelectedCode(code)}
          variant='link'
          className='shrink-1 text-black dark:text-white hover:text-primary dark:hover:text-primary whitespace-normal text-left font-bold p-0 text-lg'
        >
          {code.title}
        </Button>
        <span className='cursor-pointer hover:text-red-500 transition-colors duration-300'>
          {code.isLiked ? (
            <FaHeart size={20} className='text-red-500' />
          ) : (
            <FaRegHeart
              size={20}
              className='text-neutral-400 hover:text-red-500 transition-colors duration-300'
            />
          )}
        </span>
      </div>
      <div>
        <span className='text-neutral-400 font-medium text-sm'>
          {code.date.toDateString()}
        </span>
      </div>
    </CardHeader>
  );
};
