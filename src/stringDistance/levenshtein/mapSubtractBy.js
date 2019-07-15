import {
  flip,
  map,
  pipe,
  subtract,
} from 'ramda';

const subtractBy = flip(subtract);
const mapSubtractBy = pipe(subtractBy, map);

export default mapSubtractBy;
