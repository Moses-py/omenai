import { create } from "zustand";

type ActionStoreTypes = {
  recoveryModal: {
    type: "individual" | "gallery" | string;
    value: boolean;
  };
  updateRecoveryModal: (label: string) => void;
};
export const actionStore = create<ActionStoreTypes>((set, get) => ({
  recoveryModal: {
    type: "",
    value: false,
  },
  updateRecoveryModal: (label: string) => {
    const modalState = get().recoveryModal;
    set({ recoveryModal: { type: label, value: !modalState.value } });
  },
}));
