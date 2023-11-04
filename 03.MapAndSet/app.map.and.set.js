import Core from '../src/core.js';
import Map1Example from './module/map1.example.js';
import Map2Example from './module/map2.example.js';
import Map3Example from './module/map3.example.js';
import Map4Example from './module/map4.example.js';
import SetExample from './module/set.example.js';
import WeakMapExample from './module/weak.map.example.js';
import WeakSetExample from './module/weak.set.example.js';

class AppMapAndSet extends Core {
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
