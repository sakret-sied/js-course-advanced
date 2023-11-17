import Module from '/node_modules/js-little-core/module.js';

export default class AsyncAwait extends Module {
  execute() {
    this.getProducts();
    this.getProduct(1);
    console.log('End');
  }

  async getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();
    console.log(products);
  }

  async getProduct(id = 1) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const pruduct = await response.json();
    console.log(pruduct);
  }
}
