'use client';

import { toast } from 'sonner';
import { Button } from '../ui/button';
import { markCodeArchived, restoreArchivedCode } from '@/actions/update-code';
import { CodeWithTags } from '@/types';
import { startTransition, useState } from 'react';
import { useShowCode } from '@/stores/use-show-code';
import { useEditCode } from '@/stores/use-edit-code';
import { Archive, Edit, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DeleteCodeDialog } from './delete-code-dialog';
import { useCreateCode } from '@/stores/use-create-code';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface CodeUpdateFooterActionProps {
  code: CodeWithTags;
}

export const CodeUpdateFooterAction = ({
  code,
}: CodeUpdateFooterActionProps) => {
  const [pendingDelete, setPendingDelete] = useState(false);
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  const handleCodeArchive = async () => {
    try {
      const response = await markCodeArchived(null, code.id);
      if (response.success) {
        toast.success(response.message);
      } else if (response.error) {
        toast.error(response.error);
      }
    } catch {
      toast.error('Failed to move code to archive');
    } finally {
      setPendingDelete(false);
    }
  };

  return (
    <div className='flex items-center gap-4'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                setShowNewCode(false);
                setShowCompleteCode(null);
                setSelectedCode(code);
              }}
              className='bg-background px-0 hover:bg-background'
              variant='ghost'
            >
              <Edit size={20} className='text-blue-500 p-0 text-base' />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side='bottom'
            className='bg-gray-800 text-white p-2 rounded-md shadow-lg'
          >
            <p className='text-sm font-medium'>Edit Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                setShowNewCode(false);
                setShowCompleteCode(null);
                setSelectedCode(null);

                setPendingDelete(true);

                startTransition(() => {
                  handleCodeArchive();
                });
              }}
              className={cn(
                'bg-background px-0 hover:bg-background',
                pendingDelete && 'cursor-not-allowed'
              )}
              variant='ghost'
            >
              <Archive size={20} className='text-primary p-0' />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side='bottom'
            className='bg-gray-800 text-white p-2 rounded-md shadow-lg'
          >
            <p className='text-sm font-medium'>Archive Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export const ArchiveCodeFooterAction = ({
  code,
}: CodeUpdateFooterActionProps) => {
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  const [pendingRestore, setPendingRestore] = useState(false);

  const handleCodeRestore = async () => {
    try {
      const response = await restoreArchivedCode(null, code.id);
      if (response.success) {
        toast.success(response.message);
      } else if (response.error) {
        toast.error(response.error);
      }
    } catch {
      toast.error('Failed to restore code from archive');
    } finally {
      setPendingRestore(false);
    }
  };
  return (
    <div className='flex items-center gap-4'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                setShowNewCode(false);
                setShowCompleteCode(null);
                setSelectedCode(null);
                setPendingRestore(true);
                startTransition(() => {
                  handleCodeRestore();
                });
              }}
              className={cn(
                'bg-background px-0 hover:bg-background',
                pendingRestore && 'cursor-not-allowed'
              )}
              variant='ghost'
            >
              <RotateCcw size={20} className='text-blue-500 p-0 text-base' />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side='bottom'
            className='bg-gray-800 text-white p-2 rounded-md shadow-lg'
          >
            <p className='text-sm font-medium'>Restore Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DeleteCodeDialog codeId={code.id} />
    </div>
  );
};
