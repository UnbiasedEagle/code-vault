'use client';

import { createTag } from '@/actions/create-tag';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormData = z.infer<typeof CreateTagSchema>;

export const CreateTagBtn = () => {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(CreateTagSchema),
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsPending(true);
      const formData = new FormData();
      formData.append('name', data.name);
      const result = await createTag(null, formData);
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
      <Button onClick={() => setOpen(true)} className='flex items-center gap-1'>
        <Plus className='h-5 w-5' />
        Tag
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Tag</DialogTitle>
          <DialogDescription>
            Add a new tag to organize your code snippets.
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
            <DialogFooter className='mt-6'>
              <Button
                type='button'
                variant='outline'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button disabled={isPending} type='submit'>
                Create Tag
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
