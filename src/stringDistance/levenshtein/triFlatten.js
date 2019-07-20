import { curry } from 'ramda';

const triFlatten = curry((f, x) => f(x)(x)(x));

export default triFlatten;
