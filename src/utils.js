// Round number x to n decimal places
const round = (x, n) => {
  return Math.round((x + Number.EPSILON) * Math.pow(10, n)) / Math.pow(10, n);
};

export { round };
