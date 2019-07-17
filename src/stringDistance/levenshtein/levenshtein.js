import { pipe } from 'ramda';
import list from './list';
import debugTransformAlpha from './debugTransformAlpha';

// TODO: Rename variable, avoid duplicate calls
const debugTransformPrime = strings => debugTransformAlpha(strings)(strings);
const levenshtein = pipe(list, debugTransformPrime);

export default levenshtein;
