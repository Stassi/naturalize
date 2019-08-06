import {
  and,
  applyToMap,
  itemIncludedInMap,
  mapApplyTo,
  pipe,
} from '../utilities';
import {
  distanceProp,
  distancesRequiringOptionsList,
  invertibleDistances,
} from './distances';
import { toggleDistanceOrSimilarity } from './toggleDistanceOrSimilarity';

const [
  applyToDistancePropAndItemIncludedInMap,
  applyToInvertibleDistancesAndDistancesRequiringOptionsList,
] = mapApplyTo([
  [distanceProp, itemIncludedInMap],
  [invertibleDistances, distancesRequiringOptionsList],
]);

const [
  distanceAndNameIncludedIn,
  isInvertibleAndRequiresSimilarity,
] = [
  pipe(
    applyToMap,
    applyToDistancePropAndItemIncludedInMap,
    ([distance, nameIncludedIn]) => ({ distance, nameIncludedIn }),
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
    ...distanceAndNameIncludedIn(name),
  }),
  ({ nameIncludedIn, ...props }) => ({
    ...props,
    ...isInvertibleAndRequiresSimilarity(nameIncludedIn),
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
