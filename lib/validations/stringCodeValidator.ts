import { z } from "zod";

export const validateStringCode = <T>(value: T) => {
  const schema = z.string();
  let errors = "";

  if (!schema.min(6).safeParse(value).success) {
    errors = "Code has to be a six-digit value";
  }
  return errors;
};
