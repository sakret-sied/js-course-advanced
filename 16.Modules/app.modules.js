import Core from '../src/core.js';

class AppModules extends Core {
  constructor() {
    super();
    this.setModules([]);
  }
}

new AppModules().init();
