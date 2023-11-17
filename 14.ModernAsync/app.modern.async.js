import ActivityGenerator from './modules/activity.generator.js';
import AsyncAwait from './modules/async.await.js';
import FetchExtended from './modules/fetch.extended.js';
import MyCity from './modules/my.city.js';
import ParallelExecution from './modules/parallel.execution.js';
import TryCatch from './modules/try.catch.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppModernAsync extends LittleCore {
  constructor() {
    super();
    this.setModules([
      AsyncAwait,
      TryCatch,
      MyCity,
      ParallelExecution,
      FetchExtended,
      ActivityGenerator,
    ]);
  }
}

new AppModernAsync().init();
