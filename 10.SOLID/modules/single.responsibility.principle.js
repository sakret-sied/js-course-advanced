import Character from '../classes/character.js';
import CharacterSaver from '../classes/character.saver.js';
import Module from '/node_modules/js-little-core/module.js';

export default class SingleResponsibilityPrinciple extends Module {
  execute() {
    const character = new Character();
    const characterSaver = new CharacterSaver();
  }
}
