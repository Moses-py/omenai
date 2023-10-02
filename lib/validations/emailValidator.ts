import { z } from "zod";

export const validateEmail = <T>(value: T) => {
  const schema = z.string();
  let errors = [];

  if (!schema.email().safeParse(value).success) {
    errors.push(
      `Your email address (${value}) doesn't match the required format. If you're unsure, please use this format: example@example.com.`
    );
  }
  return errors;
};
