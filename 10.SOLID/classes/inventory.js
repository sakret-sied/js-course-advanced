export default class Inventory {
  #score = 0;

  pick(treasure) {
    this.#score += treasure.value;
    console.log(this.#score);
  }
}
