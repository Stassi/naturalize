import debugTransformDelta from './debugTransformDelta';

const debugTransformZeta = ({
  alpha,
  alphaLengthFinal,
  beta,
  betaLengthFinal,
  startWithoutPrefix,
}) => (
  alphaLengthFinal
    ? debugTransformDelta({
      alpha,
      alphaLengthFinal,
      beta,
      betaLengthFinal,
      startWithoutPrefix,
    })
    : betaLengthFinal
);

export default debugTransformZeta;
