import reduce from './reduce';

const pipe = (...args) => (initializer) => reduce(
  (acc, val) => val(acc),
  initializer,
)(args);

export default pipe;
