import Module from '/node_modules/js-little-core/module.js';

export default class LiveCycleDOMEvents extends Module {
  execute() {
    document.addEventListener('DOMContentLoaded', function (e) {
      console.log('DOMContentLoaded');
      console.log(e);
    });

    window.addEventListener('load', function (e) {
      console.log('load');
      console.log(e);
    });

    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });
  }
}
