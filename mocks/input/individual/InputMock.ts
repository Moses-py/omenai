export const inputProperties: Omit<InputProps, "prev" | "onClickPrev">[] = [
  {
    label: "What's your full name please?",
    type: "text",
    placeholder: "Jack Bauear",
    labelText: "name",
    id: 0,
  },
  {
    label: "What email can we reach you on?",
    type: "text",
    placeholder: "Louvre museum",
    labelText: "email",
    id: 1,
  },
  {
    label: "Setup a password to secure your account",
    type: "password",
    placeholder: "********",
    labelText: "password",
    id: 2,
  },
  {
    label: "Just to be sure, please confirm your password",
    type: "password",
    placeholder: "********",
    labelText: "confirmPassword",
    id: 3,
  },
];

export const emails = ["dantereus1@gmail.com"];
