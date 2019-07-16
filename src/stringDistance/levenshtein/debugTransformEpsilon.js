import mapDecrement from './mapDecrement';
import mapLength from './mapLength';
import debugPredicateAlpha from './debugPredicateAlpha';

const debugTransformEpsilon = ([alpha, beta]) => {
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

  return [
    alphaLength,
    betaLength,
  ];
};

export default debugTransformEpsilon;
