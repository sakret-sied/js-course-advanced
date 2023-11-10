import Book from './book.js';

export default class EBook extends Book {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  info() {
    console.log(`${this.title} - ${this.author} - ${this.pages}`);
  }
}
