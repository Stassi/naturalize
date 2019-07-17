import { dec, inc } from 'ramda';

const CODES = [];
const VECTOR = [];

const debugTransformZeta = ({
  alpha,
  alphaLengthFinal,
  beta,
  betaLengthFinal,
  startWithoutPrefix,
}) => {
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

export default debugTransformZeta;
