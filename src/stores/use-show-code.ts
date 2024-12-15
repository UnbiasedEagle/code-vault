import { CodeWithTags } from '@/types';
import { create } from 'zustand';

interface ShowCodeState {
  selectedCode: CodeWithTags | null;
  setSelectedCode: (code: CodeWithTags | null) => void;
}

export const useShowCode = create<ShowCodeState>((set) => ({
  selectedCode: null,
  setSelectedCode: (code: CodeWithTags | null) => set({ selectedCode: code }),
}));
