export default class Test {
  static a = 1;

  static hello() {
    console.log('Hello');
  }

  static {
    let b = 5;
    this.a = 5;
  }
}
