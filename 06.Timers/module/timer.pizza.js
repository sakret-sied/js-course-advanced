import Module from '../../src/module.js';

export default class TimerPizza extends Module {
  execute() {
    this.pizzaTimer(15000);
  }

  pizzaTimer(time) {
    const timeout = 1000;
    const options = { minute: 'numeric', second: 'numeric' };
    const inverval = setInterval(() => {
      console.log(new Intl.DateTimeFormat('en-US', options).format(time));
      time -= timeout;
      if (time < 0) {
        console.log('🍕');
        clearInterval(inverval);
      }
    }, timeout);
  }
}
