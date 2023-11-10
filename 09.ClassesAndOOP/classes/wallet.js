export default class Wallet {
  #balance = 0;

  add(sum) {
    this.#balance += sum;
    return this;
  }

  remove(sum) {
    this.#balance -= sum;
    return this;
  }
}
