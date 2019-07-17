import { applyTo, pipe } from 'ramda';
import mapUTF16Code from './mapUTF16Code';
import applyEquals from './applyEquals';

const debugTransformDelta = pipe(
  applyTo,
  applyToIndex => pipe(
    mapUTF16Code,
    applyToIndex,
    applyEquals,
  ),
);

export default debugTransformDelta;
