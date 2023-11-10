import AudioBook from '../classes/audio.book.js';
import Book from '../classes/book.js';
import Module from '/node_modules/js-little-core/module.js';

export default class InheritanceES6 extends Module {
  execute() {
    const book = new AudioBook('Lord Of The Rings', 'Tolkien', 20 * 60);
    book.log();
    book.buy();
    console.log(book);
    console.log(book instanceof AudioBook);
    console.log(book instanceof Book);
  }
}
