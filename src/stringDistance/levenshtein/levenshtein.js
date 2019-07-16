import mapDecrement from './mapDecrement';
import mapLength from './mapLength';
import debugPredicateAlpha from './debugPredicateAlpha';
import debugTransformBeta from './debugTransformBeta';
import debugTransformDelta from './debugTransformDelta';

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
