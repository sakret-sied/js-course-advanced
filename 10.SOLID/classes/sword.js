import Weapon from './weapon.js';

export default class Sword extends Weapon {
  strike() {
    // ...
    this.dealDamage();
  }
}
