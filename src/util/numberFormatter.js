export const numberFormatter = (number) => {
  const numberFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedNumber = numberFormatter.format(number).split(".")[0];
  return formattedNumber;
};
