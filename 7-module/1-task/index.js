import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.makeHTML();
    this.scrollMenu();
    this.selectActive();
  }

  makeHTML () {
    let buttonLeft = `<button class="ribbon__arrow ribbon__arrow_left">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`

    let buttonRight = `<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`

    let ribbon = this.categories.map((item) => `
    <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`).join('');

    let new_ribbon = `<nav class="ribbon__inner">` + ribbon + `</nav>`

    this.elem.innerHTML = buttonLeft + new_ribbon + buttonRight;

    this.elem.classList.add('ribbon');
  }

  scrollMenu () {
    let rightBtn = this.elem.querySelector('.ribbon__arrow_right');
    let leftBtn = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonInner = this.elem.querySelector('.ribbon__inner');

    function scroll (event) {
     if (event.target == rightBtn) {
        ribbonInner.scrollBy(350, 0);
      } else if (event.target == leftBtn) {
        ribbonInner.scrollBy(-350, 0); 
      }
    }

    this.elem.addEventListener('click', scroll);

    ribbonInner.addEventListener('scroll', function () {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0) {
        leftBtn.classList.remove('ribbon__arrow_visible');
        rightBtn.classList.add('ribbon__arrow_visible');
      } else if (scrollLeft > 0) {
        leftBtn.classList.add('ribbon__arrow_visible');
      }
      if (scrollRight < 1) {
        rightBtn.classList.remove('ribbon__arrow_visible');
      }
    });
    }

    selectActive () {
      let ribbonInner = this.elem.querySelector('.ribbon__inner');
      let menuItem = this.elem.querySelectorAll('.ribbon__item')
      
      function select (event) {
        let target = event.target;
        event.preventDefault();
        menuItem.forEach(element => element.classList.remove('ribbon__item_active'));

        target.classList.add('ribbon__item_active'); 
      }

      for (let item of menuItem) {
       item.addEventListener('click', function() {
          let event = new CustomEvent('ribbon-select', {
          detail: item.dataset.id,
          bubbles: true
      })
      ribbonInner.dispatchEvent(event);
    });
    }
    ribbonInner.addEventListener('click', select);
  }


      
}


    
  
  
  





