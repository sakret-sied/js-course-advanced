import Core from '../src/core.js';
import ExampleBigInt from './module/example.bigint.js';
import Currency from './module/currency.js';
import LibraryMath from './module/library.math.js';
import ConversionNumber from './module/conversion.number.js';
import InternationalizationNumber from './module/internationalization.number.js';
import RandomizeNumber from './module/randomize.number.js';
import RoundingNumber from './module/rounding.number.js';
import SeparatorNumber from './module/separator.number.js';
import Remainder from './module/remainder.js';

class App extends Core {
  constructor() {
    super();
    this.modules
      .set(ConversionNumber.name, ConversionNumber)
      .set(Currency.name, Currency)
      .set(ExampleBigInt.name, ExampleBigInt)
      .set(InternationalizationNumber.name, InternationalizationNumber)
      .set(LibraryMath.name, LibraryMath)
      .set(RandomizeNumber.name, RandomizeNumber)
      .set(Remainder.name, Remainder)
      .set(RoundingNumber.name, RoundingNumber)
      .set(SeparatorNumber.name, SeparatorNumber);
    this.selectorKey = 'selectorMath';
  }
}

new App().init();
