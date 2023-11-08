import Module from '/node_modules/js-little-core/module.js';

export default class ObjectCreate extends Module {
  execute() {
    const User = {
      init(email, password) {
        this.email = email;
        this.password = password;
      },

      log() {
        console.log('Log');
      },
    };

    const user = Object.create(User);
    user.log();
    user.init('a@a.ru', '123');
    console.log(user);

    const admin = Object.create(user);
    console.log(admin);
    admin.log();
  }
}
