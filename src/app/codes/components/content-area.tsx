'use client';

import { CodeList } from '@/components/code-list';
import { TagsSwiper } from './tags-swiper';
import { CodeSection } from '@/components/code-section';
import { useEditCode } from '@/stores/use-edit-code';
import { cn } from '@/lib/utils';
import { useCreateCode } from '@/stores/use-create-code';

interface ContentAreaProps {
  showCode: boolean;
}

export const ContentArea = ({ showCode }: ContentAreaProps) => {
  const showEditCode = useEditCode((state) => state.selectedCode !== null);
  const showNewCode = useCreateCode((state) => state.showNewCode);

  return (
    <div className='flex gap-4'>
      <div
        className={cn(
          'flex flex-col gap-5',
          showEditCode || showNewCode ? 'w-full md:w-1/2' : 'w-full'
        )}
      >
        <TagsSwiper />
        <CodeList showCode={showCode} />
      </div>
      {(showEditCode || showNewCode) && (
        <div className='fixed md:static left-0 right-0 w-[95%] md:w-full mx-auto'>
          <CodeSection />
        </div>
      )}
    </div>
  );
};
