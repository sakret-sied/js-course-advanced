import Module from '../../src/module.js';

export default class SeparatorNumber extends Module {
  execute() {
    const bigNum1 = 350_500_000;
    console.log(bigNum1);
    const bigNum2 = 350500000;
    console.log(bigNum2);

    const payment1 = 20_10;
    console.log(payment1);
    const payment2 = 2_0.1_0;
    console.log(payment2);

    console.log(Number('350_500_000'.replaceAll('_', '')));
    console.log(Number('350500000'));
    console.log(Number.parseInt('350_500_000'));
    console.log(Number.parseFloat('350_500_000'));
  }
}
