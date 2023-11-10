import Builder from '../classes/builder.js';
import Wallet from '../classes/wallet.js';
import Module from '/node_modules/js-little-core/module.js';

export default class BuilderAndChaining extends Module {
  execute() {
    const wallet = new Wallet();
    wallet.add(100).remove(10);
    console.log(wallet);

    const house = new Builder().addRoof().addFloor().execute();
    console.log(house);
  }
}
