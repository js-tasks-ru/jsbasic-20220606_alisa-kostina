function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number' && !isNaN(salaries[key]) && isFinite(salaries[key])) {
      sum += salaries[key];
    } else {
      sum += 0;
    }
  }
  return sum;
}
