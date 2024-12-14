'use client';

import { CodeList } from '@/components/code-list';
import { TagsSwiper } from './tags-swiper';
import { CodeForm } from '@/components/code-form';
import { useEditCode } from '@/stores/use-edit-code';
import { cn } from '@/lib/utils';
import { useCreateCode } from '@/stores/use-create-code';
import { useShowCode } from '@/stores/use-show-code';
import { CodeItem } from '@/components/code-item';
import { Code, Tag } from '@prisma/client';

interface ContentAreaProps {
  tags: Tag[];
  codeItems: Code[];
}

export const ContentArea = ({ tags, codeItems }: ContentAreaProps) => {
  const completeCode = useShowCode();
  const editCode = useEditCode();
  const createCode = useCreateCode();

  return (
    <div className='flex gap-4'>
      <div
        className={cn(
          'flex flex-col gap-5',
          createCode.showNewCode ||
            editCode.selectedCode ||
            completeCode.selectedCode
            ? 'w-full md:w-1/2'
            : 'w-full'
        )}
      >
        <TagsSwiper tags={tags} />
        <CodeList codeItems={codeItems} showCode={false} />
      </div>
      {completeCode.selectedCode !== null ? (
        <>
          <div className='fixed inset-0 lg:static lg:w-full'>
            <div
              onClick={() => completeCode.setSelectedCode(null)}
              className='absolute inset-0 bg-black/90 lg:hidden'
            ></div>
            <div className='absolute w-[90%] left-1/2 -translate-x-1/2 lg:w-full top-1/2 -translate-y-1/2 lg:z-0 lg:static lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0'>
              <CodeItem codeItem={completeCode.selectedCode} showCode={true} />
            </div>
          </div>
        </>
      ) : (
        (editCode.selectedCode || createCode.showNewCode) && (
          <>
            <div className='fixed inset-0 lg:static lg:w-full'>
              <div
                onClick={() => completeCode.setSelectedCode(null)}
                className='absolute inset-0 bg-black/90 lg:hidden'
              ></div>
              <div className='absolute w-[90%] left-1/2 -translate-x-1/2 lg:w-full top-1/2 -translate-y-1/2 lg:z-0 lg:static lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0'>
                <CodeForm tags={tags} />
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};
