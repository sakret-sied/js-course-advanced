import Module from '/node_modules/js-little-core/module.js';

export default class WeakSetExample extends Module {
  execute() {
    let a = { a: 1 };
    let b = { b: 2 };
    const set = new WeakSet([a, b]);
    a = null;
    setTimeout(() => {
      console.log(set);
    }, 1000);
  }
}
