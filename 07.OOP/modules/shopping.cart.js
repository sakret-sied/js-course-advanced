import Basket from '../classes/basket.js';
import Product from '../classes/product.js';
import Module from '/node_modules/js-little-core/module.js';

export default class ShoppingCart extends Module {
  execute() {
    const basket = new Basket();

    const bread = new Product('Bread');
    basket.addProduct(bread);
    basket.decreaseProduct(bread);

    const milk = new Product('Milk', 109);
    basket.addProduct(milk);
    basket.increaseProduct(milk);

    const meat = new Product('Meat', 2);
    basket.addProduct(meat);

    console.log(basket.getProducts());
  }
}
