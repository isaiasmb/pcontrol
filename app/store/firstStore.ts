import { create } from 'zustand';

type FirstStoreState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useFirstStore = create<FirstStoreState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}));
