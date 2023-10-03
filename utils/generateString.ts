// program to generate random strings

import { v4 as uuidv4 } from "uuid";

export default async function generateString() {
  let result = uuidv4();

  return result;
}
