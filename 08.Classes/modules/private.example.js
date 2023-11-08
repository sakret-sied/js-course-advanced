import Car from '../classes/car.js';
import Module from '/node_modules/js-little-core/module.js';

export default class PrivateExample extends Module {
  execute() {
    const car = new Car();
    console.log(car);
    car.test();
  }
}
