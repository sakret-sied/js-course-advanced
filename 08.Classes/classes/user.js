export default class User {
  #login;
  #password;

  constructor(login, password) {
    this.#login = login;
    this.#password = this.#encodePassword(password);
  }

  changePassword(passwordOld, passwordNew) {
    if (!this.checkPassword(passwordOld)) {
      return false;
    }
    this.#password = this.#encodePassword(passwordNew);
    return true;
  }

  checkPassword(password) {
    return this.#encodePassword(password) === this.#password;
  }

  #encodePassword(password) {
    return password.split('').reverse().join('');
  }
}
