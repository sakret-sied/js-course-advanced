import Module from '/node_modules/js-little-core/module.js';

export default class DateOperation extends Module {
  execute() {
    const date1 = new Date(2024, 10, 15);
    const date2 = new Date(2024, 10, 15);
    console.log(Number(date1));
    console.log(date2 - date1);
    console.log(this.getDaysBetweenDates(date1, date2));
  }

  getDaysBetweenDates(dateFirst, dateSecond) {
    return dateSecond - dateFirst / (1000 * 60 * 60 * 24);
  }
}
