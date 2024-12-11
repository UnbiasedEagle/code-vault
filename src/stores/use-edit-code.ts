import { Code } from '@prisma/client';
import { create } from 'zustand';

interface EditCodeState {
  selectedCode: Code | null;
  setSelectedCode: (selectedCode: Code | null) => void;
}

export const useEditCode = create<EditCodeState>((set) => ({
  selectedCode: null,
  setSelectedCode: (selectedCode: Code | null) => set({ selectedCode }),
}));
