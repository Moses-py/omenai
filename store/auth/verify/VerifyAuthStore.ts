import { create } from "zustand";

type VerifyStoreTypes = {
  isLoading: boolean;
  setIsloading: () => void;
};
export const verifyAuthStore = create<VerifyStoreTypes>((set, get) => ({
  isLoading: false,
  setIsloading: () => {
    const loadingState = get().isLoading;

    set({ isLoading: !loadingState });
  },
}));
