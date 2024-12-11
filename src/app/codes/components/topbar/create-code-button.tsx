'use client';

import { Button } from '@/components/ui/button';
import { useCreateCode } from '@/stores/use-create-code';
import { useEditCode } from '@/stores/use-edit-code';
import { Plus } from 'lucide-react';

export const CreateCodeButton = () => {
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);

  return (
    <Button
      onClick={() => {
        setSelectedCode(null);
        setShowNewCode(true);
      }}
      variant='default'
      size='sm'
      className='h-9 flex items-center gap-1'
    >
      <Plus className='h-4 w-4' />
      <span className='hidden md:block'>Code</span>
    </Button>
  );
};
