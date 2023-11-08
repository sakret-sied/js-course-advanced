import Book from '../classes/book.js';
import Module from '/node_modules/js-little-core/module.js';

export default class ClassesExample extends Module {
  execute() {
    const lotr = new Book('lotr', 'Tolkien');
    console.log(lotr);
    console.log(lotr instanceof Book);
    console.log(lotr.__proto__);
  }
}
