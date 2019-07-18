import applyAnd from './applyAnd';
import applyEquals from './applyEquals';
import greaterThanZero from './greaterThanZero';
import negateBitwiseNot from './negateBitwiseNot';

const debugPredicateAlpha = ([alpha, beta]) => ([alphaLength, betaLength]) => {
  const [alphaUTF16, betaUTF16] = [
    negateBitwiseNot(alphaLength),
    negateBitwiseNot(betaLength),
  ];
  const predicateDelta = [
    alpha.charCodeAt(alphaUTF16),
    beta.charCodeAt(betaUTF16),
  ];
  const debugPredicateAlphaBeta = applyEquals(predicateDelta);
  const alphaLengthGreaterThanZero = greaterThanZero(alphaLength);
  const predicates = [alphaLengthGreaterThanZero, debugPredicateAlphaBeta];
  return applyAnd(predicates);
};

export default debugPredicateAlpha;
