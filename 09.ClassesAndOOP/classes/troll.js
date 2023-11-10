import Enemy from './enemy.js';

export default class Troll extends Enemy {
  recieveDamage(damage) {
    super.recieveDamage(damage / 2);
  }
}
