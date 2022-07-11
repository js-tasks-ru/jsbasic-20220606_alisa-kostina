export default class UserTable {
  #elem;
  #rows;
  constructor(rows) {
    this.#rows = rows;
    this.#elem = document.createElement('table');
    this.createTable();
  }
  
  get elem () {
    return this.#elem
  }

  createTable() {
    let head = `<thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
    </thead>
    <tbody>`

    let body = this.#rows.map((item) => `
    <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button>X</button></td>
    </tr>`).join('') + `</tbody>`;

    this.#elem.innerHTML = head + '' + body;
    
    let btns = this.#elem.querySelectorAll('button');
    for (let i of btns) {
      i.addEventListener('click', function (event) {
        let target = event.target;
        let row = target.parentElement.parentElement;
        if (target == i) {
          row.remove();
        }
      })
    }         
  } 
}

let rows = [
  {
      name: 'Ilia',
      age: 25,
      salary: 1000,
      city: 'Petrozavodsk'
  },
  {
      name: 'Vasya',
      age: 14,
      salary: 1500,
      city: 'Moscow'
  },
  {
      name: 'Ivan',
      age: 22,
      salary: 100,
      city: 'Bryansk'
  },
  {
      name: 'Petya',
      age: 45,
      salary: 990,
      city: 'Chita'
  }
];