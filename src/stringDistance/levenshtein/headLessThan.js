import {
  gt,
  head,
  pipe,
} from 'ramda';

const headLessThan = pipe(head, gt);

export default headLessThan;
