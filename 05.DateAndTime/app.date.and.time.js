import Core from '../src/core.js';
import DateCompare from './module/date.compare.js';
import DateCreation from './module/date.creation.js';
import DateInternationalization from './module/date.internationalization.js';
import DateOperation from './module/date.operation.js';
import DateTask from './module/date.task.js';

class AppDateAndTime extends Core {
  constructor() {
    super();
    this.setModules([
      DateCompare,
      DateCreation,
      DateInternationalization,
      DateOperation,
      DateTask,
    ]);
  }
}

new AppDateAndTime().init();
