'use client';

import { Card, CardContent } from '../ui/card';
import { Form } from '../ui/form';
import { Button } from '../ui/button';
import { SimpleTag } from '@/types';
import { FormHeader } from './form-header';
import { FormFields } from './form-fields';
import { useCodeForm } from '../../hooks/use-code-form';

interface CodeFormProps {
  tags: SimpleTag[];
}

export const CodeForm = ({ tags }: CodeFormProps) => {
  const { form, formKey, pending, isEditing, onSubmit, onClose } =
    useCodeForm();

  return (
    <Card className='h-[660px] overflow-y-auto'>
      <CardContent className='p-4'>
        <FormHeader isEditing={isEditing} onClose={onClose} />
        <Form {...form}>
          <form onSubmit={onSubmit} className='space-y-8'>
            <FormFields form={form} tags={tags} formKey={formKey} />
            <div className='flex justify-end'>
              <Button disabled={pending} type='submit'>
                {isEditing ? 'Update' : 'Save'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
