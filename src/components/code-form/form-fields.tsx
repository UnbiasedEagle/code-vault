'use client';

import { SimpleTag } from '@/types';
import { Languages } from '@/lib/utils';
import { FaCode, FaHashtag, FaFileAlt } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa6';
import { IoMdPricetags } from 'react-icons/io';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { MultiSelect } from '../ui/multi-select';
import Editor from '@monaco-editor/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { CodeFormSchema } from '@/schemas/code-form';

type CodeForm = z.infer<typeof CodeFormSchema>;

interface FormFieldsProps {
  form: UseFormReturn<CodeForm>;
  tags: SimpleTag[];
  formKey: number;
}

export const FormFields = ({ form, tags, formKey }: FormFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
          <FormItem>
            <div className='flex items-center space-x-2'>
              <FormLabel htmlFor='title'>
                <FaHashtag size={16} className='mt-1' />
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder='New Title...' autoFocus />
              </FormControl>
            </div>
            <FormMessage className='ml-6' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='tags'
        render={({ field }) => (
          <FormItem>
            <div className='flex items-center space-x-2'>
              <FormLabel htmlFor='tags'>
                <IoMdPricetags className='mt-1' size={16} />
              </FormLabel>
              <FormControl>
                <MultiSelect
                  key={`tags-${formKey}`}
                  placeholder='Select Tags...'
                  defaultValue={field.value}
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
            </div>
            <FormMessage className='ml-6' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='description'
        render={({ field }) => (
          <FormItem>
            <div className='flex items-start space-x-2'>
              <FormLabel htmlFor='description'>
                <FaFileAlt className='mt-1' size={16} />
              </FormLabel>
              <FormControl>
                <Textarea {...field} placeholder='New Description...' />
              </FormControl>
            </div>
            <FormMessage className='ml-6' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='language'
        render={({ field }) => (
          <FormItem>
            <div className='flex items-center space-x-2'>
              <FormLabel htmlFor='language'>
                <FaCode className='mt-1' size={16} />
              </FormLabel>
              <Select
                key={`language-${formKey}`}
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select Language...' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Languages.map((lang) => (
                    <SelectItem key={lang.label} value={lang.label}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <FormMessage className='ml-6' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='code'
        render={({ field }) => (
          <FormItem>
            <div className='flex items-start space-x-2'>
              <FormLabel htmlFor='code'>
                <FaFileCode className='mt-1' size={16} />
              </FormLabel>
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
            </div>
            <FormMessage className='ml-6' />
          </FormItem>
        )}
      />
    </>
  );
};
