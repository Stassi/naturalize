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

const [
  applyToDistancePropAndMapItemIncludedIn,
  applyToInvertibleDistancesAndDistancesRequiringOptionsList,
] = mapApplyTo([
  [distanceProp, mapItemIncludedIn],
  [invertibleDistances, distancesRequiringOptionsList],
]);

const [
  distanceAndMapNameIncludedIn,
  isInvertibleAndRequiresSimilarity,
] = [
  pipe(
    applyToMap,
    applyToDistancePropAndMapItemIncludedIn,
    ([distance, mapNameIncludedIn]) => ({ distance, mapNameIncludedIn }),
  ),
  pipe(
    applyToInvertibleDistancesAndDistancesRequiringOptionsList,
    ([isInvertible, requiresSimilarity]) => ({ isInvertible, requiresSimilarity }),
  ),
];

const stringMetrics = pipe(
  ({ asSimilarity, ...props }) => ({
    ...props,
    asSimilarityAnd: and(asSimilarity),
  }),
  ({ name, ...props }) => ({
    ...props,
    ...distanceAndMapNameIncludedIn(name),
  }),
  ({ mapNameIncludedIn, ...props }) => ({
    ...props,
    ...isInvertibleAndRequiresSimilarity(mapNameIncludedIn),
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
