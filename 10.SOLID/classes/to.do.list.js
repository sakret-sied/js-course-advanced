import DB from './db.js';

export default class ToDoList {
  items = [1, 2, 3];
  db;

  constructor(db) {
    this.db = db;
  }

  saveToDB() {
    this.db.save(this.items);
  }
}
