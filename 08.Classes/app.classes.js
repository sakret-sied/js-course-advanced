import ClassesExample from './modules/classes.example.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';
import ObjectCreate from './modules/object.create.js';
import PrivateExample from './modules/private.example.js';
import SettersAndGetters from './modules/setters.and.getters.js';
import StaticExample from './modules/static.example.js';
import UserClass from './modules/user.class.js';

class AppClasses extends LittleCore {
  constructor() {
    super();
    this.setModules([
      ClassesExample,
      ObjectCreate,
      PrivateExample,
      SettersAndGetters,
      StaticExample,
      UserClass,
    ]);
  }
}

new AppClasses().init();
