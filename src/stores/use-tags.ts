import { SimpleTag } from '@/types';
import { create } from 'zustand';

interface TagsState {
  loadingTags: boolean;
  tags: SimpleTag[];
  setTags: (tags: SimpleTag[]) => void;
}

export const useTags = create<TagsState>((set) => ({
  loadingTags: true,
  tags: [],
  setTags: (tags: SimpleTag[]) => set({ tags, loadingTags: false }),
}));
