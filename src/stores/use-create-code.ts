import { create } from 'zustand';

interface CreateCode {
  showNewCode: boolean | null;
  setShowNewCode: (show: boolean) => void;
}

export const useCreateCode = create<CreateCode>((set) => ({
  showNewCode: false,
  setShowNewCode: (show: boolean) => set({ showNewCode: show }),
}));
