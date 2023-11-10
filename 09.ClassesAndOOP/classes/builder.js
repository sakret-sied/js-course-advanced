export default class Builder {
  #house = {};

  addRoof() {
    this.#house.roof = 'Roof';
    return this;
  }

  addFloor() {
    this.#house.floor = 'Floor';
    return this;
  }

  execute() {
    return this.#house;
  }
}
