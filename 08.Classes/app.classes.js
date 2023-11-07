import Core from '../src/core.js';
import ClassesExample from './module/classes.example.js';
import ObjectCreate from './module/object.create.js';
import PrivateExample from './module/private.example.js';
import SettersAndGetters from './module/setters.and.getters.js';
import StaticExample from './module/static.example.js';
import UserClass from './module/user.class.js';

class AppClasses extends Core {
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
