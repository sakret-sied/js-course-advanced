import ConversionNumber from './module/conversion.number.js';
import Core from '../src/core.js';
import Currency from './module/currency.js';
import ExampleBigInt from './module/example.bigint.js';
import InternationalizationNumber from './module/internationalization.number.js';
import LibraryMath from './module/library.math.js';
import RandomizeNumber from './module/randomize.number.js';
import Remainder from './module/remainder.js';
import RoundingNumber from './module/rounding.number.js';
import SeparatorNumber from './module/separator.number.js';

class AppMath extends Core {
  constructor() {
    super();
    this.setModules([
      ConversionNumber,
      Currency,
      ExampleBigInt,
      InternationalizationNumber,
      LibraryMath,
      RandomizeNumber,
      Remainder,
      RoundingNumber,
      SeparatorNumber,
    ]);
  }
}

new AppMath().init();
