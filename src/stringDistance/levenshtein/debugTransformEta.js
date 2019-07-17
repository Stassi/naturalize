import debugTransformZeta from './debugTransformZeta';

const debugTransformEta = ({
  alpha,
  alphaLengthFinal,
  beta,
  betaLengthFinal,
  startWithoutPrefix,
}) => (
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
