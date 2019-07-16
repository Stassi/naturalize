import debugTransformBeta from './debugTransformBeta';
import debugTransformDelta from './debugTransformDelta';
import debugTransformEpsilon from './debugTransformEpsilon';

const levenshtein = (alpha, beta) => {
  const [alphaLength, betaLength] = debugTransformEpsilon([alpha, beta]);

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

  return alphaLengthFinal
    ? debugTransformDelta({
      alpha,
      alphaLengthFinal,
      beta,
      betaLengthFinal,
      startWithoutPrefix,
    })
    : betaLengthFinal;
};

export default levenshtein;
