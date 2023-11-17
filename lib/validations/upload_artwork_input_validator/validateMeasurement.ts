import { z } from "zod";

export const validateMeasurement = (value: string): string[] => {
  const schema = z.string();

  let errors = [];

  // Validate if the value is not blank and follows the measurement format
  if (
    !schema
      .regex(/^\d+(\.\d+)?(cm|in|ft|m|mm)$/, {
        message: "Invalid measurement format",
      })
      .safeParse(value).success
  ) {
    errors.push(
      "Invalid measurement format. Please enter a valid measurement like '24cm', '35in', '440mm', '5m', or '34ft'."
    );
  }

  return errors;
};
