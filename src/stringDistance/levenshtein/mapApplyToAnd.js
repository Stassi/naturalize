import { pipe } from 'ramda';
import applyAnd from './applyAnd';
import mapApplyTo from './mapApplyTo';

const mapApplyToApplyAnd = pipe(mapApplyTo, applyAnd);

export default mapApplyToApplyAnd;
