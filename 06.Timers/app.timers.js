import TimerAccuracy from './modules/timer.accuracy.js';
import TimerCreation from './modules/timer.creation.js';
import TimerPizza from './modules/timer.pizza.js';
import WorkIntervals from './modules/work.intervals.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppTimers extends LittleCore {
  constructor() {
    super();
    this.setModules([TimerAccuracy, TimerCreation, TimerPizza, WorkIntervals]);
  }
}

new AppTimers().init();
