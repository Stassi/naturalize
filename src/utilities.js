const identity = x => x;
const pipe = (f, g) => g(f);
const subtract = x => y => x - y;

export {
  identity,
  pipe,
  subtract,
};
