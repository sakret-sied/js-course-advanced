import Core from '../src/core.js';
import BigIntExample from './module/bigint.example.js';
import Currency from './module/currency.js';
import MathExample from './module/math.example.js';
import NumberConversion from './module/number.conversion.js';
import NumberInternationalization from './module/number.internationalization.js';
import NumberRandomize from './module/number.randomize.js';
import NumberRounding from './module/number.rounding.js';
import NumberSeparator from './module/number.separator.js';
import Remainder from './module/remainder.js';

class AppMath extends Core {
  constructor() {
    super();
    this.setModules([
      BigIntExample,
      Currency,
      MathExample,
      NumberConversion,
      NumberInternationalization,
      NumberRandomize,
      NumberRounding,
      NumberSeparator,
      Remainder,
    ]);
  }
}

new AppMath().init();
