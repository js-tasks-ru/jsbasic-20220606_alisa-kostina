function highlight(table) {
  let cell = table.querySelectorAll('td');
  for (let elem of cell) {
    if (elem.innerHTML < 18) {
      elem.parentNode.style.textDecoration = 'line-through';
    };
    if (elem.dataset.available == 'true') {
      elem.parentNode.classList.add('available')
    } else if (elem.dataset.available == 'false') {
      elem.parentNode.classList.add('unavailable')
    };
    if (elem.innerHTML == 'm') {
      elem.parentNode.classList.add('male')
    }
    else if (elem.innerHTML =='f') {
      elem.parentNode.classList.add('female')
    };
  }
  let row = table.querySelectorAll('tr');
  for (let elem of row) {
    let lastEl = elem.childNodes[elem.childNodes.length-2]
    if (lastEl.dataset.available == undefined) {
      lastEl.parentNode.setAttribute('hidden', 0)
    } //это выглядит как быдлокод, но я не осилила придумать ничего лучше, подскажите плз как сделать нормально
  }
}


