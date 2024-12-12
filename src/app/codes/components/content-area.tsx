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
  const showCompleteCode = useShowCode();
  const showEditCode = useEditCode((state) => state.selectedCode !== null);
  const showNewCode = useCreateCode((state) => state.showNewCode);

  return (
    <div className='flex gap-4'>
      <div
        className={cn(
          'flex flex-col gap-5',
          showEditCode || showNewCode || showCompleteCode.selectedCode
            ? 'w-full md:w-1/2'
            : 'w-full'
        )}
      >
        <TagsSwiper />
        <CodeList showCode={false} />
      </div>
      {showCompleteCode.selectedCode !== null ? (
        <div className='fixed md:static left-0 right-0 w-[95%] md:w-full mx-auto'>
          <CodeItem codeItem={showCompleteCode.selectedCode} showCode={true} />
        </div>
      ) : (
        (showEditCode || showNewCode) && (
          <div className='fixed md:static left-0 right-0 w-[95%] md:w-full mx-auto'>
            <CodeForm />
          </div>
        )
      )}
    </div>
  );
};
