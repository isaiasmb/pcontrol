export const formatCurrency = (price: number | bigint) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
};

export const formatPercentage = (percent: number) => {
  return new Intl.NumberFormat('en', {
    style: 'percent',
    signDisplay: 'always'
  }).format(percent / 100);
};
