import {
  and,
  applyMap,
  applyToMap,
  boolean,
  entries,
  isArray,
  itemIncludedIn,
  negate,
  or,
  pipe,
  reduce,
} from './utilities';
import stringMetrics from './stringMetrics';
import metrics from './stringMetrics/metrics';

const keywords = [
  'all',
  'discrete',
  'percentile',
];

const debug = ({
  asSimilarity,
  filter,
  ...options
}) => {
  const applyFilterToMap = applyToMap(filter);
  const [
    filterIsArray,
    filterIncludedIn,
  ] = applyFilterToMap([
    isArray,
    itemIncludedIn,
  ]);
  const filterIsKeyword = filterIncludedIn(keywords);
  const filterIsArrayOr = or(filterIsArray);
  const filterIsArrayOrKeyword = filterIsArrayOr(filterIsKeyword);

  const keywordReducer = (
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
      applyMap(and),
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

  const reduceKeyword = pipe(
    entries,
    reduce(keywordReducer, []),
  )(metrics);

  const handleArraysAndKeywords = (...args) => reduce(
    (acc, name) => ({
      ...acc,
      [name]: stringMetrics({
        ...options,
        asSimilarity,
        name,
      })(...args),
    }),
    {},
  )(filterIsArray ? filter : reduceKeyword);

  const handleString = (...args) => stringMetrics({
    ...options,
    asSimilarity,
    name: filter,
  })(...args);

  const res = filterIsArrayOrKeyword
    ? handleArraysAndKeywords
    : handleString;

  return res;
};

export default debug;
