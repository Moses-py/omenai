import { create } from "zustand";

type ActionStoreTypes = {
  recoveryModal: {
    type: "individual" | "gallery";
    value: boolean;
  };
  updateRecoveryModal: (label: RouteIdentifier) => void;
};

export const actionStore = create<ActionStoreTypes>((set, get) => ({
  recoveryModal: {
    type: "individual",
    value: false,
  },
  updateRecoveryModal: (label: RouteIdentifier) => {
    const modalState = get().recoveryModal;
    set({ recoveryModal: { type: label, value: !modalState.value } });
  },
}));
