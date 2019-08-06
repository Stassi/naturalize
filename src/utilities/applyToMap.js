import applyTo from './applyTo';
import map from './map';
import pipe from './pipe';

const applyToMap = pipe(applyTo, map);

export default applyToMap;
