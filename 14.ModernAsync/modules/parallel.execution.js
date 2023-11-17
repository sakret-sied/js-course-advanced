import Module from '/node_modules/js-little-core/module.js';

export default class ParallelExecution extends Module {
  execute() {
    // this.main();
    // this.all();
    // this.allSettled();
    this.race();
  }

  async main() {
    const { products } = await this.getAllProducts();
    const res = await Promise.all(
      products.map((product) => this.getProduct(product.id)),
    );
    console.log(res);
  }

  async all() {
    const res = await Promise.all([
      this.getProduct(1),
      this.getProduct(2),
      this.getProductError(3),
    ]);
    console.log(res);
  }

  async allSettled() {
    const res = await Promise.allSettled([
      this.getProduct(1),
      this.getProduct(2),
      this.getProductError(3),
    ]);
    console.log(res);
  }

  async race() {
    const res = await Promise.race([this.getProduct(1), this.getProduct(2)]);
    console.log(res);
  }

  async getAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
  }

  async getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  }

  async getProductError(id) {
    const response = await fetch(`https://dummyjsons.com/products/${id}`);
    return response.json();
  }
}
