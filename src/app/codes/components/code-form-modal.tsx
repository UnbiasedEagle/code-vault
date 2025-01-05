'use client';

import { CodeForm } from '@/components/code-form';
import { useEditCode } from '@/stores/use-edit-code';
import { useCreateCode } from '@/stores/use-create-code';
import { useShowCode } from '@/stores/use-show-code';

export const CodeFormModal = () => {
  const completeCode = useShowCode();
  const editCode = useEditCode();
  const createCode = useCreateCode();

  if (!(editCode.selectedCode || createCode.showNewCode)) {
    return null;
  }

  return (
    <div className='fixed inset-0 lg:static lg:w-full'>
      <div
        onClick={() => {
          completeCode.setSelectedCode(null);
          editCode.setSelectedCode(null);
          createCode.setShowNewCode(false);
        }}
        className='absolute inset-0 bg-black/90 lg:hidden'
      ></div>
      <div className='absolute w-[90%] left-1/2 -translate-x-1/2 lg:w-full top-1/2 -translate-y-1/2 lg:z-0 lg:static lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0'>
        <CodeForm />
      </div>
    </div>
  );
};
