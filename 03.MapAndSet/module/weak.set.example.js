export default class WeakSetExample {
  static exec() {
    let a = { a: 1 };
    let b = { b: 2 };
    const set = new WeakSet([a, b]);
    a = null;
    setTimeout(() => {
      console.log(set);
    }, 1000);
  }
}
