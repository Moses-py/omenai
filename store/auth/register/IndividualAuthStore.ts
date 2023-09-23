import { create } from "zustand";

type IndividualAuthStoreTypes = {
  currentSignupFormIndex: number;
  incrementCurrentSignupFormIndex: () => void;
  decrementCurrentSignupFormIndex: () => void;
};
export const useIndividualAuthStore = create<IndividualAuthStoreTypes>(
  (set, get) => ({
    currentSignupFormIndex: 0,

    incrementCurrentSignupFormIndex: () => {
      const index = get().currentSignupFormIndex;
      set({ currentSignupFormIndex: index + 1 });
    },

    decrementCurrentSignupFormIndex: () => {
      const index = get().currentSignupFormIndex;
      set({ currentSignupFormIndex: index - 1 });
    },
  })
);
