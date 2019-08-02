import itemIncludedIn from './itemIncludedIn';
import map from './map';
import pipe from './pipe';

const mapItemIncludedIn = pipe(itemIncludedIn, map);

export default mapItemIncludedIn;
