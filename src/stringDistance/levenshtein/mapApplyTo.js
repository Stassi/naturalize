import {
  applyTo,
  map,
  pipe,
} from 'ramda';

const mapApplyTo = pipe(applyTo, map);

export default mapApplyTo;
