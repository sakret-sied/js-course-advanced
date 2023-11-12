export default class CharacterSaver {
  save(item) {
    localStorage.saveItem('char', item);
  }

  load() {
    // ...
  }
}
