import { inc } from 'ramda';

const debugLoopAlpha = (x) => {
  let temp = 0;

  const predicate = x(temp);

  while (!predicate) {
    temp = inc(temp);
  }

  return temp;
};

export default debugLoopAlpha;
