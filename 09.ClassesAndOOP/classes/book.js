export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log('Buy');
  }

  info() {
    console.log(`${this.title} - ${this.author}`);
  }
}
