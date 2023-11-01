export default class RandomizeNumber {
  static execute() {
    console.log(RandomizeNumber.rand(1, 20));
  }

  static rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
