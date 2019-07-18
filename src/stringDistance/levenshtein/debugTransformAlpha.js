import { pipe } from 'ramda';
import mapLength from './mapLength';
import debugLoopBeta from './debugLoopBeta';
import debugPredicateAlpha from './debugPredicateAlpha';
import debugTransformEta from './debugTransformEta';
import debugTransformGamma from './debugTransformGamma';

const debugTransformAlpha = pipe(
  debugPredicateAlpha,
  debugLoopBeta,
  x => pipe(mapLength, x),
  x => pipe(
    x,
    debugTransformGamma,
    debugTransformEta,
  ),
);

export default debugTransformAlpha;
