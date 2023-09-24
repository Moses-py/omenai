import { z } from "zod";

export function validate<T, K>(value: T, label: K) {
  const schema = z.string();
  switch (label) {
    case "name":
      if (!schema.min(3).safeParse(value).success) {
        return "Error encountered";
      }
      if (!schema.startsWith("omenai").safeParse(value).success) {
        return "Bad characters detected";
      }
      break;
    case "email":
      if (!schema.email().safeParse(value).success) {
        return "Invalid email";
      }
      break;

    default:
      break;
  }
}
