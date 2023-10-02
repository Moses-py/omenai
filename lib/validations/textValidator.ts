import { z } from "zod";

export const validateText = <T>(value: T) => {
  const schema = z.string();
  let errors = [];

  if (!schema.min(3).safeParse(value).success) {
    errors.push(
      "Seems like you left this field blank or it's too short. Please provide full name."
    );
  }
  return errors;
};
