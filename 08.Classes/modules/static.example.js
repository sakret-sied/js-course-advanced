import Test from '../classes/test.js';
import Module from '/node_modules/js-little-core/module.js';

export default class StaticExample extends Module {
  execute() {
    Test.hello();
    console.log(Test.a);
  }
}
