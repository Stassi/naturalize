import { head, pipe } from 'ramda';
import greaterThanZero from './greaterThanZero';

const headGreaterThanZero = pipe(head, greaterThanZero);

export default headGreaterThanZero;
