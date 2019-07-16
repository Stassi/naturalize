import { dec, inc } from 'ramda';
import mapDecrement from './mapDecrement';
import mapLength from './mapLength';
import debugPredicateAlpha from './debugPredicateAlpha';
import debugTransformBeta from './debugTransformBeta';

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

  const [
    startWithoutPrefix,
    [
      alphaLengthFinal,
      betaLengthFinal,
    ],
  ] = debugTransformBeta([
    alphaLength,
    betaLength,
  ]);

  if (!alphaLengthFinal) {
    // console.log('No alphaLengthFinal, returning betaLengthFinal');
    return betaLengthFinal;
  }

  const v0 = VECTOR;

  let i = 0;

  while (i < betaLengthFinal) {
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
  for (i = 0; i < alphaLengthFinal; i++) {
    // console.log('Starting the nested loops');
    left = i;
    current = i + 1;

    charA = alpha.charCodeAt(startWithoutPrefix + i);

    // eslint-disable-next-line no-plusplus
    for (j = 0; j < betaLengthFinal; j++) {
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
