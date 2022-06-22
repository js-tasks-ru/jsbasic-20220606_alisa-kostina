function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  for (let i of friends) {
    let list = document.createElement('li');
    list.textContent = i.firstName + ' ' + i.lastName;
    newUl.append(list);
  }
  return (newUl);
}
