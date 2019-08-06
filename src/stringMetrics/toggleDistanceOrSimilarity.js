import { map, subtractFrom } from '../utilities';

const subtractFromOne = subtractFrom(1);
const toggleDistanceOrSimilarity = f => (...x) => subtractFromOne(f(...x));
const mapToggleDistanceOrSimilarity = map(toggleDistanceOrSimilarity);

export { mapToggleDistanceOrSimilarity, toggleDistanceOrSimilarity };
