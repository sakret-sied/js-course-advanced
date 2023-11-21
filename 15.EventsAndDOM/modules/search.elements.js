import Module from '/node_modules/js-little-core/module.js';

export default class SearchElements extends Module {
  elements;
  search;

  execute() {
    this.#createElements(20);
    this.#createSearchInput(this.#searchEvent);
  }

  #createElements(number = 4) {
    this.elements = document.createElement('div');
    this.elements.id = 'elements';
    this.content.append(this.elements);

    for (let id = 1; id <= number; id++) {
      const div = document.createElement('div');
      div.textContent = `div${id}`;
      this.elements.append(div);
    }
  }

  #createSearchInput(event = () => {}) {
    this.search = document.createElement('input');
    this.search.id = 'search';
    this.content.prepend(this.search);

    this.search.addEventListener('keyup', event.bind(this));
  }

  #searchEvent(event) {
    const elements = [...this.elements.children];
    elements.forEach((element) => {
      if (
        event.target.value &&
        element.textContent.includes(event.target.value)
      ) {
        element.style.backgroundColor = '#333';
      } else {
        element.style.backgroundColor = '';
      }
    });
  }
}
