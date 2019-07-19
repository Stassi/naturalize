import { pipe } from 'ramda';
import debugTransformEta from './debugTransformEta';
import debugTransformGamma from './debugTransformGamma';

const debugTransformGammaEta = pipe(debugTransformGamma, debugTransformEta);

export default debugTransformGammaEta;
