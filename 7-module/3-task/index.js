export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = document.createElement('div');
    this.steps = steps;
    this.value = value;
    this.makeHTML();
    let clickSlider = (event) => this.onClickSlide(event);
    this.elem.addEventListener('click', clickSlider);
    this.activeClass();

  }

  makeHTML () {
    let sl_value = `<div class="slider__thumb" style="left: 50%;">
    <span class="slider__value">${this.value}</span>
  </div><div class="slider__progress" style="width: 50%;"></div><div class="slider__steps">`
  
  let spans = ``
  for (let i = 0; i < this.steps; i++) {
    spans += `<span></span>`
  }

  this.elem.innerHTML = sl_value + spans + `</div>
  </div>`

  this.elem.classList.add('slider');

  let thumb = this.elem.querySelector('.slider__thumb');
  thumb.style.left = '0%'
  let progress = this.elem.querySelector('.slider__progress');
  progress.style.width = '0%'

}

onClickSlide (event) {
  let sl_value = document.querySelector('.slider__value');
  let left = event.clientX - this.elem.getBoundingClientRect().left;
  let leftRelative = left / this.elem.offsetWidth;
  let segments = this.steps - 1;
  let approximateValue = leftRelative * segments;
  let value = Math.round(approximateValue);
  sl_value.textContent = value;
  

  let thumb = this.elem.querySelector('.slider__thumb');
  let progress = this.elem.querySelector('.slider__progress');

  let valuePercents = value / segments * 100;
  let leftPercents = valuePercents;

  thumb.style.left = `${leftPercents}%`;
  progress.style.width = `${leftPercents}%`;

  let sl_st = this.elem.querySelector('.slider__steps');
  let closest = sl_st.childNodes;
  let arr_closest = Array.from(closest);
  this.activeClass ();

  /*for (let i = 0; i < arr_closest.length; i++) {
    if (i == value) {
      arr_closest.forEach(elem => elem.classList.remove('slider__step-active'));
      arr_closest[i].classList.add('slider__step-active');
    }
  }*/

  let cusEv = new CustomEvent('slider-change', {
    detail: value,
    bubbles: true
  })
  this.elem.dispatchEvent(cusEv);



  }

  activeClass () {
    let value = this.elem.querySelector('.slider__value').textContent;
    let sl_st = this.elem.querySelector('.slider__steps');
    let closest = sl_st.childNodes;
    let arr_closest = Array.from(closest);
    for (let i = 0; i < arr_closest.length; i++) {
      if (i == value) {
        arr_closest.forEach(elem => elem.classList.remove('slider__step-active'));
        arr_closest[i].classList.add('slider__step-active');
      }
    }

  }


}

    


