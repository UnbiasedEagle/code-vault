import { create } from 'zustand';

interface ICreateCode {
  showNewCode: boolean | null;
  setShowNewCode: (show: boolean) => void;
}

export const useCreateCode = create<ICreateCode>((set) => ({
  showNewCode: false,
  setShowNewCode: (show: boolean) => set({ showNewCode: show }),
}));
