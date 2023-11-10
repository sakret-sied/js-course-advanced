import Enemy from './enemy.js';

export default class Orc extends Enemy {
  recieveDamage(damage) {
    if (Math.random() > 0.5) {
      super.recieveDamage(damage);
    }
  }
}
