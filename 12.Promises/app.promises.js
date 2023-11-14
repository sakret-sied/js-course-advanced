import ErrorCreation from './modules/error.creation.js';
import FetchExample from './modules/fetch.example.js';
import FinallyExample from './modules/finally.example.js';
import PromiseChaining from './modules/promise.chaining.js';
import PromiseProcessing from './modules/promise.processing.js';
import QueryFunction from './modules/query.function.js';
import RejectExample from './modules/reject.example.js';
import SelectCategory from './modules/select.category.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppPromises extends LittleCore {
  constructor() {
    super();
    this.setModules([
      FetchExample,
      PromiseProcessing,
      PromiseChaining,
      RejectExample,
      FinallyExample,
      SelectCategory,
      ErrorCreation,
      QueryFunction,
    ]);
  }
}

new AppPromises().init();
