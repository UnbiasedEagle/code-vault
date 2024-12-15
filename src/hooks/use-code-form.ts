import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CodeFormSchema } from '@/schemas/code-form';
import { useEditCode } from '@/stores/use-edit-code';
import { useCreateCode } from '@/stores/use-create-code';
import { useShowCode } from '@/stores/use-show-code';
import { toast } from 'sonner';
import { createCode } from '@/actions/create-code';

type CodeForm = z.infer<typeof CodeFormSchema>;

export const useCodeForm = () => {
  const [pending, setPending] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const editCode = useEditCode();
  const newCode = useCreateCode();
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
      form.setValue('title', editCode.selectedCode.title);
      form.setValue('description', editCode.selectedCode.description);
      form.setValue('language', editCode.selectedCode.language);
      form.setValue('code', editCode.selectedCode.code);
      form.setValue(
        'tags',
        editCode.selectedCode.tags.map((tag) => tag.id)
      );
      setFormKey((prev) => prev + 1);
    } else if (newCode.showNewCode) {
      form.setValue('title', '');
      form.setValue('description', '');
      form.setValue('language', '');
      form.setValue('code', '');
      form.setValue('tags', []);
      setFormKey((prev) => prev + 1);
    }
  }, [editCode.selectedCode, newCode.showNewCode, form]);

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
        // TODO: Implement update code
      } else {
        const result = await createCode(null, formData);
        if (result.success) {
          toast.success(result.message);
          setSelectedCode(null);
          editCode.setSelectedCode(null);
          newCode.setShowNewCode(false);
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

  const onClose = () => {
    setSelectedCode(null);
    editCode.setSelectedCode(null);
    newCode.setShowNewCode(false);
  };

  return {
    form,
    formKey,
    pending,
    isEditing: !!editCode.selectedCode,
    onSubmit: form.handleSubmit(onSubmit),
    onClose,
  };
};
