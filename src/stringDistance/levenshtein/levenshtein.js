import {
  dec,
  gt,
  inc,
} from 'ramda';
import mapApplyToAnd from './mapApplyToAnd';
import mapDecrement from './mapDecrement';
import mapLength from './mapLength';
import mapSubtractBy from './mapSubtractBy';
import debugPredicateAlpha from './debugPredicateAlpha';
import debugTransformAlpha from './debugTransformAlpha';

// TODO: Rename
const debug = (debugPredicates) => {
  let start = 0;

  const mapApplyStartToAnd = mapApplyToAnd(start);
  const predicate = mapApplyStartToAnd(debugPredicates);

  while (predicate) {
    // console.log('Ignoring common prefix, incrementing start variable');
    start = inc(start);
  }

  return start;
};

const CODES = [];
const VECTOR = [];

const levenshtein = (alpha, beta) => {
  let [
    alphaLength,
    betaLength,
  ] = mapLength([
    alpha,
    beta,
  ]);

  while (
    debugPredicateAlpha({
      alpha,
      beta,
      alphaLength,
      betaLength,
    })
  ) {
    // console.log('Ignoring common suffix: decrementing alpha and beta lengths.');
    [
      alphaLength,
      betaLength,
    ] = mapDecrement([
      alphaLength,
      betaLength,
    ]);
  }

  const greaterThanAlphaLength = gt(alphaLength);

  // TODO: Rename variables
  const startWithoutPrefix = debug([greaterThanAlphaLength, debugTransformAlpha]);

  const mapSubtractByStart = mapSubtractBy(startWithoutPrefix);
  [alphaLength, betaLength] = mapSubtractByStart([alphaLength, betaLength]);

  if (!alphaLength) {
    // console.log('No alphaLength, returning betaLength');
    return betaLength;
  }

  const v0 = VECTOR;

  let i = 0;

  while (i < betaLength) {
    CODES[i] = beta.charCodeAt(startWithoutPrefix + i);
    i = inc(i);
    v0[dec(i)] = i;
  }

  let current = 0;
  let left;
  let above;
  let charA;
  let j;

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < alphaLength; i++) {
    // console.log('Starting the nested loops');
    left = i;
    current = i + 1;

    charA = alpha.charCodeAt(startWithoutPrefix + i);

    // eslint-disable-next-line no-plusplus
    for (j = 0; j < betaLength; j++) {
      above = current;

      current = left;
      left = v0[j];

      if (charA !== CODES[j]) {
        // Insertion
        if (left < current) {
          current = left;
        }

        // Deletion
        if (above < current) {
          current = above;
        }

        current = inc(current);
      }

      v0[j] = current;
    }
  }

  return current;
};

export default levenshtein;
