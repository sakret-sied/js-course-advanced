import Module from '/node_modules/js-little-core/module.js';

export default class TryCatch extends Module {
  execute() {
    this.getProducts();
    this.getProduct(1);
    console.log('End');
  }

  async getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error(response.status);
      }
      const { products } = await response.json();
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  }

  async getProduct(id = 1) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const pruduct = await response.json();
      console.log(pruduct);
    } catch (error) {
      console.error(error);
    }
  }
}
