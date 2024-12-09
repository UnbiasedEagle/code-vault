import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { IconType } from 'react-icons/lib';
import { CardFooter } from '../ui/card';

interface CodeItemFooterProps {
  language: {
    name: string;
    icon: IconType;
  };
}

export const CodeItemFooter = ({ language }: CodeItemFooterProps) => {
  return (
    <CardFooter className='flex border-t px-4 py-2 items-center justify-between'>
      <div className='flex items-center gap-1'>
        <span>
          <language.icon className='text-base' />
        </span>
        <span className='text-sm'>{language.name}</span>
      </div>
      <Button
        className='bg-background px-0 hover:bg-background'
        variant='ghost'
      >
        <Trash className='text-red-500 p-0 text-base' />
      </Button>
    </CardFooter>
  );
};
