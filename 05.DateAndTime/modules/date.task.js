import Module from '/node_modules/js-little-core/module.js';

export default class DateTask extends Module {
  user = { name: 'Vasia', birthday: '11/06/2023' };

  execute() {
    console.log(this.isBirthday(this.user));
  }

  isBirthday(user) {
    const birthday = new Date(user.birthday);
    const now = new Date();
    return (
      birthday.getDate() === now.getDate() &&
      birthday.getMonth() === now.getMonth()
    );
  }
}
