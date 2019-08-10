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
  percentileDistances as invertibleDistances,
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
  isInvertibleAndRequiresOptions,
] = [
  pipe(
    applyToMap,
    applyToDistancePropAndItemIncludedInMap,
    ([distance, nameIncludedIn]) => ({ distance, nameIncludedIn }),
  ),
  pipe(
    applyToInvertibleDistancesAndDistancesRequiringOptionsList,
    ([isInvertible, requiresOptions]) => ({ isInvertible, requiresOptions }),
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
    ...isInvertibleAndRequiresOptions(nameIncludedIn),
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
    requiresOptions,
    ...props
  }) => ({
    ...props,
    distance: requiresOptions ? distance(props) : distance,
  }),
  ({
    distance,
    requiresInversion,
  }) => (requiresInversion ? toggleDistanceOrSimilarity(distance) : distance),
);

export default stringMetrics;
