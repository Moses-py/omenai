import { z } from "zod";

export const validatePrice = (value: string): string[] => {
  const schema = z.string();

  let errors = [];

  // Validate if the value is not blank and follows the price format
  if (
    !schema
      .regex(/^\$\d+(\.\d{1,2})?$/, { message: "Invalid price format" })
      .safeParse(value).success
  ) {
    errors.push(
      "Invalid price format. Please enter a valid price with a currency symbol, e.g., '$15.99'."
    );
  }

  return errors;
};
