export const checkLabel = (label: string) => {
  if (label === "admin" || label === "location" || label === "description") {
    return "general";
  } else return label;
};
