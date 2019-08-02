import applyTo from './applyTo';
import map from './map';
import pipe from './pipe';

const mapApplyTo = pipe(applyTo, map);

export default mapApplyTo;
