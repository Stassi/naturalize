import { pipe } from 'ramda';
import debugTransformBeta from './debugTransformBeta';
import debugTransformEta from './debugTransformEta';
import debugTransformGamma from './debugTransformGamma';

// TODO: Simplify
const debugTransformAlpha = pipe(
  debugTransformBeta,
  x => pipe(
    x,
    pipe(
      debugTransformGamma,
      debugTransformEta,
    ),
  ),
);

export default debugTransformAlpha;
