import Module from '/node_modules/js-little-core/module.js';

export default class PrototypeExample extends Module {
  execute() {
    const Book = function (title, author) {
      this.title = title;
      this.author = author;
      this.isRead = false;
    };

    Book.prototype.read = function () {
      this.isRead = true;
    };

    Book.prototype.cover = 'Paper';

    const lordOfTheRings = new Book('Lord of the rings', 'Tolkien');
    lordOfTheRings.read();

    console.log(lordOfTheRings);
    console.log(lordOfTheRings.cover);
    console.log(lordOfTheRings.hasOwnProperty('cover'));
    console.log(lordOfTheRings.hasOwnProperty('author'));

    console.log(lordOfTheRings.__proto__);
    console.log(lordOfTheRings.__proto__ === Book.prototype);
    console.log(Book.prototype.isPrototypeOf(lordOfTheRings));
    console.log(Book.prototype.isPrototypeOf(Book));
  }
}
