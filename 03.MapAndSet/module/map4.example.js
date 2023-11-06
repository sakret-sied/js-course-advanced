import Module from '../../src/module.js';

export default class Map4Example extends Module {
  execute() {
    let weatherMap = new Map([
      ['London', 10],
      ['Moscow', 7],
      ['Paris', 14],
    ]);
    console.log(weatherMap);

    weatherMap = new Map([...weatherMap].map((el) => el.reverse()));
    console.log(weatherMap);
  }
}
