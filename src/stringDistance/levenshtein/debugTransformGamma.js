import { gt } from 'ramda';
import debugTransformDelta from './debugTransformDelta';
import debugLoopAlpha from './debugLoopAlpha';
import mapSubtractBy from './mapSubtractBy';

const debugTransformGamma = (lengths) => {
  const [alphaLength] = lengths;
  const greaterThanAlphaLength = gt(alphaLength);
  const predicates = [greaterThanAlphaLength, debugTransformDelta];
  const startWithoutPrefix = debugLoopAlpha(predicates);
  const mapSubtractByStart = mapSubtractBy(startWithoutPrefix);
  const finalLengths = mapSubtractByStart(lengths);
  return [startWithoutPrefix, finalLengths];
};

export default debugTransformGamma;
