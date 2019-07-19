import {
  apply,
  applyTo,
  pipe,
} from 'ramda';
import applyAnd from './applyAnd';
import headGreaterThanZero from './headGreaterThanZero';
import mapApplyTo from './mapApplyTo';
import pairHead from './pairHead';
import debugAlias from './debugAlias';
import debugLastThenApplyEquals from './debugLastThenApplyEquals';

const debugPredicateAlpha = pipe(
  mapApplyTo,
  applyTo([
    headGreaterThanZero,
    debugAlias,
  ]),
  x => apply(pipe)(
    mapApplyTo(x)([
      debugLastThenApplyEquals,
      pairHead,
    ]),
  ),
  applyAnd,
);

export default debugPredicateAlpha;
