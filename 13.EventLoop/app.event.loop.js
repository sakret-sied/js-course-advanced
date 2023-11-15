import EventLoopExample from './modules/event.loop.example.js';
import MyFetch from './modules/my.fetch.js';
import PromiseCreation from './modules/promise.creation.js';
import PromiseStaticMethods from './modules/promise.static.methods.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppEventLoop extends LittleCore {
  constructor() {
    super();
    this.setModules([
      EventLoopExample,
      PromiseCreation,
      PromiseStaticMethods,
      MyFetch,
    ]);
  }
}

new AppEventLoop().init();
