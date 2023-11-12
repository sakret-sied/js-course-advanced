export default class Character {
  #inventory = [];
  #health = 10;

  pickItem(item) {
    this.#inventory.push(item);
  }

  recieveDamage(damage) {
    this.#health -= damage;
  }
}
