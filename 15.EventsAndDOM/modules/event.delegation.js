import Module from '/node_modules/js-little-core/module.js';

export default class EventDelegation extends Module {
  wrapper;

  prepare() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.content.append(this.wrapper);
    return this;
  }

  execute() {
    this.wrapper.addEventListener('click', (e) => {
      console.log(e.target.getAttribute('data-id'));
    });

    for (let id = 1; id < 100; id++) {
      const element = document.createElement('div');
      element.innerHTML = `User ID: ${id}`;
      element.setAttribute('data-id', id);
      this.wrapper.append(element);
    }
  }
}
