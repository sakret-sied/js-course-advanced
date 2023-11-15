import Module from '/node_modules/js-little-core/module.js';

export default class MyFetch extends Module {
  execute() {
    this.myFetch('https://dummyjson.com/products/')
      .then((data) => console.log(JSON.parse(data)))
      .catch((err) => console.error(err));
  }

  myFetch(url, method = 'GET') {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.send();

      request.addEventListener('load', function () {
        if (this.status > 400) {
          reject(new Error(this.status));
        }
        resolve(this.responseText);
      });

      request.addEventListener('error', function () {
        reject(new Error(this.status));
      });
    });
  }
}
