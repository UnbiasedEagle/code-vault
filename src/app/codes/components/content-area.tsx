'use client';

import { CodeList } from '@/components/code-list';
import { TagsSwiper } from './tags-swiper';
import { CodeForm } from '@/components/code-form';
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
        className={cn('flex flex-col gap-5', showEditCode ? 'w-1/2' : 'w-full')}
      >
        <TagsSwiper />
        <CodeList showCode={showCode} />
      </div>
      {showEditCode && (
        <div>
          <CodeForm />
        </div>
      )}
    </div>
  );
};
