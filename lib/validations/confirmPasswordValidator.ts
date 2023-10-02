export const validateConfirmPassword = <T>(value: T, confirm?: string) => {
  let errors = [];
  if (value !== confirm) {
    errors.push("Sorry, your passwords do not match. Please try again");
  }
  return errors;
};
