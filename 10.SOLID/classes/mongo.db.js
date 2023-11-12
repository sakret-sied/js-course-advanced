import DB from './db.js';

export default class MongoDB extends DB {
  save(items) {
    console.log(`Saved to Mongo: ${items}`);
  }
}
