function filterRange(arr, a, b) {
  let NewArr =  [];
  for(let i of arr) {
    if (i >= a && i <= b) {
      NewArr.push(i);
    }
  }
  return NewArr;
} 
