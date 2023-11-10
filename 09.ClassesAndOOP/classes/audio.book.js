import Book from './book.js';

export default class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author);
    this.lenMin = lenMin;
  }

  log() {
    console.log(`${this.title} -  ${this.lenMin}`);
  }
}
