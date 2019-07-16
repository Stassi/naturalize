import {
  applyTo,
  map,
  pipe,
} from 'ramda';
import applyAnd from './applyAnd';

const mapApplyToApplyAnd = pipe(
  applyTo,
  map,
  applyAnd,
);

export default mapApplyToApplyAnd;
