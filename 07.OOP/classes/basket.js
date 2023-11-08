export default class Basket {
  #lastId = 1;
  #products = [];

  getProducts() {
    return this.#products;
  }

  addProduct(product) {
    product.id = this.#lastId++;
    this.#products.push(product);
  }

  increaseProduct(product) {
    const index = this.#products.indexOf(product);
    this.#products[index].count++;
  }

  decreaseProduct(product) {
    const index = this.#products.indexOf(product);
    this.#products[index].count--;
    if (this.#products[index].count <= 0) {
      this.#products.splice(index, 1);
    }
  }
}
