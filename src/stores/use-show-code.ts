import { Code } from '@prisma/client';
import { create } from 'zustand';

interface ShowCodeState {
  selectedCode: Code | null;
  setSelectedCode: (code: Code | null) => void;
}

export const useShowCode = create<ShowCodeState>((set) => ({
  selectedCode: null,
  setSelectedCode: (code: Code | null) => set({ selectedCode: code }),
}));
