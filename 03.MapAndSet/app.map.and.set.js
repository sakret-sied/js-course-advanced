import Map1Example from './modules/map1.example.js';
import Map2Example from './modules/map2.example.js';
import Map3Example from './modules/map3.example.js';
import Map4Example from './modules/map4.example.js';
import SetExample from './modules/set.example.js';
import WeakMapExample from './modules/weak.map.example.js';
import WeakSetExample from './modules/weak.set.example.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppMapAndSet extends LittleCore {
  constructor() {
    super();
    this.setModules([
      Map1Example,
      Map2Example,
      Map3Example,
      Map4Example,
      SetExample,
      WeakMapExample,
      WeakSetExample,
    ]);
  }
}

new AppMapAndSet().init();
