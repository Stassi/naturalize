const pipe = (f, g) => x => g(f(x));

export default pipe;
