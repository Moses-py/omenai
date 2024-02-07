export const indexAddress = (
  label: string,
  address: IndividualAddressTypes
) => {
  if (label in address) {
    return address[label];
  }
};
