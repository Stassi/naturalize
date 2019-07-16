import { gt } from 'ramda';
import mapSubtractBy from './mapSubtractBy';
import debugLoopAlpha from './debugLoopAlpha';
import debugTransformAlpha from './debugTransformAlpha';

const debugTransformBeta = (lengths) => {
  const [alphaLength] = lengths;
  const greaterThanAlphaLength = gt(alphaLength);
  const predicates = [greaterThanAlphaLength, debugTransformAlpha];
  const startWithoutPrefix = debugLoopAlpha(predicates);
  const mapSubtractByStart = mapSubtractBy(startWithoutPrefix);
  const finalLengths = mapSubtractByStart(lengths);
  return [startWithoutPrefix, finalLengths];
};

export default debugTransformBeta;
