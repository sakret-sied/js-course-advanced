import Module from '/node_modules/js-little-core/module.js';

export default class FetchExtended extends Module {
  execute() {
    this.main();
  }

  async main() {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: 'jhlsajdkhas',
        password: '21hf9sd8bdfsi',
      }),
    });
    const data = await res.json();
    console.log(data);
  }
}
