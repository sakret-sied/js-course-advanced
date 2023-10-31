export default class Map4Example {
  static execute() {
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
