import { validatePassword } from "./passwordValidator";
import { validateConfirmPassword } from "./confirmPasswordValidator";
import { validateEmail } from "./emailValidator";
import { validateText } from "./textValidator";

type ValidationFunction<T> = (value: T) => string[];

export function validate<T>(
  value: T,
  label: string,
  confirm?: string
): { success: boolean; errors: string[] | [] } {
  const validationFunctions: Record<string, ValidationFunction<T>> = {
    name: (value: T) => validateText(value),
    email: (value: T) => validateEmail(value),
    password: (value: T) => validatePassword(value),
    confirmPassword: (value: T) => validateConfirmPassword(value, confirm),
  };

  const validationFunction = validationFunctions[label];

  if (!validationFunction) throw new Error(`Invalid label: ${label}`);

  let nameErrors = validationFunction(value);

  return {
    success: nameErrors.length === 0,
    errors: nameErrors,
  };
}
