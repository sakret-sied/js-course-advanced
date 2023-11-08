import Module from '/node_modules/js-little-core/module.js';

export default class Remainder extends Module {
  execute() {
    console.log(15 / 2);
    console.log(15 % 2);
    console.log(14 % 2);

    const isEven = (n) => n % 2 === 0;
    console.log(isEven(17));
    console.log(isEven(12));

    const isOdd = (n) => n % 2 === 1;
    console.log(isOdd(17));
    console.log(isOdd(12));
  }
}
