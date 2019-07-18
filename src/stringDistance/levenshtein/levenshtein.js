import { pipe } from 'ramda';
import list from './list';
import debugTransformAlpha from './debugTransformAlpha';

// TODO: Pointfree
const debugTransformPrime = (strings) => {
  const debugTransformAlphaBeta = debugTransformAlpha(strings);
  const debugTransformAlphaBetaGamma = debugTransformAlphaBeta(strings);
  return debugTransformAlphaBetaGamma(strings);
};

const levenshtein = pipe(list, debugTransformPrime);

export default levenshtein;
