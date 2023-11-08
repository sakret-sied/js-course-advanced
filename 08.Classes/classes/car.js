export default class Car {
  static #field = 3;

  speed;
  #vin;

  static {
    this.#field = 5;
  }

  test() {
    // проверка
    this.#changeVin();
  }

  #changeVin() {
    console.log('changed');
  }
}
