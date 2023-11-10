export default class Sword {
  #damage;

  constructor(damage) {
    this.#damage = damage;
  }

  dealDamage(enemy) {
    enemy.recieveDamage(this.#damage);
    console.log(`${enemy.name} got attack - ${enemy.health} hp lost`);
    return this;
  }
}
