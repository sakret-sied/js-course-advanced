import Module from '/node_modules/js-little-core/module.js';

export default class PriceCalculation extends Module {
  execute() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/');
    request.send();

    request.addEventListener('load', function () {
      const { products } = JSON.parse(this.responseText);
      console.log(products);
      console.log(
        products.reduce((sum, { price }) => sum + price, 0) / products.length,
      );
    });
  }
}
