import debugTransformZeta from './debugTransformZeta';

const debugTransformEta = ([
  startWithoutPrefix,
  [
    alphaLengthFinal,
    betaLengthFinal,
  ],
]) => ([alpha, beta]) => (
  alphaLengthFinal
    ? debugTransformZeta({
      alpha,
      alphaLengthFinal,
      beta,
      betaLengthFinal,
      startWithoutPrefix,
    })
    : betaLengthFinal
);

export default debugTransformEta;
