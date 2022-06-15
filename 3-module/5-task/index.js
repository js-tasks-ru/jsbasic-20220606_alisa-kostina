function getMinMax(str) {
  let arr = str.split(' ');
  let numbers = [];
  for (let key of arr) {
    key = Number(key);
    if (typeof key == 'number' && !isNaN(key)) {
      numbers.push(key)
    }
  }
  let result = {};
  result.min = Math.min(...numbers);
  result.max = Math.max(...numbers);
  return result;
}