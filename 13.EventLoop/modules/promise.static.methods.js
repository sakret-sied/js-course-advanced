import Module from '/node_modules/js-little-core/module.js';

export default class PromiseStaticMethods extends Module {
  execute() {
    const prom = new Promise((resolve) => {
      console.log('Constructor');
      setTimeout(() => {
        resolve('Timer');
      }, 1000);
    });
    prom.then((data) => console.log(data));

    Promise.resolve('Resolve').then((data) => console.log(data));
    Promise.reject(new Error('Reject')).catch((data) => console.error(data));
  }
}
