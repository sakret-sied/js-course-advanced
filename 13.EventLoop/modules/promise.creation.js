import Module from '/node_modules/js-little-core/module.js';

export default class PromiseCreation extends Module {
  execute() {
    const prom = new Promise((resolve, reject) => {
      if (new Date() < new Date('01/01/2024')) {
        reject(new Error('Error'));
      }
      resolve('Success');
    });

    prom.then((data) => console.log(data)).catch((error) => console.log(error));

    this.timeout(1)
      .then(() => {
        console.log(1);
        return this.timeout(1);
      })
      .then(() => {
        console.log(1);
        return this.timeout(1);
      });
  }

  timeout(sec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, sec * 1000);
    });
  }
}
