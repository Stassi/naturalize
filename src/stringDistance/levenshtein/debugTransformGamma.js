import {
  applyTo,
  not,
  pair,
  pipe,
} from 'ramda';
import applyEquals from './applyEquals';
import applyPipe from './applyPipe';
import flipPair from './flipPair';
import headLessThan from './headLessThan';
import mapApplyTo from './mapApplyTo';
import mapApplyToAnd from './mapApplyToAnd';
import mapSubtractBy from './mapSubtractBy';
import mapUTF16Code from './mapUTF16Code';
import debugLoopAlpha from './debugLoopAlpha';

const debugTransformGamma = pipe(
  headLessThan,
  flipPair(
    pipe(
      applyTo,
      x => pipe(
        mapUTF16Code,
        x,
        applyEquals,
      ),
    ),
  ),
  x => pipe(
    mapApplyToAnd,
    applyTo(x),
    not,
  ),
  debugLoopAlpha,
  mapApplyTo,
  applyTo([
    mapSubtractBy,
    pair,
  ]),
  applyPipe,
);

export default debugTransformGamma;
