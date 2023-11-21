import Module from '/node_modules/js-little-core/module.js';

export default class MovingAroundDOM extends Module {
  wrapper;
  inner;

  prepare() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.content.append(this.wrapper);

    this.inner = document.createElement('div');
    this.inner.classList.add('inner');
    this.wrapper.append(this.inner);

    for (let id = 1; id <= 3; id++) {
      const button = document.createElement('button');
      button.classList.add('button');
      button.textContent = `Button ${id}${id}${id}`;
      button.innerHTML = `Button ${id}${id}${id}`;
      this.inner.append(button);
    }

    return this;
  }

  execute() {
    console.log(this.inner.childNodes);
    console.log(this.inner.children);
    console.log(this.inner.parentNode);

    const button = document.querySelector('.button');
    console.log(button.closest('.wrapper'));

    console.log(button.previousElementSibling);
    console.log(button.previousSibling);
    console.log(button.nextElementSibling);
    console.log(button.nextSibling);

    console.log(button.parentElement.children);
  }
}
