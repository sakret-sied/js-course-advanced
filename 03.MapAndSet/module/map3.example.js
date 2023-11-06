import Module from '../../src/module.js';

export default class Map3Example extends Module {
  execute() {
    const weatherMap = new Map([
      ['London', 10],
      ['Moscow', 7],
      ['Paris', 14],
    ]);
    console.log(weatherMap);

    weatherMap.forEach((value, key) => {
      console.log(key);
      console.log(value);
    });

    console.log([...weatherMap]);
    console.log([...weatherMap.keys()]);
    console.log([...weatherMap.values()]);
  }
}
