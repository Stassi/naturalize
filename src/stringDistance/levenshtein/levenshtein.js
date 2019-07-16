import debugTransformEpsilonBeta from './debugTransformEpsilonBeta';
import debugTransformZeta from './debugTransformZeta';

const levenshtein = (alpha, beta) => {
  const [
    startWithoutPrefix,
    [
      alphaLengthFinal,
      betaLengthFinal,
    ],
  ] = debugTransformEpsilonBeta([alpha, beta]);

  return debugTransformZeta({
    alpha,
    alphaLengthFinal,
    beta,
    betaLengthFinal,
    startWithoutPrefix,
  });
};

export default levenshtein;
