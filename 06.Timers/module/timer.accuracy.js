import Module from '../../src/module.js';

export default class TimerAccuracy extends Module {
  execute() {
    console.log(performance.now());
    setTimeout(() => {
      console.log(performance.now());
    }, 1000);
  }
}
