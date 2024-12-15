import { CodeWithTags } from '@/types';
import { create } from 'zustand';

interface EditCodeState {
  selectedCode: CodeWithTags | null;
  setSelectedCode: (selectedCode: CodeWithTags | null) => void;
}

export const useEditCode = create<EditCodeState>((set) => ({
  selectedCode: null,
  setSelectedCode: (selectedCode: CodeWithTags | null) => set({ selectedCode }),
}));
