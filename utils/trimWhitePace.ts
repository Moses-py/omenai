export const trimWhiteSpace = (s: string) => {
  const trimmedString: string = s.replace(/\s+/g, " ").trim();

  return trimmedString;
};
