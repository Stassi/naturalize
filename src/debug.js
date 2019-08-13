import {
  entries,
  keys,
  pipe,
  propOf,
  reduce,
} from './utilities';
import stringMetrics from './stringMetrics';
import metrics from './stringMetrics/metrics';

const discreteDistances = pipe(
  entries,
  reduce(
    (acc, [name, { discrete }]) => (discrete ? [...acc, name] : acc),
    [],
  ),
);

const percentileDistances = pipe(
  entries,
  reduce(
    (acc, [name, { discrete }]) => (!discrete ? [...acc, name] : acc),
    [],
  ),
);

const debug = ({ filter, ...options }) => {
  const names = propOf({
    all: keys(metrics),
    discrete: discreteDistances(metrics),
    percentile: percentileDistances(metrics),
  })(filter);

  const res = (...args) => reduce(
    (acc, name) => ({
      ...acc,
      [name]: stringMetrics({ ...options, name })(...args),
    }),
    {},
  )(names);

  return res;
};

export default debug;
