export default class Book {
  isRead = false;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read() {
    this.isRead = true;
  }
}
