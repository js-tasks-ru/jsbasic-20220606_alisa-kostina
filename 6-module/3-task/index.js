import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #elem;
  constructor(slides) {
    this.slides = slides;
    this.#elem = document.createElement('div');
    this.makeCarousel();
    
  }

  get elem () {
    return this.#elem
  }

  makeCarousel () {
    this.#elem.classList.add('carousel');
    let innerCarousel = document.createElement('div');
    this.#elem.appendChild(innerCarousel);

    let buttonsHTML = `<div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>`


  let slide_body = this.slides.map((item) => `
  <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div></div>`).join('');

    let new_slide_body = `<div class="carousel__inner">` + slide_body + `</div>`

    this.#elem.innerHTML = buttonsHTML + new_slide_body;
  
    
      let left = this.#elem.querySelector('.carousel__arrow_left');
      let right = this.#elem.querySelector('.carousel__arrow_right');
      let imgRight = right.childNodes[1];
      let imgLeft = left.childNodes[1];
      let imgIndex = 0;
      let arrayImg = this.#elem.querySelectorAll('.carousel__slide');
      left.style.display = 'none';
      let images = this.#elem.querySelector('.carousel__inner');


    function clickArrows (event) {
        let imgWidth = arrayImg[0].offsetWidth;
        let target = event.target;
        if (target === right || target === imgRight) {
          imgIndex++
          console.log(imgWidth);
          images.style.transform = `translateX(-${imgIndex * imgWidth}px)`
        } else if (target === left || target === imgLeft) {
            imgIndex--;
            images.style.transform = `translateX(-${imgIndex * imgWidth}px)`
        } else {
          return;
        }

      if (imgIndex == arrayImg.length - 1) {
          right.style.display = 'none';
      } else if (imgIndex == 0) {
        left.style.display = 'none';
      } else {
        left.style.display = '';
        right.style.display = '';
      }
        
      }

      left.addEventListener('click', clickArrows)
      right.addEventListener('click', clickArrows);

    

      let plusBtns = this.#elem.querySelectorAll('.carousel__button')
      for (let plus of plusBtns) {
        plus.addEventListener('click', function () {
          let event = new CustomEvent("product-add", {
            detail: plus.parentElement.parentElement.dataset.id,
            bubbles: true})
            console.log(plus.parentElement.parentElement.dataset.id)
            plus.dispatchEvent(event);
        })
      }
  }
}