import Module from '/node_modules/js-little-core/module.js';

export default class EventBubbling extends Module {
  execute() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.style.padding = '1em';
    wrapper.style.border = '1px solid #eee';
    wrapper.addEventListener('click', function (event) {
      console.log(event.target);
      console.log(event.currentTarget);
      this.style.backgroundColor = 'purple';
    });
    this.content.append(wrapper);

    const inner = document.createElement('div');
    inner.classList.add('inner');
    inner.style.padding = '1em';
    inner.style.border = '1px solid #eee';
    inner.addEventListener('click', function (event) {
      console.log(event.target);
      console.log(event.currentTarget);
      this.style.backgroundColor = 'blue';
      event.stopPropagation();
    });
    wrapper.append(inner);

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Button';
    button.addEventListener('click', function (event) {
      console.log(event.target);
      console.log(event.currentTarget);
      this.style.backgroundColor = 'green';
    });
    inner.append(button);
  }
}
