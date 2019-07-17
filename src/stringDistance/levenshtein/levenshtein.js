import debugTransformAlpha from './debugTransformAlpha';
import debugTransformEta from './debugTransformEta';

const levenshtein = (alpha, beta) => {
  const [
    startWithoutPrefix,
    [
      alphaLengthFinal,
      betaLengthFinal,
    ],
  ] = debugTransformAlpha([alpha, beta]);

  return debugTransformEta({
    alpha,
    alphaLengthFinal,
    beta,
    betaLengthFinal,
    startWithoutPrefix,
  });
};

export default levenshtein;
