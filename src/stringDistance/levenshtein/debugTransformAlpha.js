import { pipe } from 'ramda';
import debugTransformBeta from './debugTransformBeta';
import debugTransformGamma from './debugTransformGamma';

const debugTransformAlpha = pipe(debugTransformBeta, debugTransformGamma);

export default debugTransformAlpha;
