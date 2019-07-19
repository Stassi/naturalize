import { pipe } from 'ramda';
import applyPipe from './applyPipe';
import flipPair from './flipPair';
import pairMapLength from './pairMapLength';
import debugLoopBeta from './debugLoopBeta';
import debugPredicateAlpha from './debugPredicateAlpha';
import debugTransformGammaEta from './debugTransformGammaEta';

const debugTransformAlpha = pipe(
  debugPredicateAlpha,
  debugLoopBeta,
  pairMapLength,
  applyPipe,
  flipPair(debugTransformGammaEta),
  applyPipe,
);

export default debugTransformAlpha;
