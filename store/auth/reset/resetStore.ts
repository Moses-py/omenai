import { create } from "zustand";

type ResetStoreTypes = {
  isLoading: boolean;
  setIsloading: () => void;
  passwordData: Password;
  updatePassword: (label: string, value: string) => void;
};

type Password = {
  password: string;
  confirmPassword: string;
};
export const resetStore = create<ResetStoreTypes>((set, get) => ({
  isLoading: false,
  setIsloading: () => {
    const loadingState = get().isLoading;

    set({ isLoading: !loadingState });
  },

  passwordData: {
    password: "",
    confirmPassword: "",
  },

  updatePassword: (label: string, value: string) => {
    const data: Record<string, string | string[]> = get().passwordData;

    if (label in data) {
      const updatedData = { ...data, [label]: value };

      set({
        passwordData: updatedData as Password,
      });
    }
  },
}));
