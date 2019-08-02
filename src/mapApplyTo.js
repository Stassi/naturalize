import applyTo from './applyTo';
import map from './map';

// TODO: Pipe
const mapApplyTo = x => map(applyTo(x));

export default mapApplyTo;
