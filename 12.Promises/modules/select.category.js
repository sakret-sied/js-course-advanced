import Module from '/node_modules/js-little-core/module.js';

export default class SelectCategory extends Module {
  execute() {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const select = document.createElement('select');
        this.content.insertAdjacentElement('beforeend', select);

        data.forEach((category) => {
          const option = document.createElement('option');
          option.value = option.innerText = category;
          select.insertAdjacentElement('beforeend', option);
        });
      });
  }
}
