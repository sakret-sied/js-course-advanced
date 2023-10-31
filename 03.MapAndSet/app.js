import Core from '../src/core.js';
import Map1Example from './module/map1.example.js';
import Map2Example from './module/map2.example.js';
import Map3Example from './module/map3.example.js';
import Map4Example from './module/map4.example.js';
import SetExample from './module/set.example.js';
import WeakMapExample from './module/weak.map.example.js';
import WeakSetExample from './module/weak.set.example.js';

class App extends Core {
  constructor() {
    super();
    this.modules
      .set('Map1Example', Map1Example)
      .set('Map2Example', Map2Example)
      .set('Map3Example', Map3Example)
      .set('Map4Example', Map4Example)
      .set('SetExample', SetExample)
      .set('WeakMapExample', WeakMapExample)
      .set('WeakSetExample', WeakSetExample);
  }
}

new App().init();
