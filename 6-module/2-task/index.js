export default class ProductCard {
  #elem;
  
  constructor(product) {
    this.product = product;
    this.#elem = document.createElement('div');
    this.makeCard();
  }

  makeCard () {
    console.log(this.product.price);
    let top = `<div class="card__top">
    <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
    <span class="card__price">€${this.product.price.toFixed(2)}</span>
  </div>`

    let body = `<div class="card__body">
    <div class="card__title">${this.product.name}</div>
    <button type="button" class="card__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>`

    this.#elem.innerHTML = top + body;
    this.#elem.classList.add('card');

  let plusBtn = this.#elem.querySelector('.card__button');
  console.log(plusBtn);
  console.log(this.product.id)
  plusBtn.addEventListener('click', function() {
    let event = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true})
      plusBtn.dispatchEvent(event);
  })

  }

  get elem () {
    return this.#elem
  }
}

let product = {
  name: "Laab kai chicken salad",
  price: 10, 
  category: "salads", 
  image: "laab_kai_chicken_salad.png", 
  id: "laab-kai-chicken-salad" 
}
