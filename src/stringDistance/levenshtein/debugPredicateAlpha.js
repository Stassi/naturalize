import {
  applyTo,
  last,
  pipe,
} from 'ramda';
import applyAnd from './applyAnd';
import applyEquals from './applyEquals';
import applyPipe from './applyPipe';
import flipPair from './flipPair';
import flipPairApplyPipe from './flipPairApplyPipe';
import flipZipMapApplyUTF16Code from './flipZipMapApplyUTF16Code';
import headGreaterThanZero from './headGreaterThanZero';
import mapApplyTo from './mapApplyTo';
import mapNegateBitwiseNot from './mapNegateBitwiseNot';
import pairHead from './pairHead';

const debugPredicateAlpha = pipe(
  mapApplyTo,
  applyTo([
    headGreaterThanZero,
    pipe(
      mapNegateBitwiseNot,
      flipZipMapApplyUTF16Code,
    ),
  ]),
  mapApplyTo,
  flipPairApplyPipe,
  applyPipe,
  applyTo([
    pipe(
      last,
      applyTo(
        applyEquals,
        flipPair,
      ),
      applyPipe,
    ),
    pairHead,
  ]),
  applyAnd,
);

export default debugPredicateAlpha;
