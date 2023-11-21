import { sum } from './calc.js';
import Module from '/node_modules/js-little-core/module.js';

export default class App extends Module {
  execute() {
    console.log(sum(1, 2));
  }
}
