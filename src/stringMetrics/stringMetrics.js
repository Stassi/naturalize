import {
  distanceProp,
  distancesRequiringOptionsList,
  invertibleDistances,
} from './distances';
import and from '../and';
import applyToMap from '../applyToMap';
import mapApplyTo from '../mapApplyTo';
import mapItemIncludedIn from '../mapItemIncludedIn';
import pipe from '../pipe';
import { toggleDistanceOrSimilarity } from './toggleDistanceOrSimilarity';

// TODO: Rename
const [
  debugDelta,
  debugBeta,
] = mapApplyTo([
  [distanceProp, mapItemIncludedIn],
  [invertibleDistances, distancesRequiringOptionsList],
]);

// TODO: Rename
const debugAlpha = pipe(applyToMap, debugDelta);

const stringMetrics = ({
  asSimilarity,
  name,
  ...options
}) => {
  const asSimilarityAnd = and(asSimilarity);
  const [distance, mapNameIncludedIn] = debugAlpha(name);
  const [isInvertible, requiresSimilarity] = debugBeta(mapNameIncludedIn);
  const requiresInversion = asSimilarityAnd(isInvertible);

  const distanceWithOptions = requiresSimilarity
    ? distance(options)
    : distance;

  const convertToSimilarity = requiresInversion
    ? toggleDistanceOrSimilarity(distanceWithOptions)
    : distanceWithOptions;

  return convertToSimilarity;
};

export default stringMetrics;
