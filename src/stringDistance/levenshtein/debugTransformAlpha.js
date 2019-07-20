import {
  applyTo,
  last,
  not,
  pair,
  pipe,
} from 'ramda';
import applyAnd from './applyAnd';
import applyEquals from './applyEquals';
import applyFlattenTo from './applyFlattenTo';
import applyPipe from './applyPipe';
import flipPair from './flipPair';
import flipPairApplyPipe from './flipPairApplyPipe';
import flipZipMapApplyUTF16Code from './flipZipMapApplyUTF16Code';
import headLessThan from './headLessThan';
import headGreaterThanZero from './headGreaterThanZero';
import mapApplyTo from './mapApplyTo';
import mapApplyToAnd from './mapApplyToAnd';
import mapNegateBitwiseNot from './mapNegateBitwiseNot';
import mapSubtractBy from './mapSubtractBy';
import mapUTF16Code from './mapUTF16Code';
import pairHead from './pairHead';
import pairMapLength from './pairMapLength';
import debugLoopAlpha from './debugLoopAlpha';
import debugLoopBeta from './debugLoopBeta';
import debugTransformEta from './debugTransformEta';

const debugTransformAlpha = pipe(
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
  debugLoopBeta,
  pairMapLength,
  applyPipe,
  flipPair(
    pipe(
      applyFlattenTo(
        pipe(
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
        ),
      ),
      debugTransformEta,
    ),
  ),
  applyPipe,
);

export default debugTransformAlpha;
