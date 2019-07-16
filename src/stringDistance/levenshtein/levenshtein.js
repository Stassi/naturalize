import debugTransformBeta from './debugTransformBeta';
import debugTransformEpsilon from './debugTransformEpsilon';
import debugTransformZeta from './debugTransformZeta';

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

  return debugTransformZeta({
    alpha,
    alphaLengthFinal,
    beta,
    betaLengthFinal,
    startWithoutPrefix,
  });
};

export default levenshtein;
