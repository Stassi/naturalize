import { pipe } from 'ramda';
import debugTransformBeta from './debugTransformBeta';
import debugTransformEta from './debugTransformEta';
import debugTransformGamma from './debugTransformGamma';

const debugTransformAlpha = pipe(
  debugTransformBeta,
  debugTransformGamma,
  debugTransformEta,
);

export default debugTransformAlpha;
