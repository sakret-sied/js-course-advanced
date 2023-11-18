import Module from '/node_modules/js-little-core/module.js';

export default class EventHandler extends Module {
  execute() {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Button';
    button.addEventListener('mouseover', this.#event1);
    button.addEventListener('click', () => {
      console.log('Event 2');
      button.removeEventListener('mouseover', this.#event1);
    });
    this.content.append(button);
  }

  #event1() {
    console.log('Event 1');
  }
}
