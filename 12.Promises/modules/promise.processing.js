import Module from '/node_modules/js-little-core/module.js';

export default class PromiseProcessing extends Module {
  execute() {
    fetch('https://dummyjson.com/products/1')
      .then((response) => response.json())
      .then(console.log);
  }
}
