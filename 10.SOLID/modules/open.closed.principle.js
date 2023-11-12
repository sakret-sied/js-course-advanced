import Brilliant from '../classes/treasures/brilliant.js';
import Coin from '../classes/treasures/coin.js';
import Crystal from '../classes/treasures/crystal.js';
import Inventory from '../classes/inventory.js';
import Module from '/node_modules/js-little-core/module.js';

export default class OpenClosedPrinciple extends Module {
  execute() {
    const inventory = new Inventory();

    const brilliant = new Brilliant();
    inventory.pick(brilliant);

    const coin = new Coin();
    inventory.pick(coin);

    const crystal = new Crystal();
    inventory.pick(crystal);
  }
}
