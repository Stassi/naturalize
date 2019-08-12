import { reduce } from './utilities';
import { percentileDistances } from './stringMetrics/distances';
import stringMetrics from './stringMetrics';

const debug = ({ filter, ...options }) => {
  const names = filter === 'percentile' ? percentileDistances : [];

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
