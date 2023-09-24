import { create } from "zustand";

type IndividualAuthStoreTypes = {
  currentSignupFormIndex: number;
  incrementCurrentSignupFormIndex: () => void;
  decrementCurrentSignupFormIndex: () => void;
  preferences: string[];
  updatePreference: (value: string) => void;
  individualSignupData: IndividualSignupData;
  updateSignUpData: (label: string, value: string) => void;
};

export const useIndividualAuthStore = create<IndividualAuthStoreTypes>(
  (set, get) => ({
    // FUNCTION TO TRACK FORM INPUT INDEX
    // This value keeps track of the current form input index value.
    // The index value is crucial for determining which form fields
    // are mounted on the DOM and displyed to the user.
    currentSignupFormIndex: 0,

    // FUNCTION TO INCREMENT FORM INDEX VALUE
    // This function basically increases the value for current form input index value,
    // depending on the current index value, a new form input field is
    // mounted on the DOM and displayed to the user.
    incrementCurrentSignupFormIndex: () => {
      const index = get().currentSignupFormIndex;
      set({ currentSignupFormIndex: index + 1 });
    },

    // FUNCTION TO DECREMENT FORM INDEX VALUE
    // This function basically decreases the value for current form input index,
    // depending on the current index value, a new form input field is mounted on the DOM and displayed to the user.
    decrementCurrentSignupFormIndex: () => {
      const index = get().currentSignupFormIndex;
      set({ currentSignupFormIndex: index - 1 });
    },

    // USER PREFERENCES DEFUALT ARRAY VALUE
    preferences: [],

    // FUNCTION TO UPDATE USER PREFERENCE ARRAY
    // Please note, the preferences are stored separately from the other input
    // values in state but are required and imported when submitting the form data to the backend.
    updatePreference: (value: string) => {
      const pref = new Set(get().preferences);

      pref.has(value) ? pref.delete(value) : pref.size < 3 && pref.add(value);

      set({ preferences: Array.from(pref) });
    },

    // UPDATE SIGNUP FORM DATA DEFAULT VALUES
    // Don't forget to clear this state value after form submission.
    individualSignupData: {
      name: "",
      email: "",
      password: "",
      preferences: [],
    },

    // UPDATE SIGNUP FORM DATA ON INPUT CHANGE
    // please note: The form fields are mounted on the DOM separately
    // hence why we have an update function to update the object fields individually.
    updateSignUpData: (label: string, value: string) => {
      const data: Record<string, string | string[]> =
        get().individualSignupData;

      if (label in data) {
        const updatedData = { ...data, [label]: value };

        set({ individualSignupData: updatedData as IndividualSignupData });
      }
    },
  })
);
