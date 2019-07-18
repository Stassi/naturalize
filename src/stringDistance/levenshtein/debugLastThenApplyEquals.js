import { last, pipe } from 'ramda';
import applyEquals from './applyEquals';

const debugApplyEquals = x => pipe(x, applyEquals);
const debugLastThenApplyEquals = pipe(last, debugApplyEquals);

export default debugLastThenApplyEquals;
