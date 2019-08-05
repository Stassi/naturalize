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

// TODO: Rename
const [
  debugDelta,
  applyMapNameIncludedInParam,
] = mapApplyTo([
  [distanceProp, mapItemIncludedIn],
  [invertibleDistances, distancesRequiringOptionsList],
]);

// TODO: Rename
const applyNameParam = pipe(
  applyToMap,
  debugDelta,
  ([distance, mapNameIncludedIn]) => ({ distance, mapNameIncludedIn }),
);

// TODO: Rename
const applyMapNameIncludedIn = pipe(
  applyMapNameIncludedInParam,
  ([isInvertible, requiresSimilarity]) => ({ isInvertible, requiresSimilarity }),
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
  ({ mapNameIncludedIn, ...props }) => ({
    ...props,
    ...applyMapNameIncludedIn(mapNameIncludedIn),
  }),
  ({
    asSimilarityAnd,
    isInvertible,
    ...props
  }) => ({
    ...props,
    requiresInversion: asSimilarityAnd(isInvertible),
  }),
  ({
    distance,
    requiresSimilarity,
    ...props
  }) => ({
    ...props,
    distance: requiresSimilarity ? distance(props) : distance,
  }),
  ({
    distance,
    requiresInversion,
  }) => (requiresInversion ? toggleDistanceOrSimilarity(distance) : distance),
);

export default stringMetrics;
