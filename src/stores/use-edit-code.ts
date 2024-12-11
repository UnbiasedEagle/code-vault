import { ICodeItem } from '@/types';
import { create } from 'zustand';

interface EditCodeState {
  selectedCode: ICodeItem | null;
  setSelectedCode: (selectedCode: ICodeItem | null) => void;
}

export const useEditCode = create<EditCodeState>((set) => ({
  selectedCode: null,
  setSelectedCode: (selectedCode: ICodeItem | null) => set({ selectedCode }),
}));
