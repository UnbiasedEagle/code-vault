'use client';

import { CodeList } from '@/components/code-list';
import { TagsSwiper } from './tags-swiper';
import { CodeSection } from '@/components/code-section';
import { useEditCode } from '@/stores/use-edit-code';
import { cn } from '@/lib/utils';

interface ContentAreaProps {
  showCode: boolean;
}

export const ContentArea = ({ showCode }: ContentAreaProps) => {
  const showEditCode = useEditCode((state) => state.showEditCode);

  return (
    <div className='flex gap-4'>
      <div
        className={cn(
          'flex flex-col gap-5',
          showEditCode ? 'w-full md:w-1/2' : 'w-full'
        )}
      >
        <TagsSwiper />
        <CodeList showCode={showCode} />
      </div>
      {showEditCode && (
        <div className='fixed md:static left-0 right-0 w-[95%] md:w-full mx-auto'>
          <CodeSection />
        </div>
      )}
    </div>
  );
};
