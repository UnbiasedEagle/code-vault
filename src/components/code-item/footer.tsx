import { Edit, Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { CardFooter } from '../ui/card';
import { useEditCode } from '@/stores/use-edit-code';
import { useShowCode } from '@/stores/use-show-code';
import { CodeWithTags } from '@/types';
import { Languages } from '@/lib/utils';
import { IconType } from 'react-icons/lib';

interface CodeItemFooterProps {
  code: CodeWithTags;
}

export const CodeItemFooter = ({ code }: CodeItemFooterProps) => {
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  const language = Languages.find((lang) => lang.label === code.language);
  const LanguageIcon = language?.icon as IconType;

  return (
    <CardFooter className='flex border-t px-4 py-2 items-center justify-between'>
      <div className='flex items-center gap-1'>
        <span>
          <LanguageIcon className='text-base' />
        </span>
        <span className='text-sm'>{language?.name}</span>
      </div>
      <div className='flex items-center gap-4'>
        <Button
          onClick={() => {
            setShowCompleteCode(null);
            setSelectedCode(code);
          }}
          className='bg-background px-0 hover:bg-background'
          variant='ghost'
        >
          <Edit size={20} className='text-blue-500 p-0 text-base' />
        </Button>
        <Button
          className='bg-background px-0 hover:bg-background'
          variant='ghost'
        >
          <Trash size={20} className='text-red-500 p-0 text-base' />
        </Button>
      </div>
    </CardFooter>
  );
};
