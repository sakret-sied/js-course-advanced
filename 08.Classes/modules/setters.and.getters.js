import Task from '../classes/task.js';
import Module from '/node_modules/js-little-core/module.js';

export default class SettersAndGetters extends Module {
  execute() {
    const task = {
      title: 'Task1',
      dueTo: new Date('2023/01/01'),

      get isOverdue() {
        return this.dueTo < new Date();
      },

      set isOverdue(isOverdue) {
        if (!isOverdue) {
          this.dueTo = new Date();
        }
      },
    };

    console.log(task);
    task.isOverdue = false;
    console.log(task);

    const newTask = new Task('Task2', new Date('2023/1/1'));
    console.log(newTask);
  }
}
