import Module from '../../src/module.js';

export default class RoundingNumber extends Module {
  execute() {
    console.log(Math.round(1.4));
    console.log(Math.round(1.6));
    console.log(Math.round(1.499999));

    console.log(Math.ceil(1.1));
    console.log(Math.ceil(1));
    console.log(Math.ceil(0.1));

    console.log(Math.floor(0.1));
    console.log(Math.floor(2.9));

    console.log(Math.trunc(2.9));
    console.log(Math.trunc(2.1));
    console.log(Math.trunc(1.11111));

    console.log(Number((1.499999).toFixed(1)));
  }
}
