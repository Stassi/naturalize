import { reduce } from './utilities';
import { percentileDistances } from './stringMetrics/distances';
import stringMetrics from './stringMetrics';

const debugBeta = ({ names, ...options }) => (...args) => reduce(
  (acc, name) => ({
    ...acc,
    [name]: stringMetrics({ ...options, name })(...args),
  }),
  {},
)(names);

const debug = ({ filter, ...props }) => debugBeta({
  ...props,
  names: filter === 'percentile' ? percentileDistances : [],
});

export default debug;
