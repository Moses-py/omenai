import { validatePassword } from "./passwordValidator";
import { validateConfirmPassword } from "./confirmPasswordValidator";
import { validateEmail } from "./emailValidator";
import { validateText } from "./textValidator";
import { validataGeneralText } from "./generalValidator";
import { checkLabel } from "./checkLabel";

type ValidationFunction = (value: string) => string[];

export function validate<T extends string | number>(
  value: string,
  label: string,
  confirm?: string
): { success: boolean; errors: string[] | [] } {
  const validationFunctions: Record<string, ValidationFunction> = {
    name: (value: string) => validateText(value),
    email: (value: string) => validateEmail(value),
    password: (value: string) => validatePassword(value),
    confirmPassword: (value: string) => validateConfirmPassword(value, confirm),
    general: (value: string) => validataGeneralText(value),
  };

  const validationFunction = validationFunctions[checkLabel(label)];

  let nameErrors = validationFunction(value);

  return {
    success: nameErrors.length === 0,
    errors: nameErrors,
  };
}
