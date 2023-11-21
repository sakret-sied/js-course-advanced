import Module from '/node_modules/js-little-core/module.js';

export default class VisualElements extends Module {
  wrapper;

  execute() {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Button';
    button.addEventListener('click', this.#buttonListener.bind(this));
    this.content.append(button);

    this.wrapper = document.createElement('div');
    this.content.append(this.wrapper);

    for (let index = 1; index <= 30; index++) {
      const div = document.createElement('div');
      div.textContent = index;
      this.wrapper.append(div);
    }
  }

  #buttonListener(event) {
    console.clear();

    console.log(event.target.getBoundingClientRect());

    console.log(`X offset: ${window.scrollX}`);
    console.log(`Y offset: ${window.screenY}`);
    console.log(`clientWidth: ${document.documentElement.clientWidth}`);
    console.log(`clientHeight: ${document.documentElement.clientHeight}`);

    const elem = this.wrapper.lastChild;
    const rect = elem.getBoundingClientRect();
    window.scrollTo({
      left: window.scrollX + rect.left,
      top: window.screenY + rect.top,
      behavior: 'smooth',
    });
  }
}
