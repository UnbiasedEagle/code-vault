'use client';

import { CodeList } from '@/components/code-list';
import { TagsSwiper } from './tags-swiper';
import { CodeForm } from '@/components/code-form';
import { useEditCode } from '@/stores/use-edit-code';
import { cn } from '@/lib/utils';
import { useCreateCode } from '@/stores/use-create-code';
import { useShowCode } from '@/stores/use-show-code';
import { CodeItem } from '@/components/code-item';

export const ContentArea = () => {
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
        <TagsSwiper />
        <CodeList showCode={false} />
      </div>
      {completeCode.selectedCode !== null ? (
        <div className='fixed md:static left-0 right-0 w-[95%] md:w-full mx-auto'>
          <div
            onClick={() => completeCode.setSelectedCode(null)}
            className='fixed inset-0 bg-black/90 md:hidden'
          ></div>
          <div className='relative z-1 md:z-0'>
            <CodeItem codeItem={completeCode.selectedCode} showCode={true} />
          </div>
        </div>
      ) : (
        (editCode.selectedCode || createCode.showNewCode) && (
          <div className='fixed md:static left-0 right-0 w-[95%] md:w-full mx-auto'>
            <div
              onClick={() => {
                editCode.setSelectedCode(null);
                createCode.setShowNewCode(false);
              }}
              className='fixed inset-0 bg-black/90 md:hidden'
            ></div>
            <div className='relative z-1 md:z-0'>
              <CodeForm />
            </div>
          </div>
        )
      )}
    </div>
  );
};
