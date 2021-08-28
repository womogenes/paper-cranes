// Round number x to n decimal places
export const round = (x, n) => {
  return Math.round((x + Number.EPSILON) * Math.pow(10, n)) / Math.pow(10, n);
};

// Format to money $$$
export const moneyFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export const numberFormatter = (x) => x.toLocaleString();

console.log(numberFormatter(2));
