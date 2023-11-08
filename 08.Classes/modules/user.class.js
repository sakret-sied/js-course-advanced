import User from '../classes/user.js';
import Module from '/node_modules/js-little-core/module.js';

export default class UserClass extends Module {
  execute() {
    const user = new User('user', 'pass');
    console.log(user);

    user.changePassword('pass', '1234');
    console.log(user);

    console.log(user.checkPassword('1234'));
  }
}
