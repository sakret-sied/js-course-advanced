export default class Map2Example {
  static exec() {
    const weatherMap = new Map([
      ['London', 10],
      ['Moscow', 7],
      ['Paris', 14],
    ]);
    console.log(weatherMap);

    const weatherObject = {
      london: 10,
      moscow: 7,
      paris: 14,
    };
    console.log(Object.entries(weatherObject));

    const weatherMap2 = new Map(Object.entries(weatherObject));
    console.log(weatherMap2);
    console.log(weatherMap2.size);
  }
}
