export default class WeakMapExample {
  static exec() {
    let a = { a: 1 };
    let b = { b: 1 };
    const map = new WeakMap();
    map.set(a, 'testA');
    map.set(b, 'testB');
    console.log(map);
    console.log(map.get(a));
    console.log(map.has(a));
    console.log(map.delete(a));

    a = null;
    setTimeout(() => {
      console.log(map);
    }, 1000);

    let cache = new WeakMap();

    function getValue(obj) {
      if (!cache.has(obj)) {
        const res = 1;
        cache.set(obj, res);
      }
      return cache.get(obj);
    }

    const res = getValue(b);
    console.log(res);
    const res2 = getValue(b);
    console.log(res2);
  }
}
