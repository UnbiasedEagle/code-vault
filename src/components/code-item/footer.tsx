import { Languages } from '@/lib/utils';
import { CodeFilter, CodeWithTags } from '@/types';
import { IconType } from 'react-icons/lib';
import { CardFooter } from '../ui/card';
import {
  ArchiveCodeFooterAction,
  CodeUpdateFooterAction,
} from './code-footer-action';
import { useSearchParams } from 'next/navigation';

interface CodeItemFooterProps {
  code: CodeWithTags;
}

export const CodeItemFooter = ({ code }: CodeItemFooterProps) => {
  const params = useSearchParams();

  const filter: CodeFilter = (params.get('filter') as CodeFilter) ?? 'all';

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
      {(filter === 'all' || filter === 'favorites') && (
        <CodeUpdateFooterAction code={code} />
      )}
      {filter === 'archived' && <ArchiveCodeFooterAction code={code} />}
    </CardFooter>
  );
};
