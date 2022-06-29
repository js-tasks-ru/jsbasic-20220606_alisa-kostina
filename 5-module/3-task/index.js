function initCarousel() {
  let arrows = document.querySelector('.carousel');
  let arrayArrows = document.querySelectorAll('.carousel__arrow');
  let right = arrayArrows[0];
  let left = arrayArrows[1];
  let imgRight = right.childNodes[1];
  let imgLeft = left.childNodes[1];
  let images = document.querySelector('.carousel__inner');
  let arrayImg = document.querySelectorAll('.carousel__slide');
  let imgWidth = arrayImg[0].offsetWidth;
  let imgIndex = 0;
  left.style.display = 'none';

  arrows.addEventListener('click', function (event) {
    let target = event.target;
    if (target === right || target === imgRight) {
      imgIndex++;
      images.style.transform = `translateX(-${imgIndex * imgWidth}px)`
    } else if (target === left || target === imgLeft) {
        imgIndex--;
        images.style.transform = `translateX(-${imgIndex * imgWidth}px)`
    } else {
      return;
    }
   
    if (imgIndex >= 3) {
      right.style.display = 'none';
    } else if (imgIndex == 0) {
      left.style.display = 'none';
    } else {
      left.style.display = '';
      right.style.display = '';
    }});
  }
