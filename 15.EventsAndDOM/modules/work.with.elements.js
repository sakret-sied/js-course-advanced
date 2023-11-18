import Module from '/node_modules/js-little-core/module.js';

export default class WorkWithElements extends Module {
  prepare() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    this.content.append(wrapper);

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Button';
    button.addEventListener('click', () => wrapper.remove());
    wrapper.append(button);
    // this.content.prepand(wrapper);
    // this.content.before(wrapper);
    // this.console.after(wrapper);

    return this;
  }

  execute() {
    console.log(document.head);
    console.log(document.body);

    const el1 = document.querySelector('.wrapper');
    console.log(el1);

    const el2 = document.querySelectorAll('meta');
    console.log(el2);

    const el3 = document.getElementsByClassName('wrapper');
    console.log(el3);

    const el4 = document.getElementsByTagName('meta');
    console.log(el4);
  }
}
