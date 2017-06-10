import { map, filter, compose } from 'ramda';
import { logger } from './logger';

logger('NOOO!', 'red');

logger('This text will now be blue', 'blue');

if (module.hot) {
  module.hot.accept()
}


