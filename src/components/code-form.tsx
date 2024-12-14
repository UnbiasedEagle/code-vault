'use client';

import { useEditCode } from '@/stores/use-edit-code';
import { Card, CardContent } from './ui/card';
import { useEffect } from 'react';
import { FaHashtag } from 'react-icons/fa';
import { Input } from './ui/input';
import { FaFileAlt } from 'react-icons/fa';
import { Textarea } from './ui/textarea';
import { IoMdPricetags } from 'react-icons/io';
import { MultiSelect } from './ui/multi-select';
import { Cat, Dog, Fish, Rabbit, Turtle } from 'lucide-react';
import { Button } from './ui/button';
import { AiOutlineClose } from 'react-icons/ai';
import { useCreateCode } from '@/stores/use-create-code';
import { useShowCode } from '@/stores/use-show-code';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CodeFormSchema } from '@/schemas/code-form';
import { z } from 'zod';

const frameworksList = [
  { value: 'react', label: 'React', icon: Turtle },
  { value: 'angular', label: 'Angular', icon: Cat },
  { value: 'vue', label: 'Vue', icon: Dog },
  { value: 'svelte', label: 'Svelte', icon: Rabbit },
  { value: 'ember', label: 'Ember', icon: Fish },
];

type CodeForm = z.infer<typeof CodeFormSchema>;

export const CodeForm = () => {
  const editCode = useEditCode();
  const showNewCode = useCreateCode();
  const setSelectedCode = useShowCode((state) => state.setSelectedCode);

  const form = useForm<CodeForm>({
    resolver: zodResolver(CodeFormSchema),
    defaultValues: {
      title: '',
      tags: [],
      description: '',
      language: '',
      code: '',
    },
  });

  useEffect(() => {
    if (editCode.selectedCode) {
      form.reset({
        title: editCode.selectedCode.title,
        tags: editCode.selectedCode.tags,
        description: editCode.selectedCode.description,
        language: editCode.selectedCode.language,
        code: editCode.selectedCode.code,
      });
    } else {
      form.reset({
        title: '',
        tags: [],
        description: '',
        language: '',
        code: '',
      });
    }
  }, [editCode.selectedCode, showNewCode.showNewCode, form]);

  const onSubmit = (data: CodeForm) => {
    console.log(data);
  };

  return (
    <Card className='h-[660px] overflow-y-auto'>
      <CardContent className='p-4'>
        <div className='flex justify-end mb-4'>
          <Button
            onClick={() => {
              setSelectedCode(null);
              editCode.setSelectedCode(null);
              showNewCode.setShowNewCode(false);
            }}
            variant='ghost'
          >
            <AiOutlineClose />
          </Button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='flex items-center space-x-2'>
                  <FormLabel htmlFor='title'>
                    <FaHashtag size={16} className='mt-1' />
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='New Title...' autoFocus />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tags'
              render={({ field }) => (
                <FormItem className='flex items-center space-x-2'>
                  <FormLabel htmlFor='tags'>
                    <IoMdPricetags className='mt-1' size={16} />
                  </FormLabel>
                  <FormControl>
                    <MultiSelect
                      placeholder='Select Tags...'
                      options={frameworksList}
                      onValueChange={() => {}}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem className='flex items-start space-x-2'>
                  <FormLabel htmlFor='description'>
                    <FaFileAlt className='mt-3' size={16} />
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder='New Description...' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-end'>
              <Button type='submit'>Save</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
