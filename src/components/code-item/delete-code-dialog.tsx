'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';
import { deleteCode } from '@/actions/delete-code';
import { FaSpinner } from 'react-icons/fa';
import { useCreateCode } from '@/stores/use-create-code';
import { useShowCode } from '@/stores/use-show-code';
import { useEditCode } from '@/stores/use-edit-code';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface DeleteCodeDialogProps {
  codeId: string;
}

export const DeleteCodeDialog = ({ codeId }: DeleteCodeDialogProps) => {
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  const [pendingDelete, setPendingDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    setPendingDelete(true);
    try {
      const response = await deleteCode(null, codeId);
      if (response.success) {
        toast.success(response.message);
        setIsOpen(false);
        setShowNewCode(false);
        setShowCompleteCode(null);
        setSelectedCode(null);
      } else if (response.error) {
        toast.error(response.error);
      }
    } catch {
      toast.error('Failed to delete code');
    } finally {
      setPendingDelete(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                className='bg-background px-0 hover:bg-background'
                variant='ghost'
              >
                <Trash size={20} className='text-red-500 p-0' />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent
            side='bottom'
            className='bg-gray-800 text-white p-2 rounded-md shadow-lg'
          >
            <p className='text-sm font-medium'>Delete Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-foreground text-base'>
            Confirm Deletion
          </DialogTitle>
        </DialogHeader>
        <p className='text-muted-foreground text-sm'>
          Are you sure you want to delete this code item? This action cannot be
          undone.
        </p>
        <DialogFooter>
          <Button variant='secondary' onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            variant='destructive'
            onClick={handleDelete}
            disabled={pendingDelete}
          >
            {pendingDelete ? (
              <>
                <FaSpinner size={16} className='animate-spin mr-2' />
                <span>Deleting</span>
              </>
            ) : (
              'Delete'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
