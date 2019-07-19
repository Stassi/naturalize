import { dec, inc } from 'ramda';

const debugTransformZeta = ({
  alpha,
  alphaLengthFinal,
  beta,
  betaLengthFinal,
  startWithoutPrefix,
}) => {
  const codes = [];
  const vectors = [];

  let i = 0;

  while (i < betaLengthFinal) {
    codes[i] = beta.charCodeAt(startWithoutPrefix + i);
    i = inc(i);
    vectors[dec(i)] = i;
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
      left = vectors[j];

      if (charA !== codes[j]) {
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

      vectors[j] = current;
    }
  }

  return current;
};

export default debugTransformZeta;
