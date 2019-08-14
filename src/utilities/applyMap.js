import apply from './apply';
import map from './map';
import pipe from './pipe';

const applyMap = pipe(apply, map);

export default applyMap;
