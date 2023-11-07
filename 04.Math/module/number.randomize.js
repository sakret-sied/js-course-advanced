import Module from '../../src/module.js';

export default class NumberRandomize extends Module {
  execute() {
    console.log(this.rand(1, 20));
  }

  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
