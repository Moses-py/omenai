import { create } from "zustand";

type IndividualLoginStoreTypes = {
  isLoading: boolean;
  setIsloading: () => void;
};

export const individualLoginStore = create<IndividualLoginStoreTypes>(
  (set, get) => ({
    isLoading: false,
    setIsloading: () => {
      const loadingState = get().isLoading;

      set({ isLoading: !loadingState });
    },
  })
);
