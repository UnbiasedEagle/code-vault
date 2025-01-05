import { Codes } from '@/components/codes';
import { CodeFormModal } from './code-form-modal';
import { SelectedCodeDisplay } from './selected-code-display';
import { TagsSwiper } from './tags-swiper';
import { Suspense } from 'react';
import { LoadingTagsSwiper } from './loading-tags-swiper';
import { LoadingCodes } from './loading-codes';

interface ContentAreaProps {
  userId: string;
  params: {
    filter: string;
    tag: string;
    language: string;
    q: string;
  };
}

export const ContentArea = ({ params, userId }: ContentAreaProps) => {
  return (
    <>
      <Suspense fallback={<LoadingTagsSwiper />}>
        <TagsSwiper userId={userId} />
      </Suspense>
      <div className='flex gap-4'>
        <Suspense fallback={<LoadingCodes />}>
          <Codes userId={userId} params={params} showCode={false} />
        </Suspense>
        <SelectedCodeDisplay />
        <CodeFormModal />
      </div>
    </>
  );
};
