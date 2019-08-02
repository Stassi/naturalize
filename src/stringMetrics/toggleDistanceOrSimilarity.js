import { map, subtractFromOne } from '../utilities';

const toggleDistanceOrSimilarity = f => (...x) => subtractFromOne(f(...x));
const mapToggleDistanceOrSimilarity = map(toggleDistanceOrSimilarity);

export { mapToggleDistanceOrSimilarity, toggleDistanceOrSimilarity };
