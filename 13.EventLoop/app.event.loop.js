import Core from '../src/core.js';

class AppEventLoop extends Core {
  constructor() {
    super();
    this.setModules([]);
  }
}

new AppEventLoop().init();
