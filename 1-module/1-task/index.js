function factorial(n) {
  let result = 1;
  if (n == 0 || n == 1) {
    result = 1;
  }
  while (n > 0) {
    result *= n--
  }
  return result;
}
