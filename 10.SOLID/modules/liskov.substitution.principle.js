import Admin from '../classes/admin.js';
import User from '../classes/user.js';
import Module from '/node_modules/js-little-core/module.js';

export default class LiskovSubstitutionPrinciple extends Module {
  execute() {
    this.logRole(new User());
    this.logRole(new Admin());
  }

  logRole(user) {
    console.log(`Role: ${user.getRole().toUpperCase()}`);
  }
}
