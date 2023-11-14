import Module from '/node_modules/js-little-core/module.js';

export default class PromiseChaining extends Module {
  execute() {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then(({ products }) =>
        fetch('https://dummyjson.com/products/' + products[0].id),
      )
      .then((response) => response.json())
      .then(console.log);
  }
}
