import {
  and,
  applyTo,
  applyToMap,
  boolean,
  map,
  negate,
  or,
  pair,
  pipe,
} from './utilities';

const pairWithNegate = pair(negate);
const pairWithNegateThenApplyTo = pipe(pairWithNegate, applyTo);

const mapPairWithNegateThenApplyToWithoutFilter = (filterDiscrete) => pipe(
  applyToMap,
  pairWithNegateThenApplyTo(filterDiscrete),
);

const booleanAndNegate = pair(boolean)(negate);
const applyBooleanAndNegateTo = applyTo(booleanAndNegate);
const applyBooleanAndNegateToMap = pipe(
  (asSimilarity) => pipe(
    applyToMap(asSimilarity),
    map(and),
  ),
  applyBooleanAndNegateTo,
);

const mapFilterAnd = pipe(
  (filterIncludedIn) => pipe(
    pair('all'),
    filterIncludedIn,
    and,
  ),
  map,
);

const discreteAndPercentile = pair('discrete')('percentile');
const mapFilterAndThenApplyDiscreteAndPercentileTo = pipe(
  mapFilterAnd,
  applyTo(discreteAndPercentile),
);

const debugKeywordReducer = (filterIncludedIn) => (asSimilarity) => (
  acc,
  [
    name,
    {
      discrete,
      distance,
      similarity,
    },
  ],
) => {
  const [
    similarityRequiredAnd,
    asDistanceAnd,
  ] = applyBooleanAndNegateToMap(asSimilarity);

  const [
    filterDiscrete,
    filterPercentile,
  ] = mapFilterAndThenApplyDiscreteAndPercentileTo(filterIncludedIn);

  const mapPairWithNegateThenApplyTo = mapPairWithNegateThenApplyToWithoutFilter(filterDiscrete);

  const [percentile, isDiscreteCodomain] = mapPairWithNegateThenApplyTo(discrete);
  const isValidDistance = asDistanceAnd(distance);
  const isValidSimilarity = similarityRequiredAnd(similarity);

  const isPercentileCodomain = filterPercentile(percentile);
  const isValidCodomain = or(isDiscreteCodomain)(isPercentileCodomain);
  const isValidType = or(isValidDistance)(isValidSimilarity);
  const isValidTypeAndCodomain = and(isValidType)(isValidCodomain);

  return isValidTypeAndCodomain ? [...acc, name] : acc;
};

export default debugKeywordReducer;
