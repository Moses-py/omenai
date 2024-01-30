import { validatePrice } from "./validatePrice";
import { validateMeasurement } from "./validateMeasurement";
import { validateYear } from "./validateYear";
import { validateBasicText } from "./validateText";
import { validateWeight } from "./validateWeight";

type ValidationFunction = (value: string) => string[];

export const validate = (label: string, value: string) => {
  const validationFunctions: Record<string, ValidationFunction> = {
    artist: (value: string) => validateBasicText(value),
    year: (value: string) => validateYear(value),
    title: (value: string) => validateBasicText(value),
    materials: (value: string) => validateBasicText(value),
    height: (value: string) => validateMeasurement(value),
    depth: (value: string) => validateMeasurement(value),
    width: (value: string) => validateMeasurement(value),
    price: (value: string) => validatePrice(value),
    weight: (value: string) => validateWeight(value),
    artist_birthyear: (value: string) => validateYear(value),
    artwork_description: (value: string) => validateBasicText(value),
  };

  const validationFunction = validationFunctions[label];

  let nameErrors = validationFunction(value);

  return {
    success: nameErrors.length === 0,
    errors: nameErrors,
  };
};
