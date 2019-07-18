import { pipe } from 'ramda';
import mapLength from './mapLength';
import debugLoopBeta from './debugLoopBeta';
import debugPredicateAlpha from './debugPredicateAlpha';

// TODO: Simplify
const debugTransformBeta = pipe(
  debugPredicateAlpha,
  debugLoopBeta,
  x => pipe(
    mapLength,
    x,
  ),
);

export default debugTransformBeta;
