import { negate, pipe } from 'ramda';
import bitwiseNot from './bitwiseNot';

const negateBitwiseNot = pipe(negate, bitwiseNot);

export default negateBitwiseNot;
