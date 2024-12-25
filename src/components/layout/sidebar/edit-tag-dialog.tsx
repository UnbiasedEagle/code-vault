'use client';

import { updateTag } from '@/actions/update-tag';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CreateTagSchema } from '@/schemas/create-tag';
import { SimpleTag } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';
import { z } from 'zod';

type FormData = z.infer<typeof CreateTagSchema>;

interface EditTagDialogProps {
  tag: SimpleTag;
}

export const EditTagDialog = ({ tag }: EditTagDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(CreateTagSchema),
    defaultValues: {
      name: tag.name,
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsPending(true);
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('tagId', tag.id);
      const result = await updateTag(null, formData);
      if (result.success) {
        toast.success(result.message);
        setOpen(false);
        form.reset();
      } else {
        toast.error(result.error);
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={() => setOpen(true)}
        variant='secondary'
        size='icon'
        className='h-8 w-8'
      >
        <Edit className='h-4 w-4' />
        <span className='sr-only'>Edit</span>
      </Button>
      <DialogContent className='w-[90%] mx-auto rounded-lg'>
        <DialogHeader>
          <DialogTitle>Update Tag Name</DialogTitle>
          <DialogDescription>
            Modify the tag name to better categorize your code snippets.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Enter tag name...' {...field} />
                  </FormControl>
                  <FormMessage className='text-sm text-red-500' />
                </FormItem>
              )}
            />
            <DialogFooter className='flex flex-row justify-end gap-4 mt-6'>
              <Button
                type='button'
                variant='outline'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button disabled={isPending} type='submit'>
                {isPending ? (
                  <>
                    <FaSpinner size={16} className='animate-spin mr-2' />
                    <span>Updating</span>
                  </>
                ) : (
                  'Update'
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
