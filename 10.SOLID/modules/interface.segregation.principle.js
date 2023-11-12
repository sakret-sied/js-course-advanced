import Rifle from '../classes/rifle.js';
import Sword from '../classes/sword.js';
import Module from '/node_modules/js-little-core/module.js';

export default class InterfaceSegregationPrinciple extends Module {
  execute() {
    const rifle = new Rifle();
    const sword = new Sword();
  }
}
