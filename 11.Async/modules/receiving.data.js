import Module from '/node_modules/js-little-core/module.js';

export default class ReceivingData extends Module {
  execute() {
    this.request(1);
    this.request(2);
    this.request(3);

    console.log('end');
  }

  request(id) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/' + id);
    request.send();

    request.addEventListener('load', function () {
      const data = JSON.parse(this.responseText);
      console.log(data);
    });
  }
}
