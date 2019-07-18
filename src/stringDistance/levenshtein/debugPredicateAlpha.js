import { negate } from 'ramda';
import bitwiseNot from './bitwiseNot';

const debugPredicateAlpha = ([alpha, beta]) => ([alphaLength, betaLength]) => alphaLength > 0
  && (alpha.charCodeAt(bitwiseNot(negate(alphaLength)))
    === beta.charCodeAt(bitwiseNot(negate(betaLength))));

export default debugPredicateAlpha;
