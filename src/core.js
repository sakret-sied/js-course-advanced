export default class Core {
  container = document.querySelector('#app');
  modules = new Map();
  selectorId = 'module-selector';

  constructor() {}

  init() {
    if (this.modules.size === 0) {
      return;
    }

    const selector = this.#addSelector();
    this.#addOptionsToSelector(selector);
    this.#addEventListenerToSelector(selector);
  }

  #addSelector() {
    const selector = document.createElement('select');
    selector.id = this.selectorId;
    this.container.insertAdjacentElement('beforeend', selector);
    return selector;
  }

  #addOptionsToSelector(selector) {
    const defaultSelector = this.#getDefaultSelector();
    this.modules.forEach((_, index) => {
      const option = document.createElement('option');
      option.id = option.innerText = index;
      option.selected = index === defaultSelector ? 'selected' : '';
      selector.insertAdjacentElement('beforeend', option);
    });

    this.modules.get(defaultSelector).execute();
  }

  #addEventListenerToSelector(selector) {
    selector.addEventListener('change', (e) => {
      console.clear();
      this.#setDefaultSelector(e.target.value);
      this.modules.get(e.target.value).execute();
    });
  }

  #setDefaultSelector(value) {
    localStorage.setItem('select', value);
  }

  #getDefaultSelector() {
    return localStorage.getItem('select') ?? this.modules.values().next().key;
  }
}
