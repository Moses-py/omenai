export function calculatePurchaseGrandTotal(
  price: string,
  fees: string,
  taxes: string
): string {
  const priceValue: number = parseFloat(price.replace(/[^0-9.]/g, ""));
  const taxesValue: number = parseFloat(taxes.replace(/[^0-9.]/g, ""));
  const feesValue: number = parseFloat(fees.replace(/[^0-9.]/g, ""));

  // Calculate total
  const total: number = priceValue + taxesValue + feesValue;

  // Format total as string with dollar sign
  const totalString: string = "$" + total.toFixed(2);

  return totalString;
}
