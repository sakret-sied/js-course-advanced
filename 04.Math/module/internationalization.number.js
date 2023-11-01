export default class InternationalizationNumber {
  static execute() {
    const options1 = {
      style: 'currency',
      currency: 'RUB',
      useGrouping: false,
    };
    console.log(new Intl.NumberFormat('ru-RU', options1).format(23000));

    const options2 = {
      style: 'currency',
      currency: 'USD',
    };
    console.log(new Intl.NumberFormat('en-US', options2).format(23000));
    console.log(new Intl.NumberFormat('ar-SY', options2).format(23000));

    const options3 = {
      style: 'decimal',
    };
    console.log(new Intl.NumberFormat('ru-RU', options3).format(10000.1));

    const options4 = {
      style: 'percent',
    };
    console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1));

    const options5 = {
      style: 'unit',
      unit: 'celsius',
    };
    console.log(new Intl.NumberFormat('ru-RU', options5).format(25));
  }
}
