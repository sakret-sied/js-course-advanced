import Module from '../../src/module.js';

export default class Currency extends Module {
  eur = 'EUR';
  rub = 'RUB';
  usd = 'USD';
  currencies = new Map([
    [this.eur, 100],
    [this.rub, 1],
    [this.usd, 90],
  ]);

  execute() {
    console.log(this.convert(5000, this.eur, this.usd));
    console.log(this.convert(10000, this.rub, this.eur));
    console.log(this.convert(3000, this.usd, this.rub));
    console.log(this.convert(3000, 'BLA', this.rub));
  }

  convert(sum, originalCurrency, finalCurrency) {
    const original = this.currencies.get(originalCurrency);
    const final = this.currencies.get(finalCurrency);
    if (!original || !final) {
      return null;
    }
    const options = {
      style: 'currency',
      currency: finalCurrency,
    };
    const value = (sum * original) / final;
    return new Intl.NumberFormat('ru-RU', options).format(value);
  }
}
