export const allKeysEmpty = (obj: Record<string, string>): boolean => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key].trim() !== "") {
        return false; // Found a key with a non-empty string value
      }
    }
  }
  return true; // All keys have empty string values
};
