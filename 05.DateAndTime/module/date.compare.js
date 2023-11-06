import Module from '../../src/module.js';

export default class DateCompare extends Module {
  execute() {
    const first = new Date(2024, 10, 4);
    const second = new Date(2024, 10, 3);

    console.log(first < second);
    console.log(first == second);
    console.log(first === second);

    console.log(first.getTime() == second.getTime());
    console.log(first.getTime() === second.getTime());
    console.log(Number(first) === Number(second));
    console.log(+first === +second);
  }
}
