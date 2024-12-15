'use client';

import { useEditCode } from '@/stores/use-edit-code';
import { Card, CardContent } from './ui/card';
import { useEffect, useState } from 'react';
import { FaCode, FaHashtag } from 'react-icons/fa';
import { Input } from './ui/input';
import { FaFileAlt } from 'react-icons/fa';
import { Textarea } from './ui/textarea';
import { IoMdPricetags } from 'react-icons/io';
import { MultiSelect } from './ui/multi-select';
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
import Editor from '@monaco-editor/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { SimpleTag } from '@/types';
import { createCode } from '@/actions/create-code';
import { toast } from 'sonner';
import { Languages } from '@/lib/utils';

type CodeForm = z.infer<typeof CodeFormSchema>;

interface CodeFormProps {
  tags: SimpleTag[];
}

export const CodeForm = ({ tags }: CodeFormProps) => {
  const [pending, setPending] = useState(false);

  const editCode = useEditCode();
  const showNewCode = useCreateCode();
  const setSelectedCode = useShowCode((state) => state.setSelectedCode);

  const form = useForm<CodeForm>({
    resolver: zodResolver(CodeFormSchema),
    defaultValues: {
      title: '',
      description: '',
      language: '',
      code: '',
      tags: [],
    },
  });

  useEffect(() => {
    if (editCode.selectedCode) {
      form.reset({
        title: editCode.selectedCode.title,
        description: editCode.selectedCode.description,
        language: editCode.selectedCode.language,
        code: editCode.selectedCode.code,
        tags: editCode.selectedCode.tags.map((tag) => tag.id),
      });
    } else {
      form.reset({
        title: '',
        description: '',
        language: '',
        code: '',
        tags: [],
      });
    }
  }, [editCode.selectedCode, showNewCode.showNewCode, form]);

  const onSubmit = async (data: CodeForm) => {
    try {
      setPending(true);
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('code', data.code);
      formData.append('language', data.language);
      formData.append('tags', JSON.stringify(data.tags));
      if (editCode.selectedCode) {
        // const result = await updateCode(editCode.selectedCode.id, formData);
        // if (result.success) {
        //   toast.success(result.message);
        //   setSelectedCode(null);
        //   editCode.setSelectedCode(null);
        // } else {
        //   toast.error(result.error);
        // }
      } else {
        const result = await createCode(null, formData);
        if (result.success) {
          toast.success(result.message);
          setSelectedCode(null);
          editCode.setSelectedCode(null);
          showNewCode.setShowNewCode(false);
        } else {
          toast.error(result.error);
        }
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setPending(false);
    }
  };

  return (
    <Card className='h-[660px] overflow-y-auto'>
      <CardContent className='p-4'>
        <div className='border-b mb-6'>
          <div className='flex items-start justify-between py-4'>
            <div className='space-y-1'>
              <h2 className='text-xl font-semibold tracking-tight'>
                {editCode.selectedCode ? 'Edit Code' : 'Add New Code'}
              </h2>
              <p className='text-sm text-muted-foreground'>
                {editCode.selectedCode
                  ? 'Update your code snippet details'
                  : 'Add a new code snippet to your collection'}
              </p>
            </div>
            <Button
              onClick={() => {
                setSelectedCode(null);
                editCode.setSelectedCode(null);
                showNewCode.setShowNewCode(false);
              }}
              variant='ghost'
              className='hover:bg-secondary'
            >
              <AiOutlineClose className='h-4 w-4' />
            </Button>
          </div>
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
              render={() => (
                <FormItem className='flex items-center space-x-2'>
                  <FormLabel htmlFor='tags'>
                    <IoMdPricetags className='mt-1' size={16} />
                  </FormLabel>
                  <FormControl>
                    <MultiSelect
                      placeholder='Select Tags...'
                      options={tags.map((tag) => ({
                        label: tag.name,
                        value: tag.id,
                      }))}
                      maxCount={3}
                      onValueChange={(values) => {
                        form.setValue('tags', values);
                      }}
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
            <FormField
              control={form.control}
              name='language'
              render={({ field }) => (
                <FormItem className='flex items-center space-x-2'>
                  <FormLabel htmlFor='language'>
                    <FaCode className='mt-1' size={16} />
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Language...' />
                      </SelectTrigger>
                      <SelectContent>
                        {Languages.map((lang) => (
                          <SelectItem key={lang.label} value={lang.label}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem className='flex items-start space-x-2'>
                  <FormControl>
                    <Editor
                      {...field}
                      height='400px'
                      language={form.watch('language')}
                      theme='vs-dark'
                      options={{
                        automaticLayout: true,
                        fontSize: 14,
                        wordWrap: 'on',
                        wrappingIndent: 'indent',
                        wrappingStrategy: 'advanced',
                        minimap: {
                          enabled: false,
                        },
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='flex justify-end'>
              <Button disabled={pending} type='submit'>
                {editCode.selectedCode ? 'Update' : 'Save'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
