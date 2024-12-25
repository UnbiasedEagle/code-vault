import { deleteTag } from '@/actions/delete-tag';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCreateCode } from '@/stores/use-create-code';
import { useEditCode } from '@/stores/use-edit-code';
import { useShowCode } from '@/stores/use-show-code';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';

interface DeleteTagDialogProps {
  tagId: string;
}

export const DeleteTagDialog = ({ tagId }: DeleteTagDialogProps) => {
  const setShowNewCode = useCreateCode((state) => state.setShowNewCode);
  const setShowCompleteCode = useShowCode((state) => state.setSelectedCode);
  const setSelectedCode = useEditCode((state) => state.setSelectedCode);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteTag = async () => {
    try {
      setLoading(true);
      const response = await deleteTag(null, tagId);
      if (response.error) {
        toast.error(response.error);
        return;
      }
      toast.success(response.message);
      setShowNewCode(false);
      setShowCompleteCode(null);
      setSelectedCode(null);
      setOpen(false);
    } catch {
      toast.error('An error occurred while deleting the tag!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='destructive' size='icon' className='h-8 w-8'>
          <Trash size={20} />
          <span className='sr-only'>Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-foreground text-base'>
            Confirm Tag Deletion
          </DialogTitle>
        </DialogHeader>
        <p className='text-muted-foreground text-sm'>
          Are you sure you want to delete this tag? This action cannot be
          undone.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Cancel</Button>
          </DialogClose>
          <Button
            variant='destructive'
            onClick={handleDeleteTag}
            disabled={loading}
          >
            {loading ? (
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
