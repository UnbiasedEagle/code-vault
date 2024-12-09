import { create } from 'zustand';

interface EditCodeState {
  showEditCode: boolean;
  setShowEditCode: (showEditCode: boolean) => void;
}

export const useEditCode = create<EditCodeState>((set) => ({
  showEditCode: false,
  setShowEditCode: (showEditCode: boolean) => set({ showEditCode }),
}));
