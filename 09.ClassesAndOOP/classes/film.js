export default class Film {
  rating;
  #author;
  #duration;
  #name;

  constructor(name, author, duration) {
    this.#name = name;
    this.#author = author;
    this.#duration = duration;
  }

  get name() {
    return this.#name;
  }

  get author() {
    return this.#author;
  }

  get duration() {
    return this.#duration;
  }
}
