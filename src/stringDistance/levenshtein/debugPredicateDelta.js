import {
  apply,
  equals,
  map,
} from 'ramda';
import utf16Code from './utf16Code';

const debugPredicateDelta = ([
  alpha,
  beta,
]) => (start) => {
  const res = apply(
    equals,
    [
      utf16Code(alpha)(start),
      utf16Code(beta)(start),
    ],

    // TODO: map
    // map(
    //   x => utf16Code(x)(start),
    //   [alpha, beta],
    // ),
  );
  return res;
};

export default debugPredicateDelta;
