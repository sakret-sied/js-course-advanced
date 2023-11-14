import Module from '/node_modules/js-little-core/module.js';

export default class FetchExample extends Module {
  execute() {
    const res = fetch('https://dummyjson.com/products/1');
    console.log(res);
  }
}
