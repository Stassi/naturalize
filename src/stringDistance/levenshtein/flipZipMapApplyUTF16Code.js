import {
  flip,
  pipe,
  zip,
} from 'ramda';
import mapApplyUTF16Code from './mapApplyUTF16Code';

const zipMapApplyUTF16Code = pipe(zip, mapApplyUTF16Code);
const flipZipMapApplyUTF16Code = flip(zipMapApplyUTF16Code);

export default flipZipMapApplyUTF16Code;
