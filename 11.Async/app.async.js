import CallbackProblems from './modules/callback.problems.js';
import PriceCalculation from './modules/price.calculation.js';
import ReceivingData from './modules/receiving.data.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppAsync extends LittleCore {
  constructor() {
    super();
    this.setModules([ReceivingData, PriceCalculation, CallbackProblems]);
  }
}

new AppAsync().init();
