import AsyncExample from './modules/async.example.js';
import CallbackProblems from './modules/callback.problems.js';
import InsomniaExample from './modules/insomnia.example.js';
import JSONExample from './modules/json.example.js';
import PriceCalculation from './modules/price.calculation.js';
import ReceivingData from './modules/receiving.data.js';
import ServerRequests from './modules/server.requests.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppAsync extends LittleCore {
  constructor() {
    super();
    this.setModules([
      AsyncExample,
      ServerRequests,
      InsomniaExample,
      JSONExample,
      ReceivingData,
      PriceCalculation,
      CallbackProblems,
    ]);
  }
}

new AppAsync().init();
