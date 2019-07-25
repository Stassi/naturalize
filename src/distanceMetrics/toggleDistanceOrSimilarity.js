const toggleDistanceOrSimilarity = f => (...x) => 1 - f(...x);
const mapToggleDistanceOrSimilarity = x => x.map(toggleDistanceOrSimilarity);

export { toggleDistanceOrSimilarity, mapToggleDistanceOrSimilarity };
