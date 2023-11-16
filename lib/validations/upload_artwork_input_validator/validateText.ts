import { z } from "zod";

export const validateBasicText = (value: string): string[] => {
  const schema = z.string();

  let errors = [];

  // Validate if the value is not blank and meets length requirement
  if (!schema.min(3).safeParse(value).success) {
    errors.push("Value must be at least 3 characters long.");
  }

  // Validate if the value does not contain security-compromising characters
  const securityCompromisingRegex = /[<>{}[\]'"`]/;
  if (securityCompromisingRegex.test(value)) {
    errors.push("Value cannot contain characters such as < > { } [ ] ' \" `.");
  }

  return errors;
};
