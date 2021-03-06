import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

// rollup-plugin-terser does not support multiple outputs
const options = {
  input: 'src/index.js',
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    terser(),
  ],
};

export default [
  {
    ...options,
    output: {
      file: 'lib/naturalize.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  },
  {
    ...options,
    output: {
      file: 'lib/naturalize.umd.js',
      format: 'umd',
      name: 'naturalize',
      sourcemap: true,
    },
  },
];
