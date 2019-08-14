import {
  and,
  applyToMap,
  boolean,
  entries,
  isArray,
  itemIncludedIn,
  map,
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

const debug = pipe(
  ({ filter, ...props }) => ({
    ...props,
    filterIsArray: isArray(filter),
    mapApplyFilterTo: applyToMap(filter),
  }),
  ({
    asSimilarity,
    filterIsArray,
    mapApplyFilterTo,
    ...options
  }) => {
    const [
      filterIncludedIn,
      handleString,
      handleArrayOrKeyword,
    ] = mapApplyFilterTo([
      itemIncludedIn,
      (filter) => (stringMetric) => (...args) => stringMetric(filter)(...args),
      (filter) => (reduceKeyword) => (filterIsArray ? filter : reduceKeyword),
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

    const reduceKeyword = pipe(
      entries,
      reduce(keywordReducer, []),
    )(metrics);

    const stringMetric = (name) => stringMetrics({
      ...options,
      asSimilarity,
      name,
    });

    const handleArraysAndKeywords = (...args) => reduce(
      (acc, name) => ({
        ...acc,
        [name]: stringMetric(name)(...args),
      }),
      {},
    )(
      handleArrayOrKeyword(reduceKeyword),
    );

    const res = filterIsArrayOrKeyword
      ? handleArraysAndKeywords
      : handleString(stringMetric);

    return res;
  },
);

export default debug;
