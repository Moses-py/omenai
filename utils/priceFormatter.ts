export function formatPrice(price: string): string {
  if (price.includes(",")) {
    return price; // Return as it is if already formatted
  }

  const numericValue = parseInt(price.replace(/[^\d]/g, ""), 10);

  if (isNaN(numericValue)) {
    return "Invalid input";
  }

  return `$${numericValue.toLocaleString()}`;
}
