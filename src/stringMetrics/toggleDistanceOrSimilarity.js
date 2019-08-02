import map from '../map';
import subtractFromOne from '../subtractFromOne';

const toggleDistanceOrSimilarity = f => (...x) => subtractFromOne(f(...x));
const mapToggleDistanceOrSimilarity = map(toggleDistanceOrSimilarity);

export { mapToggleDistanceOrSimilarity, toggleDistanceOrSimilarity };
