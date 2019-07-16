import { applyTo, pipe } from 'ramda';
import applyEquals from './applyEquals';
import mapUTF16Code from './mapUTF16Code';

const debugTransformAlpha = pipe(
  applyTo,
  applyToIndex => pipe(
    mapUTF16Code,
    applyToIndex,
    applyEquals,
  ),
);

export default debugTransformAlpha;
