import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { CardFooter } from '../ui/card';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { languages } from '@/lib/utils';
import { IconType } from 'react-icons/lib';

type Languages = (typeof languages)[number];

const languageMap: Record<Languages, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
};

interface CodeItemFooterProps {
  language: string;
}

export const CodeItemFooter = ({ language }: CodeItemFooterProps) => {
  const LanguageIcon = languageMap[language];

  return (
    <CardFooter className='flex border-t px-4 py-2 items-center justify-between'>
      <div className='flex items-center gap-1'>
        <span>
          <LanguageIcon className='text-base' />
        </span>
        <span className='text-sm'>{language}</span>
      </div>
      <Button
        className='bg-background px-0 hover:bg-background'
        variant='ghost'
      >
        <Trash size={20} className='text-red-500 p-0 text-base' />
      </Button>
    </CardFooter>
  );
};
