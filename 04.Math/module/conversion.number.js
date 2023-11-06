import Module from '../../src/module.js';

export default class ConversionNumber extends Module {
  execute() {
    console.log(10 === 10.0);

    console.log(0.1 + 0.2 === 0.3);
    console.log(0.1 + 0.2);

    console.log(Number('10'));
    console.log(+'20');
    console.log(Number.parseInt('11', 2));
    console.log(Number.parseInt('11 sec', 10));
    console.log(Number.parseInt('sec 11', 10));

    console.log(Number.parseFloat('11.5'));
    console.log(Number.parseFloat('11.5 sec'));
    console.log(Number.parseFloat('sec 11.5'));

    console.log(Number.isNaN(Number('10asda')));
    console.log(Number.isNaN(10 / 0));

    console.log(Number.isFinite(10 / 0));
    console.log(Number.isFinite(Number('10asda')));
    console.log(Number.isFinite(10));

    console.log(Number.isInteger(10));
    console.log(Number.isInteger(10.4));
  }
}
