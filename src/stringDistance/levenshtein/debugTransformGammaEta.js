import { pipe } from 'ramda';
import applyFlattenTo from './applyFlattenTo';
import debugTransformEta from './debugTransformEta';
import debugTransformGamma from './debugTransformGamma';

const debugTransformGammaEta = pipe(
  applyFlattenTo(debugTransformGamma),
  debugTransformEta,
);

export default debugTransformGammaEta;
