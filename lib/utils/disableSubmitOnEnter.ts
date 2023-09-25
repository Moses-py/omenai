export const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};
