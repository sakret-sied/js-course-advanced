import DependencyInversionPrinciple from './modules/dependency.inversion.principle.js';
import InterfaceSegregationPrinciple from './modules/interface.segregation.principle.js';
import LiskovSubstitutionPrinciple from './modules/liskov.substitution.principle.js';
import OpenClosedPrinciple from './modules/open.closed.principle.js';
import SingleResponsibilityPrinciple from './modules/single.responsibility.principle.js';
import LittleCore from '/node_modules/js-little-core/little.core.js';

class AppSOLID extends LittleCore {
  constructor() {
    super();
    this.setModules([
      SingleResponsibilityPrinciple,
      OpenClosedPrinciple,
      LiskovSubstitutionPrinciple,
      InterfaceSegregationPrinciple,
      DependencyInversionPrinciple,
    ]);
  }
}

new AppSOLID().init();
