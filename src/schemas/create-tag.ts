import { z } from 'zod';

export const CreateTagSchema = z.object({
  name: z.string().min(1, {
    message: 'Tag name is required',
  }),
});
