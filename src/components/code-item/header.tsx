'use client';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import { CardHeader } from '../ui/card';
import { Code } from '@prisma/client';
import { useShowCode } from '@/stores/use-show-code';
import { cn } from '@/lib/utils';
import { AiOutlineClose } from 'react-icons/ai';
import { useEditCode } from '@/stores/use-edit-code';
import { useCreateCode } from '@/stores/use-create-code';

interface CodeItemHeaderProps {
  showCode: boolean;
  code: Code;
}

export const CodeItemHeader = ({ code, showCode }: CodeItemHeaderProps) => {
  const setSelectedCode = useShowCode((state) => state.setSelectedCode);
  const setEditCode = useEditCode((state) => state.setSelectedCode);
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);

  return (
    <CardHeader className='p-4 flex flex-col gap-2'>
      <div className='flex items-center justify-between gap-5'>
        <div
          className={cn(
            'flex justify-between items-center gap-3',
            showCode && 'justify-start'
          )}
        >
          <Button
            onClick={() => setSelectedCode(code)}
            variant='link'
            className='shrink-1 text-black dark:text-white hover:text-primary dark:hover:text-primary whitespace-normal text-left font-bold p-0 text-lg'
          >
            {code.title}
          </Button>
          <span
            role='button'
            className='cursor-pointer  hover:text-red-500 transition-colors duration-300'
          >
            {code.favorited ? (
              <FaHeart size={20} className='text-red-500' />
            ) : (
              <FaRegHeart
                size={20}
                className='text-neutral-400 hover:text-red-500 transition-colors duration-300'
              />
            )}
          </span>
        </div>
        {showCode && (
          <Button
            onClick={() => {
              setSelectedCode(null);
              setEditCode(null);
              setShowNewCode(false);
            }}
            variant='ghost'
          >
            <AiOutlineClose />
          </Button>
        )}
      </div>
      <div>
        <span className='text-neutral-400 font-medium text-sm'>
          {code.updatedAt.toDateString()}
        </span>
      </div>
    </CardHeader>
  );
};
