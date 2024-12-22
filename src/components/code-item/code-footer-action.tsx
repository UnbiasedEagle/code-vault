import { toast } from 'sonner';
import { Button } from '../ui/button';
import { markCodeArchived } from '@/actions/update-code';
import { CodeWithTags } from '@/types';
import { startTransition, useState } from 'react';
import { useShowCode } from '@/stores/use-show-code';
import { useEditCode } from '@/stores/use-edit-code';
import { Archive, Edit, RotateCcw, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeUpdateFooterActionProps {
  code: CodeWithTags;
}

export const CodeUpdateFooterAction = ({
  code,
}: CodeUpdateFooterActionProps) => {
  const [pendingDelete, setPendingDelete] = useState(false);
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  const handleCodeDelete = async () => {
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
      <Button
        onClick={() => {
          setShowCompleteCode(null);
          setSelectedCode(code);
        }}
        className='bg-background px-0 hover:bg-background'
        variant='ghost'
      >
        <Edit size={20} className='text-blue-500 p-0 text-base' />
      </Button>
      <Button
        onClick={() => {
          setPendingDelete(true);
          startTransition(() => {
            handleCodeDelete();
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
    </div>
  );
};

export const ArchiveCodeFooterAction = ({
  code,
}: CodeUpdateFooterActionProps) => {
  const [pendingDelete, setPendingDelete] = useState(false);
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  const handleCodeDelete = async () => {
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
      <Button
        onClick={() => {
          setShowCompleteCode(null);
          setSelectedCode(code);
        }}
        className='bg-background px-0 hover:bg-background'
        variant='ghost'
      >
        <RotateCcw size={20} className='text-blue-500 p-0 text-base' />
      </Button>
      <Button
        onClick={() => {
          setPendingDelete(true);
          startTransition(() => {
            handleCodeDelete();
          });
        }}
        className={cn(
          'bg-background px-0 hover:bg-background',
          pendingDelete && 'cursor-not-allowed'
        )}
        variant='ghost'
      >
        <Trash size={20} className='text-red-500 p-0' />
      </Button>
    </div>
  );
};
