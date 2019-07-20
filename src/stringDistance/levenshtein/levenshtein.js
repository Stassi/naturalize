import { pipe } from 'ramda';
import list from './list';
import triFlatten from './triFlatten';
import debugTransformAlpha from './debugTransformAlpha';

const levenshtein = pipe(
  list,
  triFlatten(debugTransformAlpha),
);

export default levenshtein;
