import DB from '../classes/db.js';
import MongoDB from '../classes/mongo.db.js';
import ToDoList from '../classes/to.do.list.js';
import Module from '/node_modules/js-little-core/module.js';

export default class DependencyInversionPrinciple extends Module {
  execute() {
    const list1 = new ToDoList(new DB());
    list1.saveToDB();
    const list2 = new ToDoList(new MongoDB());
    list2.saveToDB();
  }
}
