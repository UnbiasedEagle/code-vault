import { z } from 'zod';

export const CodeFormSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  description: z.string().min(1, {
    message: 'Description is required',
  }),
  code: z.string().min(1, {
    message: 'Code snippet is required',
  }),
  tags: z.array(z.string()).min(1, {
    message: 'At least one tag is required',
  }),
  language: z.string().min(1, {
    message: 'Programming language is required',
  }),
});
