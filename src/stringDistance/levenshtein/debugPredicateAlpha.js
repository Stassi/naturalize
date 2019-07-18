import {
  apply,
  flip,
  map,
  pipe,
  zip,
} from 'ramda';
import applyAnd from './applyAnd';
import applyEquals from './applyEquals';
import headGreaterThanZero from './headGreaterThanZero';
import mapNegateBitwiseNot from './mapNegateBitwiseNot';
import utf16Code from './utf16Code';

const applyUTF16Code = apply(utf16Code);
const mapApplyUTF16Code = map(applyUTF16Code);
const zipMapApplyUTF16Code = pipe(zip, mapApplyUTF16Code);
const flipZipMapApplyUTF16Code = flip(zipMapApplyUTF16Code);
const mapNegateBitwiseNotThenFlipZipMapApplyUTF16Code = pipe(
  mapNegateBitwiseNot,
  flipZipMapApplyUTF16Code,
);

const debugPredicateAlpha = strings => (lengths) => {
  const alphaLengthGreaterThanZero = headGreaterThanZero(lengths);
  const debugPredicateDeltaZappaKappa = mapNegateBitwiseNotThenFlipZipMapApplyUTF16Code(lengths);
  const debugPredicateOmegaEpsilonCharlie = pipe(debugPredicateDeltaZappaKappa, applyEquals);
  const debugPredicateAlphaBeta = debugPredicateOmegaEpsilonCharlie(strings);
  const predicates = [alphaLengthGreaterThanZero, debugPredicateAlphaBeta];
  return applyAnd(predicates);
};

export default debugPredicateAlpha;
