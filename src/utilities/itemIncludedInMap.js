import itemIncludedIn from './itemIncludedIn';
import map from './map';
import pipe from './pipe';

const itemIncludedInMap = pipe(itemIncludedIn, map);

export default itemIncludedInMap;
