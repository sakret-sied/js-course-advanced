import App from './modules/app.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppModules extends LittleCore {
  constructor() {
    super();
    this.setModules([App]);
  }
}

new AppModules().init();
