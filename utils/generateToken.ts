// program to generate random strings

import cryptoRandomString from "crypto-random-string";
import { v4 as uuidv4 } from "uuid";

export default async function generateString() {
  let result = uuidv4();

  return result;
}

export const generateDigit = (length: number): string => {
  const token = cryptoRandomString({ length, type: "numeric" });

  return token;
};
