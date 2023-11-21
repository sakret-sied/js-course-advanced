import EventBubbling from './modules/event.bubbling.js';
import EventDelegation from './modules/event.delegation.js';
import EventHandler from './modules/event.handler.js';
import LiveCycleDOMEvents from './modules/live.cycle.dom.events.js';
import MovingAroundDOM from './modules/moving.around.dom.js';
import SearchElements from './modules/search.elements.js';
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
      EventDelegation,
      MovingAroundDOM,
      LiveCycleDOMEvents,
      SearchElements,
    ]);
  }
}

new AppEventsAndDOM().init();
