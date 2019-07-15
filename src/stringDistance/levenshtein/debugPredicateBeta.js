import { and, gt } from 'ramda';
import debugPredicateDelta from './debugPredicateDelta';

const debugPredicateBeta = ({
  alpha,
  alphaLength,
  beta,
  start,
}) => and(
  gt(alphaLength)(start),
  debugPredicateDelta([alpha, beta])(start),
);

export default debugPredicateBeta;
