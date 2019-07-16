import { pipe } from 'ramda';
import debugTransformEpsilon from './debugTransformEpsilon';
import debugTransformBeta from './debugTransformBeta';

const debugTransformEpsilonBeta = pipe(debugTransformEpsilon, debugTransformBeta);

export default debugTransformEpsilonBeta;
