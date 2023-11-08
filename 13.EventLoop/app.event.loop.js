import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppEventLoop extends LittleCore {
  constructor() {
    super();
    this.setModules([]);
  }
}

new AppEventLoop().init();
