function showSalary(users, age) {
  let salaries = '';
  for (let key of users) {
    if(key.age <= age) {
      salaries += key.name + ', ' + key.balance + '\n'; 
    }
  }
  return salaries.slice(0, -1);
}