export default class Currency {
  static eur = 'EUR';
  static rub = 'RUB';
  static usd = 'USD';
  static currencies = new Map([
    [Currency.eur, 100],
    [Currency.rub, 1],
    [Currency.usd, 90],
  ]);

  static execute() {
    console.log(Currency.convert(5000, Currency.eur, Currency.usd));
    console.log(Currency.convert(10000, Currency.rub, Currency.eur));
    console.log(Currency.convert(3000, Currency.usd, Currency.rub));
    console.log(Currency.convert(3000, 'BLA', Currency.rub));
  }

  static convert(sum, originalCurrency, finalCurrency) {
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
