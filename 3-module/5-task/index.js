function getMinMax(str) {
  let arr = str
    .split(' ')
    .map(item => parseFloat(item))
    .filter(item => typeof item === 'number' && isFinite(item));
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return {
    min: min,
    max: max
  };
}
