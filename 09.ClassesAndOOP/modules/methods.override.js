import Book from '../classes/book.js';
import EBook from '../classes/e.book.js';
import Module from '/node_modules/js-little-core/module.js';

export default class MethodsOverride extends Module {
  execute() {
    const book1 = new Book('Lord Of The Rings', 'Tolkien');
    book1.info();

    const book2 = new EBook('Lord Of The Rings', 'Tolkien', 100);
    book2.info();
  }
}
