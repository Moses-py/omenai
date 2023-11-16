import { z } from "zod";

export const validateYear = (value: string): string[] => {
  const schema = z.string();

  let errors = [];

  // Validate if the value is not blank and is a four-digit number
  if (
    !schema
      .min(4)
      .max(4)
      .regex(/^\d{4}$/)
      .safeParse(value).success
  ) {
    errors.push("Invalid year format. Please enter a four-digit number.");
  }

  return errors;
};
