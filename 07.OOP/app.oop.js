import Core from '../src/core.js';
import OOPExample from './module/oop.example.js';
import OOPRealization1 from './module/oop.realization1.js';
import OOPRealization2 from './module/oop.realization2.js';
import PrototypeChaining from './module/prototype.chaining.js';
import PrototypeExample from './module/prototype.example.js';
import ShoppingCart from './module/shopping.cart.js';

class AppOOP extends Core {
  constructor() {
    super();
    this.setModules([
      OOPExample,
      OOPRealization1,
      OOPRealization2,
      PrototypeChaining,
      PrototypeExample,
      ShoppingCart,
    ]);
  }
}

new AppOOP().init();
