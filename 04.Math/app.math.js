import BigIntExample from './modules/bigint.example.js';
import Currency from './modules/currency.js';
import MathExample from './modules/math.example.js';
import NumberConversion from './modules/number.conversion.js';
import NumberInternationalization from './modules/number.internationalization.js';
import NumberRandomize from './modules/number.randomize.js';
import NumberRounding from './modules/number.rounding.js';
import NumberSeparator from './modules/number.separator.js';
import Remainder from './modules/remainder.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppMath extends LittleCore {
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
