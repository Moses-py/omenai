export const inputProperties: Omit<InputProps, "prev" | "onClickPrev">[] = [
  {
    label: "What's the gallery name?",
    type: "text",
    placeholder: "Louvre museum",
    labelText: "name",
  },
  {
    label: "What's the gallery location?",
    type: "text",
    placeholder: "79, example street, example, Neverland",
    labelText: "location",
  },

  {
    label: "Can you give a description of the gallery?",
    type: "text",
    placeholder: "lorem ipsum dolor amit dans emit...",
    labelText: "description",
  },
  {
    label: "What's the admin name? (Account controller)",
    type: "text",
    placeholder: "Jack bauer",
    labelText: "admin",
  },
  {
    label: "What email can we reach you on?",
    type: "email",
    placeholder: "Louvre museum",
    labelText: "email",
  },
  {
    label: "Setup a password to secure your account",
    type: "password",
    placeholder: "********",
    labelText: "password",
  },
  {
    label: "Just to be sure, please confirm your password",
    type: "password",
    placeholder: "********",
    labelText: "confirmPassword",
  },
];
