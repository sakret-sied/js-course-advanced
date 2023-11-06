import Core from '../src/core.js';
import TimerAccuracy from './module/timer.accuracy.js';
import TimerCreation from './module/timer.creation.js';
import TimerPizza from './module/timer.pizza.js';
import WorkIntervals from './module/work.intervals.js';

class AppTimers extends Core {
  constructor() {
    super();
    this.setModules([TimerAccuracy, TimerCreation, TimerPizza, WorkIntervals]);
  }
}

new AppTimers().init();
