import { Code, Tag } from '@prisma/client';

export type SimpleTag = Pick<Tag, 'id' | 'name'>;

export type CodeWithTags = Code & {
  tags: SimpleTag[];
};

export type CodeFilter = 'all' | 'favorites' | 'archived';
