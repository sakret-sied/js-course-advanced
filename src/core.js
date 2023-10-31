export default class Core {
  container = document.querySelector('#app');
  modules = new Map();
  selectorId = 'module-selector';

  constructor() {}

  init() {
    if (this.modules.size === 0) {
      return;
    }

    const select = this.#addSelector();
    this.#addOptionsToSelector(select);
    this.#addEventListenerToSelector(select);
  }

  #addSelector() {
    const select = document.createElement('select');
    select.id = this.selectorId;
    this.container.insertAdjacentElement('beforeend', select);
    return select;
  }

  #addOptionsToSelector(select) {
    const selectLocalStorage = this.#getDefaultSelector();
    this.modules.forEach((_, index) => {
      const option = document.createElement('option');
      option.id = option.innerText = index;
      option.selected = index === selectLocalStorage ? 'selected' : '';
      select.insertAdjacentElement('beforeend', option);
    });

    this.modules.get(selectLocalStorage).exec();
  }

  #addEventListenerToSelector(select) {
    select.addEventListener('change', (e) => {
      console.clear();
      this.#setDefaultSelector(e.target.value);
      this.modules.get(e.target.value).exec();
    });
  }

  #setDefaultSelector(value) {
    localStorage.setItem('select', value);
  }

  #getDefaultSelector() {
    return localStorage.getItem('select') ?? this.modules.values().next().key;
  }
}
