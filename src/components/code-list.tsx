import { Code } from '@prisma/client';
import { CodeItem } from './code-item';

interface CodeListProps {
  codeItems: Code[];
  showCode?: boolean;
}

export const CodeList = ({ showCode = true, codeItems }: CodeListProps) => {
  return (
    <>
      {codeItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg bg-gray-50'>
          <p className='text-lg font-medium text-gray-600'>
            No code items found
          </p>
          <p className='mt-1 text-sm text-gray-500'>
            Add some code items to see them here
          </p>
        </div>
      ) : (
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4'>
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
