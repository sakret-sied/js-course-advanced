import Weapon from './weapon.js';

export default class Rifle extends Weapon {
  shoot() {
    // ...
    this.dealDamage();
  }
}
