const reduce = (reducer, initializer) => (list) => list.reduce(
  reducer,
  initializer,
);

export default reduce;
