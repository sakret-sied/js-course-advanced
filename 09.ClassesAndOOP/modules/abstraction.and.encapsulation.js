import Film from '../classes/film.js';
import Module from '/node_modules/js-little-core/module.js';

export default class AbstractionAndEncapsulation extends Module {
  execute() {
    const avatar = new Film('Avatar', 'Cameron', 240);
    console.log(avatar);
  }
}
