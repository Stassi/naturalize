import { inc, not } from 'ramda';
import mapApplyToAnd from './mapApplyToAnd';

const debugLoopAlpha = (debugPredicates) => {
  let start = 0;

  const mapApplyStartToAnd = mapApplyToAnd(start);
  const predicate = mapApplyStartToAnd(debugPredicates);
  const notPredicate = not(predicate);

  while (!notPredicate) {
    // console.log('Ignoring common prefix, incrementing start variable');
    start = inc(start);
  }

  return start;
};

export default debugLoopAlpha;
