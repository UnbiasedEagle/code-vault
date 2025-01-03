'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useCreateCode } from '@/stores/use-create-code';
import { useEditCode } from '@/stores/use-edit-code';
import { useShowCode } from '@/stores/use-show-code';
import { Plus } from 'lucide-react';

export const CreateCodeButton = () => {
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => {
              setSelectedCode(null);
              setShowCompleteCode(null);
              setShowNewCode(true);
            }}
            variant='default'
            size='sm'
            className='h-9 flex items-center gap-1'
          >
            <Plus className='h-4 w-4' />
            <span className='hidden md:block'>Code</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side='bottom'
          className='bg-gray-800 text-white p-2 rounded-md shadow-lg'
        >
          <p className='text-sm font-medium'>Create Code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
