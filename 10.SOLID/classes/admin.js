import User from './user.js';

export default class Admin extends User {
  #role = ['user', 'admin'];

  getRole() {
    return this.#role.join(', ');
  }
}
