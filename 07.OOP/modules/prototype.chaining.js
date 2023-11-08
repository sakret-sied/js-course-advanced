import Module from '/node_modules/js-little-core/module.js';

export default class PrototypeChaining extends Module {
  execute() {
    const Book = function (title, author) {
      this.title = title;
      this.author = author;
    };
    Book.prototype.isRead = false;

    const lordOfTheRings = new Book('1', '1');
    console.log(lordOfTheRings);

    console.log(Book.prototype.__proto__);
  }
}
