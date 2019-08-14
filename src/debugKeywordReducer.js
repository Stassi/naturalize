import {
  and,
  applyToMap,
  boolean,
  map,
  negate,
  or,
  pipe,
} from './utilities';

const debugKeywordReducer = (asSimilarity) => (filterIncludedIn) => (
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
    asDistanceAnd,
    similarityRequiredAnd,
  ] = pipe(
    applyToMap(asSimilarity),
    map(and),
  )([
    negate,
    boolean,
  ]);

  const isAllowedType = or(
    asDistanceAnd(distance),
  )(
    similarityRequiredAnd(similarity),
  );

  const percentile = negate(discrete);
  const filterIncludedInKeywordsAllAnd = (x) => filterIncludedIn(['all', x]);
  const isAllowedCodomain = or(
    and(filterIncludedInKeywordsAllAnd('discrete'))(discrete),
  )(
    and(filterIncludedInKeywordsAllAnd('percentile'))(percentile),
  );

  const isAllowedTypeAnd = and(isAllowedType);
  const typeAndCodomainAllowed = isAllowedTypeAnd(isAllowedCodomain);
  return typeAndCodomainAllowed ? [...acc, name] : acc;
};

export default debugKeywordReducer;
