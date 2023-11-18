import EventBubbling from './modules/event.bubbling.js';
import EventHandler from './modules/event.handler.js';
import VisualElements from './modules/visual.elements.js';
import WorkWithElements from './modules/work.with.elements.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppEventsAndDOM extends LittleCore {
  constructor() {
    super();
    this.setModules([
      WorkWithElements,
      VisualElements,
      EventHandler,
      EventBubbling,
    ]);
  }
}

new AppEventsAndDOM().init();
