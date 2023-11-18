import OOPRealization from './modules/oop.realization.js';
import PrototypeChaining from './modules/prototype.chaining.js';
import PrototypeExample from './modules/prototype.example.js';
import ShoppingCart from './modules/shopping.cart.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppOOP extends LittleCore {
  constructor() {
    super();
    this.setModules([
      OOPRealization,
      PrototypeChaining,
      PrototypeExample,
      ShoppingCart,
    ]);
  }
}

new AppOOP().init();
