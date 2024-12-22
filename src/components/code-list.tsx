import { CodeFilter, CodeWithTags } from '@/types';
import { CodeItem } from './code-item';
import { CreateCodeButton } from '@/app/codes/components/topbar/create-code-button';
import { Archive } from 'lucide-react';
import { FaHeart } from 'react-icons/fa';

interface CodeListProps {
  codeItems: CodeWithTags[];
  showCode?: boolean;
  filter: CodeFilter;
}

const getEmptyMessage = (filter: CodeFilter) => {
  switch (filter) {
    case 'favorites':
      return {
        title: (
          <span className='whitespace-normal'>
            No <FaHeart size={20} className='text-red-500 inline-flex' /> code
            items found
          </span>
        ),
        description: 'Mark code items as favorite to easily find them here.',
      };
    case 'archived':
      return {
        title: (
          <span className='whitespace-normal'>
            No <Archive size={20} className='text-primary inline-flex' /> code
            items found
          </span>
        ),
        description: 'Archived code items will appear here.',
      };
    default:
      return {
        title: 'No code items found',
        description:
          'Click the button below to start building your code collection.',
      };
  }
};

export const CodeList = ({
  showCode = true,
  codeItems,
  filter,
}: CodeListProps) => {
  const { title, description } = getEmptyMessage(filter);
  return (
    <>
      {codeItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-lg bg-gray-50 dark:bg-gray-50/5 space-y-3'>
          <div className='space-y-1'>
            <p className='text-lg font-medium text-gray-600 dark:text-gray-300'>
              {title}
            </p>
          </div>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            {description}
          </p>
          {filter === 'all' && <CreateCodeButton />}
        </div>
      ) : (
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4'>
          {codeItems.map((codeItem) => (
            <li key={codeItem.id}>
              <CodeItem
                key={codeItem.id}
                codeItem={codeItem}
                showCode={showCode}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
