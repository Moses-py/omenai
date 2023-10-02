import { z } from "zod";

export const validatePassword = <T>(value: T) => {
  const schema = z.string();
  let errors = [];

  if (!schema.min(8).max(16).safeParse(value).success) {
    errors.push("Your password should be between 8 and 16 characters");
  }
  if (
    !schema.regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/gm).safeParse(value)
      .success
  ) {
    errors.push(
      "Your password should contain at least one lowercase, uppercase and digit characters"
    );
  }
  if (!schema.regex(/(?=.*[@#$%^&+=!])/gm).safeParse(value).success) {
    errors.push("At least one special character (@#$%^&+=!) is required");
  }
  return errors;
};
