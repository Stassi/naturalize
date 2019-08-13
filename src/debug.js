import {
  entries,
  pipe,
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
)(metrics);

const percentileDistances = pipe(
  entries,
  reduce(
    (acc, [name, { discrete }]) => (!discrete ? [...acc, name] : acc),
    [],
  ),
)(metrics);

const debug = ({ filter, ...options }) => {
  let names;

  if (filter === 'discrete') {
    names = discreteDistances;
  } else if (filter === 'percentile') {
    names = percentileDistances;
  }

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
