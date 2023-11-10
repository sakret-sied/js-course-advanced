import Enemy from '../classes/enemy.js';
import Orc from '../classes/orc.js';
import Sword from '../classes/sword.js';
import Troll from '../classes/troll.js';
import Module from '/node_modules/js-little-core/module.js';

export default class TaskOrc extends Module {
  execute() {
    const sword = new Sword(20);

    const skelet = new Enemy('Skelet', 50);
    sword.dealDamage(skelet).dealDamage(skelet).dealDamage(skelet);

    const orc = new Orc('Orc', 200);
    sword
      .dealDamage(orc)
      .dealDamage(orc)
      .dealDamage(orc)
      .dealDamage(orc)
      .dealDamage(orc);

    const troll = new Troll('Troll', 200);
    sword
      .dealDamage(troll)
      .dealDamage(troll)
      .dealDamage(troll)
      .dealDamage(troll)
      .dealDamage(troll);
  }
}
