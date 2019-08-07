import { reduce } from './utilities';
import stringMetrics from './stringMetrics';

// TODO: Rename
const debug = ({ names, ...options }) => (...args) => reduce(
  (acc, name) => ({
    ...acc,
    [name]: stringMetrics({ ...options, name })(...args),
  }),
  {},
)(names);

export default debug;
