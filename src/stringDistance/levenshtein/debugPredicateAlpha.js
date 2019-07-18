import applyAnd from './applyAnd';
import applyEquals from './applyEquals';
import headGreaterThanZero from './headGreaterThanZero';
import mapNegateBitwiseNot from './mapNegateBitwiseNot';

const debugPredicateAlpha = strings => (lengths) => {
  const [alpha, beta] = strings;
  const alphaLengthGreaterThanZero = headGreaterThanZero(lengths);
  const [alphaUTF16, betaUTF16] = mapNegateBitwiseNot(lengths);
  const predicateDelta = [
    alpha.charCodeAt(alphaUTF16),
    beta.charCodeAt(betaUTF16),
  ];
  const debugPredicateAlphaBeta = applyEquals(predicateDelta);
  const predicates = [alphaLengthGreaterThanZero, debugPredicateAlphaBeta];
  return applyAnd(predicates);
};

export default debugPredicateAlpha;
