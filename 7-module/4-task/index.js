export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = document.createElement('div');
    this.steps = steps;
    this.value = value;
    this.makeHTML();
    let clickSlider = (event) => this.onClickSlide(event);
    this.elem.addEventListener('click', clickSlider);
    this.activeClass();
    this.DragnDrop();
    
  

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

  this.activeClass ();

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

  
    
  DragnDrop() {
    let thumb = this.elem.querySelector('.slider__thumb');
    
    let segments = this.steps - 1;

    thumb.onpointerdown = function(event) {
        event.preventDefault();
        document.addEventListener('pointerup', onPointerUp);
        document.addEventListener('pointermove', onPointerMove);
        
      
      function onPointerMove(event) {
        let progress = document.querySelector('.slider__progress');
        let sl_value = document.querySelector('.slider__value');
        let slider = document.querySelector('.slider');
        slider.classList.add('slider_dragging');
        let left = event.clientX - slider.getBoundingClientRect().left;
        let leftRelative = left / slider.offsetWidth;
        if (leftRelative < 0) {
          leftRelative = 0;
        }
        
        if (leftRelative > 1) {
          console.log(leftRelative);
          leftRelative = 1;
        }

        let leftPercents = leftRelative * 100;

        let approximateValue = leftRelative * segments;
        let value = Math.round(approximateValue);
        sl_value.textContent = value;
        
        
        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;

      }
      

      function onPointerUp() {
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
        let slider = document.querySelector('.slider');
        let sl_value = document.querySelector('.slider__value');
        slider.classList.remove('slider_dragging');

        let newevent = new CustomEvent('slider-change', {
          detail: Number(sl_value.textContent),
          bubbles: true
        })
        slider.dispatchEvent(newevent);
      
      }
    
    }
    thumb.ondragstart = () => false;
    
  }
}

  