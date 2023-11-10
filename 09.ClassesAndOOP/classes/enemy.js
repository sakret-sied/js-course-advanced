export default class Enemy {
  #name;
  #health;

  constructor(name, health) {
    this.#name = name;
    this.#health = health;
  }

  get name() {
    return this.#name;
  }

  get health() {
    return this.#health;
  }

  recieveDamage(damage) {
    this.#health -= damage;
    this.#health = this.#health < 0 ? 0 : this.#health;
  }
}
