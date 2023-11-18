import AbstractionAndEncapsulation from './modules/abstraction.and.encapsulation.js';
import BuilderAndChaining from './modules/builder.and.chaining.js';
import InheritanceES6 from './modules/inheritance.es6.js';
import Inheritance from './modules/inheritance.js';
import MethodsOverride from './modules/methods.override.js';
import Polymorphism from './modules/polymorphism.js';
import TaskOrc from './modules/task.orc.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppClassesAndOOP extends LittleCore {
  constructor() {
    super();
    this.setModules([
      AbstractionAndEncapsulation,
      BuilderAndChaining,
      Inheritance,
      InheritanceES6,
      MethodsOverride,
      Polymorphism,
      TaskOrc,
    ]);
  }
}

new AppClassesAndOOP().init();
