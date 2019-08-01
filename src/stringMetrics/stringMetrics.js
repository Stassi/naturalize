import {
  distances,
  distancesRequiringOptions,
  invertibleDistances,
} from './distances';
import { toggleDistanceOrSimilarity } from './toggleDistanceOrSimilarity';

const applyRequiredOptionsToDistance = ({
  distance,
  options,
  requiresOptions,
}) => (requiresOptions ? distance(options) : distance);

const convertToSimilarity = ({
  distance,
  requiresSimilarity,
}) => (requiresSimilarity ? toggleDistanceOrSimilarity(distance) : distance);

const stringMetrics = ({
  asSimilarity,
  name,
  ...options
}) => convertToSimilarity({
  distance: applyRequiredOptionsToDistance({
    options,
    distance: distances[name],
    requiresOptions: Object
      .keys(distancesRequiringOptions)
      .includes(name),
  }),
  requiresSimilarity: asSimilarity
    && invertibleDistances.includes(name),
});

export default stringMetrics;
