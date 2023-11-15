import Module from '/node_modules/js-little-core/module.js';

export default class EventLoopExample extends Module {
  execute() {
    console.log(1);
    setTimeout(() => console.log(2));
    Promise.resolve(3).then(console.log);
    console.log(4);
  }
}
