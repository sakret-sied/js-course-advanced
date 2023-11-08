import Module from '/node_modules/js-little-core/module.js';

export default class WorkIntervals extends Module {
  execute() {
    const interval = setInterval(() => {
      console.log(new Date());
    }, 1000);

    const timer = setTimeout(() => clearInterval(interval), 5000);

    console.log(interval);
    console.log(timer);
  }
}
