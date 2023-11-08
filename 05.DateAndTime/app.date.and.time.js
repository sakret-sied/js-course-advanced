import DateCompare from './modules/date.compare.js';
import DateCreation from './modules/date.creation.js';
import DateInternationalization from './modules/date.internationalization.js';
import DateOperation from './modules/date.operation.js';
import DateTask from './modules/date.task.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppDateAndTime extends LittleCore {
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
