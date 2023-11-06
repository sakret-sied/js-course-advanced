import Module from '../../src/module.js';

export default class TimerCreation extends Module {
  execute() {
    const messages = ['Bash!', 'Boom!'];
    const boomTimer = setTimeout(
      (message1, message2) => {
        console.log(message1);
        console.log(message2);
      },
      2000,
      ...messages
    );
    // clearTimeout(boomTimer);
  }
}
