import {
  apply,
  flip,
  map,
  pipe,
  zip,
} from 'ramda';
import utf16Code from './utf16Code';
import mapNegateBitwiseNot from './mapNegateBitwiseNot';

const applyUTF16Code = apply(utf16Code);
const mapApplyUTF16Code = map(applyUTF16Code);
const zipMapApplyUTF16Code = pipe(zip, mapApplyUTF16Code);
const flipZipMapApplyUTF16Code = flip(zipMapApplyUTF16Code);
const mapNegateBitwiseNotThenFlipZipMapApplyUTF16Code = pipe(
  mapNegateBitwiseNot,
  flipZipMapApplyUTF16Code,
);
const debugAlias = mapNegateBitwiseNotThenFlipZipMapApplyUTF16Code;

export default debugAlias;
