import {
  distanceProp,
  distancesRequiringOptionsList,
  invertibleDistances,
} from './distances';
import {
  and,
  applyToMap,
  mapApplyTo,
  mapItemIncludedIn,
  pipe,
} from '../utilities';
import { toggleDistanceOrSimilarity } from './toggleDistanceOrSimilarity';

// TODO: Change output signature to object (unary)
const [
  debugDelta,
  applyMapNameIncludedInParam,
] = mapApplyTo([
  [distanceProp, mapItemIncludedIn],
  [invertibleDistances, distancesRequiringOptionsList],
]);

const applyNameParam = pipe(
  applyToMap,
  debugDelta,
  ([distance, mapNameIncludedIn]) => ({ distance, mapNameIncludedIn }),
);

const stringMetrics = pipe(
  ({ asSimilarity, ...props }) => ({
    ...props,
    asSimilarityAnd: and(asSimilarity),
  }),
  ({ name, ...props }) => ({
    ...props,
    ...applyNameParam(name),
  }),
  ({
    asSimilarityAnd,
    distance,
    mapNameIncludedIn,
    name,
    ...options
  }) => {
    const [isInvertible, requiresSimilarity] = applyMapNameIncludedInParam(mapNameIncludedIn);
    const requiresInversion = asSimilarityAnd(isInvertible);

    const distanceWithOptions = requiresSimilarity
      ? distance(options)
      : distance;

    const convertToSimilarity = requiresInversion
      ? toggleDistanceOrSimilarity(distanceWithOptions)
      : distanceWithOptions;

    return convertToSimilarity;
  },
);

export default stringMetrics;
