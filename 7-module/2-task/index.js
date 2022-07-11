import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div')
    this.makeHTML();
 
  }

  makeHTML () {
    let modalHTML =  `
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
      <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title"></h3>
        </div>
  
        <div class="modal__body">
        </div>
    </div>`

  this.elem.innerHTML = modalHTML;
  this.elem.classList.add('modal');
  }

  open () {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    this.closeEscEvent = (event) => this.closeByEsc(event);
    document.addEventListener('keydown', this.closeEscEvent);

    this.closeBtnEvent = (event) => this.closeByBtn(event);
    this.elem.addEventListener('click', this.closeBtnEvent);
  }
  

  setTitle (title) {
    let modTitle = this.elem.querySelector('.modal__title');
    modTitle.textContent = title;
  }

  setBody (node) {
    let modBody = this.elem.querySelector('.modal__body');
    while (modBody.firstChild) {
      modBody.removeChild(modBody.firstChild);
    }

    modBody.append(node);
  }

  closeByEsc (event) {
    if(event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  closeByBtn (event) {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }
  }

  close () {
    document.removeEventListener('keydown', this.closeEscEvent);
    document.body.classList.remove('is-modal-open');
    this.elem.remove();

  }

  
}
